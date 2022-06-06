<script>
	import Modal from '$components/modal.svelte';

	let fields = {
		FirstName: '',
		LastName: '',
		Email: '',
		Phone: '',
		PledgeType: 'One Time',
		Amount: ''
	};
	let errors = { FirstName: '', LastName: '', Email: '', Phone: '', PledgeType: '', Amount: '' };
	let formIsValid = false;
	let formIsSubmitted = false;
	let showModal = false;

	const handleSubmit = (e) => {
		formIsValid = true;
		showModal = true;
		const EmailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/;

		if (fields.FirstName.length < 2) {
			formIsValid = false;
			showModal = false;
			errors.FirstName = 'Please enter your first name.';
		} else {
			errors.FirstName = '';
		}

		if (fields.LastName.length < 2) {
			formIsValid = false;
			showModal = false;
			errors.LastName = 'Please enter your last name.';
		} else {
			errors.LastName = '';
		}

		if (EmailTest.test(fields.Email) === false) {
			formIsValid = false;
			showModal = false;
			errors.Email = 'Please enter a valid Email address.';
		} else {
			errors.Email = '';
		}

		if (fields.Phone.length < 3) {
			formIsValid = false;
			showModal = false;
			errors.Phone = 'Please enter your Phone Number.';
		} else {
			errors.Phone = '';
		}
		if (fields.Amount.length < 1) {
			formIsValid = false;
			showModal = false;
			errors.Amount = 'Please enter your pledge amount.';
		} else {
			errors.Amount = '';
		}
		if (fields.PledgeType !== 'One Time' && fields.PledgeType !== 'Monthly') {
			formIsValid = false;
			showModal = false;
			errors.PledgeType = `One time or Monthly?`;
		} else {
			errors.PledgeType = '';
		}

		const scriptURL =
			'https://script.google.com/macros/s/AKfycbyutZsPiRwPVWClbIoPSU6H_ZjmW_fB4VS9DWzaDVbusVReswKM8bI64VZukX-PFHb2/exec';
		const form = document.forms['lighthousePledgeForm'];
		e.preventDefault();
		if (formIsValid) {
			formIsSubmitted = true;
			showModal = true;
			fetch(scriptURL, { method: 'POST', body: new FormData(form) })
				.then((response) => {
					console.log('Success!');
					showModal = true;
					form.reset();
					fields = {
						FirstName: '',
						LastName: '',
						Email: '',
						Phone: '',
						PledgeType: 'One Time',
						Amount: ''
					};
					formIsSubmitted = false;
				})
				.catch((error) => console.error('Error!', error.message));
		}
	};
</script>

<div class="pledgeFormContainer">
	<h4>Complete the form below to pledge a one time payment or a monthly commitment:</h4>
	<form name="lighthousePledgeForm" id="lighthousePledgeForm" onSubmit={handleSubmit} class="form">
		<section class="formSection">
			<div class="inputContainer">
				<input id="FirstName" name="FirstName" type="text" bind:value={fields.FirstName} required />
				<label for="FirstName" class="placeholderLabel">First Name*:</label>
			</div>
			<p class="error">{errors.FirstName}</p>
		</section>
		<section class="formSection">
			<div class="inputContainer">
				<input id="LastName" name="LastName" type="text" bind:value={fields.LastName} required />
				<label for="LastName" class="placeholderLabel">Last Name*:</label>
			</div>
			<p class="error">{errors.LastName}</p>
		</section>
		<section class="formSection">
			<div class="inputContainer">
				<input id="Email" name="Email" type="email" bind:value={fields.Email} required />
				<label for="Email" class="placeholderLabel">Email address*:</label>
			</div>
			<p class="error">{errors.Email}</p>
		</section>
		<section class="formSection">
			<div class="inputContainer">
				<input id="Phone" name="Phone" type="tel" bind:value={fields.Phone} required />
				<label for="Phone" class="placeholderLabel">Phone Number*:</label>
			</div>
			<p class="error">{errors.Phone}</p>
		</section>

		<section class="formSection">
			<div class="inputContainer">
				<input id="Amount" name="Amount" type="number" bind:value={fields.Amount} required />
				<label for="Amount" class="placeholderLabel">Amount*:</label>
			</div>

			<p class="error">{errors.Amount}</p>
		</section>
		<section class="formSection radioContainer">
			<p class="label">Pledge Type*:</p>
			<div class="radioButtonsContainer">
				<section class="radioButtons">
					<input
						type="radio"
						id="radioOT"
						name="PledgeType"
						value="One Time"
						bind:group={fields.PledgeType}
					/>
					<label for="radioOT">One Time</label>
				</section>
				<section class="radioButtons">
					<input
						type="radio"
						id="radioMonthly"
						name="PledgeType"
						value="Monthly"
						bind:group={fields.PledgeType}
					/>
					<label for="radioMonthly" class="noMargin">Monthly</label>
				</section>
			</div>
			<p class="error pledge">{errors.PledgeType}</p>
		</section>

		<section class="submitButtonContainer">
			<button type="submit" on:click={handleSubmit} disabled={formIsSubmitted}>Submit</button>
		</section>
	</form>
</div>
<Modal isOpen={showModal}>
	<div slot="content">
		<h2>Thank you for your pledge!</h2>
		<p>
			If you would like to set up your recurring donation or one time payment you may do that now.
		</p>
		<div>
			<a
				href="https://westwoods.churchcenter.com/giving/to/7700-lighthouse-fund"
				target="_blank"
				rel="noopener noreferrer"><div class="button">Set up donation</div></a
			>
		</div>
	</div>
</Modal>

<style lang="scss">
	.pledgeFormContainer {
		width: 100%;
		background: #fff;
		padding: 20px;
		margin-bottom: 20px;
		border-radius: 5px;
		h4 {
			color: #333;
		}
	}
	.form {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 20px;
		width: 100%;
	}
	.radioContainer {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		grid-column-gap: 20px;
		width: 100%;
		height: 50px;
	}
	.inputContainer {
		position: relative;
	}
	input {
		height: 50px;
		box-sizing: border-box;
		width: 100%;
		padding: 0 10px;
		position: relative;
		border-radius: 5px;
		border: 1px solid #777;
		+ label.placeholderLabel {
			position: absolute;
			top: 50%;
			left: 20px;
			transform: translateY(-50%);
			background: #fff;
			padding: 0 5px;
			transition: all 0.3s ease-in-out;
			font-size: 16px;
			margin: 0;
			font-size: clamp(16px, 2vw, 22px);
			color: #333;
			height: auto;
			border: none;
		}
		&:focus + label.placeholderLabel,
		&:valid + label.placeholderLabel {
			top: 0px;
			left: 5px;
			font-size: 0.8rem;
		}
	}
	input[type='text'],
	input[type='email'],
	input[type='tel'],
	input[type='number'] {
		font-size: clamp(16px, 2vw, 22px);
	}
	.error {
		margin: 0;
		color: var(--accentColor);
	}
	.pledge {
		grid-column: 1 / -1;
	}
	.label {
		margin-bottom: 5px;
		color: #333;
	}
	.formSection {
		position: relative;
	}

	.radioButtonsContainer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: space-between;
	}

	input[type='radio'] {
		display: none;

		+ label {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #fff;
			color: #333;
			border: 1px solid #ccc;
			border-radius: 5px;
			height: 25px;
			margin: 0;
			margin-bottom: 10px;
			cursor: pointer;
			&.noMargin {
				margin-bottom: 0;
			}
		}
		&:checked {
			+ label {
				background-color: rgb(25, 51, 89);
				color: #fff;
			}
		}
	}
	.submitButtonContainer {
		grid-column: 1/-1;
	}
	button,
	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 50px;
		font-size: clamp(16px, 2vw, 22px);
		font-weight: 600;
		background: var(--accentColor);
		border: none;
		border-radius: 5px;
		border: 2px solid var(--accentColor);
		color: #fff;
		transition: all 0.3s ease-in-out;
		&:hover {
			background: #fff;
			color: var(--accentColor);
		}
	}
</style>
