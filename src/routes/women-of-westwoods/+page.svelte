<script>
	import Modal from '$components/modal.svelte';
</script>

<svelte:head>
	<title>Women of Westwoods</title>
</svelte:head>
<div class="container">
	<p class="center">
		The Women's Ministry of Westwoods is an arm of the church that provides opportunities for every
		woman to connect relationally, be encouraged in their walk with Jesus, and equipped to impact
		their world for the Kingdom. Whether it's through monthly Connect events, mom gatherings,
		focusing on fitness, regular bible study, praying together, holiday events, play dates, service
		opportunities, tea and coffee chats, impromptu fun, mentor meetings or parenting discussions,
		there is a place for YOU! Our hope is that ladies will be encouraged and challenged by doing
		life and building friendships!
	</p>

	<p class="center welcome"><strong>All Women Welcome!</strong></p>

	<p>
		If you would to learn more or have any questions, please email us at: <a
			href="mailto:womenofwestwoods@gmail.com">womenofwestwoods@gmail.com</a
		>
	</p>

	<p class="opportunity">We have opportunities to help!</p>
	<p>
		Life happens! We get to be the part of peoples happiest and hardest moments as we do life with
		them. As a community, we want to be an on-going resource to help in life's big moments. We are
		creating an on-going meal train crew sign up. If you would like to be someone to potentially
		prepare and drop off a meal for someone in need, please add your info to this form:
	</p>
	<a
		href="https://docs.google.com/forms/d/e/1FAIpQLScThg82dHBFrRqkVendoOj9_rs5L7iJtbl2Tjz5CVJmgDslmQ/viewform"
		target="_blank"
		rel="noopener noreferrer"><p class="trigger">Click here to add your info.</p></a
	>
</div>

<style lang="scss">
	.container {
		width: 100%;
		max-width: 1170px;
		margin: 30px auto;
		padding: 0 15px;
	}

	.welcome {
		font-size: clamp(20px, 3.5vw, 36px);
	}
	.opportunity {
		font-size: clamp(20px, 3vw, 26px);
		font-weight: bold;
	}

	.trigger {
		color: var(--linkColor);
		font-weight: 600;
		margin-top: 10px;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		&:hover {
			text-decoration: underline;
		}
	}
	.mealTrain {
		width: 100%;
		aspect-ratio: 16/9;
	}
</style>
