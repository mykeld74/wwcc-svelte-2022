<script context="module">
	export const prerender = true;
</script>

<script>
	import HeroBlock from '$components/hero.svelte';
	import ContactForm from '$components/contactForm.svelte';
</script>

<svelte:head>
	<title>Contact Us | Westwoods Community Church</title>
</svelte:head>

<HeroBlock>
	<span slot="header" class="center">Contact Us</span>
</HeroBlock>
<div class="block">
	<div class="container">
		<div class="blockContent">
			<p class="intro">
				We would love to hear from you! If you would like to talk to someone or request prayer you
				can reach us at 303.279.1616. You can also complete the form below and someone will get back
				to you.
			</p>

			<div class="splitBlock">
				<ContactForm />
				<div>
					<p class="xtraLrg">Join us this Sunday</p>
					<div>
						<p class="xtraLrg">9:00am & 10:30am</p>
						<p>7700 Woodard Dr.</p>
						<p>Lakewood, CO 80227</p>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.8285333747203!2d-105.08457898434875!3d39.67607150827313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b81ad73d8223d%3A0xef2d6fab8083844!2sWestwoods%20Community%20Church!5e0!3m2!1sen!2sus!4v1652884406968!5m2!1sen!2sus"
							title="Westwoods Map"
							id="wwMap"
							style="border:0;"
							allowFullScreen
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.block {
		background-color: var(--theme-colors-container_bg);
		color: var(--theme-colors-text);
		padding: 20px 0;
	}
	.container {
		width: calc(100% - 20px);
		max-width: 960px;
		margin: 0 auto 20px;
	}
	.intro {
		margin-bottom: 20px;
	}
	.splitBlock {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
		justify-content: center;
		align-items: start;
	}
	.xtraLrg {
		font-size: clamp(26px, 4vw, 46px);
		font-weight: bold;
	}
	p {
		margin: 0;
		line-height: 1.2;
	}
	#wwMap {
		width: 100%;
		aspect-ratio: 5/3;
		margin-top: 15px;
	}
</style>
