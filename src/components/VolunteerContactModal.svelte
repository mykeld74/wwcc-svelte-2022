<script lang="ts">
	import Modal from '$components/modal.svelte';
	import Portal from '$components/portal.svelte';
	import { fly, fade } from 'svelte/transition';
	import { imask } from 'svelte-imask';
	let fields = { name: '', email: '', phone: '', subject: '', message: '' };
	let errors = { name: '', email: '', phone: '', subject: '', message: '' };
	let formIsValid = false;
	let showTYModal = false;
	export let team = 'General',
		title = 'General',
		isOpen = false;

	$: isOpen;

	const maskConfig = { mask: '(000) 000-0000' };

	function openModal() {
		isOpen = true;
	}
	function closeModal() {
		isOpen = false;
	}

	const validateField = (fieldName, value) => {
		let error = '';
		switch (fieldName) {
			case 'name':
				if (value.length < 2) {
					errors.name = 'Name must be at least 2 characters long';
				} else {
					errors.name = '';
				}
				break;
			case 'email':
				if (!value.includes('@')) {
					errors.email = 'Please enter a valid email';
				} else {
					errors.email = '';
				}
				break;
			// case 'phone':
			// 	if (value.length < 10) {
			// 		errors.phone = 'Phone must be at least 10 characters long';
			// 	} else {
			// 		errors.phone = '';
			// 	}
			// 	break;
			// case 'message':
			// 	if (value.length < 5) {
			// 		errors.message = 'Message must be at least 5 characters long';
			// 	} else {
			// 		errors.message = '';
			// 	}
			// 	break;
		}
		return error;
	};

	const handleSubmit = (e) => {
		formIsValid = true;
		const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/;

		if (fields.name.length < 2) {
			formIsValid = false;
			errors.name = 'Please enter your name.';
		} else {
			errors.name = '';
		}

		if (emailTest.test(fields.email) === false) {
			formIsValid = false;
			errors.email = 'Please enter a valid email address.';
		} else {
			errors.email = '';
		}

		// if (fields.message.length < 5) {
		// 	formIsValid = false;
		// 	errors.message = 'Please tell us how we can help you.';
		// } else {
		// 	errors.message = '';
		// }

		e.preventDefault();

		let myForm = document.getElementById(team) as HTMLFormElement;
		let formData = new FormData(myForm) as any;
		if (formIsValid) {
			fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formData).toString()
			})
				.then(() => {
					console.log('Form successfully submitted'),
						closeModal(),
						(showTYModal = true),
						myForm.reset();
				})
				.catch((error) => alert(error));
		}
	};
</script>

<button class="infoButton" on:click={openModal}>
	<h4>Get More Info</h4>
</button>

{#if isOpen}
	<Portal>
		<div class="modalWrapper" transition:fade|global>
			<div class="modalBackground" on:click={closeModal} />
			<div class="modalContent" transition:fly|global={{ opacity: 0, y: 500 }}>
				<div class="modalHeader"><h3>Fill out this form to get more info about {title}</h3></div>
				<div class="modalBody">
					<form name={team} id={team} method="POST">
						<input type="hidden" name="form-name" value={team} />
						<input class="hidden" name="bot-field" />
						<input type="hidden" name="subject" value={`I'm interested in ${title}`} />
						<div class="formBlock">
							<label for="name">Name*</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Name"
								required
								bind:value={fields.name}
								on:blur={() => validateField('name', fields.name)}
							/>
							<p class="error">{errors.name}</p>
						</div>
						<div class="formBlock">
							<label for="email">Email*</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Email"
								required
								bind:value={fields.email}
								on:blur={() => validateField('email', fields.email)}
							/>
							<p class="error">{errors.email}</p>
						</div>
						<div class="formBlock">
							<label for="phone">Phone</label>
							<input
								use:imask={maskConfig}
								type="tel"
								name="phone"
								id="phone"
								placeholder="Phone"
								bind:value={fields.phone}
							/>
							<p class="error">{errors.phone}</p>
						</div>

						<div class="formBlock">
							<label for="message">Message</label>
							<textarea
								name="message"
								id="message"
								placeholder="Add specific questions here."
								required
								bind:value={fields.message}
								on:blur={() => validateField('message', fields.message)}
							/>
							<p class="error">{errors.message}</p>
						</div>
						<button type="submit" on:click={handleSubmit}>Send</button>
					</form>
				</div>
				<button class="modalCloseButton" on:click={closeModal}
					><p class="modalCloseText">&#10007;</p></button
				>
			</div>
		</div>
	</Portal>
{/if}

<Modal isOpen={showTYModal}>
	<div slot="content" class="successContent">
		<p>
			Thank you for your inquiry about {title}, someone will be in touch with you soon about how you
			can get involved.
		</p>
	</div>
</Modal>

<style lang="scss">
	form {
		width: 100%;
		background: var(--theme-colors-modal_background);
		padding: 20px;
	}
	p {
		color: var(--theme-colors-text);
		font-size: clamp(20px, 3.5vw, 26px);
	}

	.formBlock {
		width: 100%;

		label {
			display: block;
			color: var(--theme-colors-text);
			margin: 15px 0 0 0;
			font-size: clamp(16px, 2vw, 22px);
		}
		input,
		textarea {
			width: 100%;
			padding: 10px 5px;
			border-radius: 5px;
			border: none;
			font-size: clamp(18px, 2.7vw, 22px);
			margin: 5px 0 5px 0;
			font-weight: 400;
			background: #fff;
		}
	}
	button {
		width: 100%;
		padding: 10px 5px;
		border-radius: 5px;
		border: none;
		font-size: clamp(18px, 3vw, 24px);
		font-weight: 700;
		background: var(--red);
		color: #fff;
		margin-top: 20px;
	}
	.error {
		color: var(--red);
		font-size: 16px;
		margin: 0;
		font-style: italic;
	}
	.hidden {
		display: none;
	}
	.successContent {
		min-height: 50vh;
	}
	.infoButton {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		margin-top: 20px;
		background: var(--theme-colors-text);
		color: var(--theme-colors-background);
		cursor: pointer;
		h4 {
			margin: 0;
			text-transform: uppercase;
		}
	}

	.modalCloseButton {
		position: absolute;
		top: -20px;
		right: -20px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #ed2328;
		color: #fff;
		border: 3px solid var(--theme-colors-text);
		cursor: pointer;
		z-index: 503;
	}
</style>
