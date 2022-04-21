<script lang="ts">
	import '$css/reset.css';
	import '$css/wwcc.css';
	import Topbar from '$lib/Topbar.svelte';
	import { ThemeWrapper } from 'svelte-themer';
	import themes from '$lib/theme/themes';
	import { fade } from 'svelte/transition';
	import Modal from '$components/modal.svelte';
	import Img from '$components/image.svelte';
	import { onMount } from 'svelte';

	export let title = 'Westwoods Community Church';

	onMount(() => {
		document.getElementById('primaryContainer').hidden = false;
	});
</script>

<svelte:head>
	<title>{title}</title>
	<!--  Start Google Analytics -->
	<script>
		window.ga = function () {
			ga.q.push(arguments);
		};
		ga.q = [];
		ga.l = +new Date();
		ga('create', 'UA-120053347-1', 'auto');
		ga('set', 'anonymizeIp', true);
		ga('set', 'transport', 'beacon');
		ga('send', 'pageview');
	</script>
	<script src="https://www.google-analytics.com/analytics.js" async></script>
	<!--  End Google Analytics -->
</svelte:head>

<div id="primaryContainer" hidden>
	<ThemeWrapper key="my-svelte-app__theme" {themes}>
		<Topbar />
		<main transition:fade={{ duration: 125 }}>
			<slot />
		</main>
		<footer>
			<div class="footerLogo">
				<Img source="wwLogo" altTag="Westwoods Community Church Logo" />
			</div>
			<div class="footerText">
				<p>&copy;{new Date().getFullYear()} Westwoods Community Church</p>
				<Modal>
					<p slot="trigger" class="trigger">Directions and Times</p>
					<p slot="header" class="xtraLrg">Join us this Sunday</p>
					<div slot="content">
						<p class="xtraLrg">9:00am & 10:30am</p>
						<p>7700 Woodard Dr.</p>
						<p>Lakewood, CO 80227</p>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.8329214253686!2d-105.08480848435234!3d39.675972808278864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b81ad73d8223d%3A0xef2d6fab8083844!2sWestwoods%20Community%20Church!5e0!3m2!1sen!2sus!4v1569100714699!5m2!1sen!2sus"
							frameBorder="0"
							allowFullScreen
							title="Westwoods Map"
							id="wwMap"
						/>
					</div>
				</Modal>
				<p>7700 W. Woodard Drive | Lakewood | CO | 80227 | 303.279.1616</p>
			</div>
		</footer>
	</ThemeWrapper>
</div>

<style lang="scss">
	main {
		max-width: 100vw;
		overflow-x: hidden;
		transition: color 150ms ease-in-out, background-color 150ms ease-in-out;
		padding-top: 50px;
		min-height: calc(100vh - 120px);
	}
	.xtraLrg {
		font-size: clamp(26px, 4vw, 46px);
		font-weight: bold;
	}
	.trigger {
		cursor: pointer;
	}
	footer {
		background: var(--theme-colors-top_bar);
		color: var(--theme-colors-text);
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		p {
			margin: 0;
			font-size: 18px;
			line-height: 2;
		}
		@media (max-width: 468px) {
			flex-wrap: wrap;
		}
	}
	.footerLogo {
		width: 100px;
	}
	#wwMap {
		width: 100%;
		height: 50vh;
	}
</style>
