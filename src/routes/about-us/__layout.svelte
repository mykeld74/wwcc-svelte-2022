<script>
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-55JS0EX64L"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-55JS0EX64L');
	</script>
</svelte:head>

<div in:fade={{ duration: 750 }} out:fade={{ duration: 250 }}>
	<slot />
</div>
