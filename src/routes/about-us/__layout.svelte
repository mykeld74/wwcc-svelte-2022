<script>
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
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

<div in:fade={{ duration: 750 }} out:fade={{ duration: 250 }}>
	<slot />
</div>
