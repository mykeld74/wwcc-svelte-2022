<script lang="ts">
	import Modal from '$components/modal.svelte';
	let fields = { name: '', email: '', phone: '', subject: '', message: '' };
	let errors = { name: '', email: '', phone: '', subject: '', message: '' };
	let formIsValid = false;
	let showTYModal = false;

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
			case 'message':
				if (value.length < 10) {
					errors.message = 'Message must be at least 10 characters long';
				} else {
					errors.message = '';
				}
				break;
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

		if (fields.message.length < 3) {
			formIsValid = false;
			errors.message = 'Please tell us how we can help you.';
		} else {
			errors.message = '';
		}

		e.preventDefault();

		let myForm = document.getElementById('ContactUs') as HTMLFormElement;
		let formData = new FormData(myForm) as any;
		if (formIsValid) {
			fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formData).toString()
			})
				.then(() => {
					console.log('Form successfully submitted'), (showTYModal = true), myForm.reset();
				})
				.catch((error) => alert(error));
		}
	};
</script>

<section>
	<form name="Contact Us" id="ContactUs" method="POST">
		<input type="hidden" name="form-name" value="Contact Us" />
		<input class="hidden" name="bot-field" />
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
			<input type="tel" name="phone" id="phone" placeholder="Phone" bind:value={fields.phone} />
			<p class="error">{errors.phone}</p>
		</div>
		<div class="formBlock">
			<label for="subject">Subject</label>
			<input
				type="text"
				name="subject"
				id="subject"
				placeholder="Subject"
				bind:value={fields.subject}
			/>
			<p class="error">{errors.phone}</p>
		</div>
		<div class="formBlock">
			<label for="message">Message*</label>
			<textarea
				name="message"
				id="message"
				placeholder="Message"
				required
				bind:value={fields.message}
				on:blur={() => validateField('message', fields.message)}
			/>
			<p class="error">{errors.message}</p>
		</div>
		<button type="submit" on:click={handleSubmit}>Send</button>
	</form>

	{#if showTYModal}
		<Modal isOpen={showTYModal}>
			<div slot="content" class="successContent">
				<p>Thank you for your submission, we'll be in touch soon.</p>
			</div>
		</Modal>
	{/if}
</section>

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
</style>
