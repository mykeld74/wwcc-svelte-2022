<script>
	import { fade } from 'svelte/transition';
</script>

<svelte:head />

<div in:fade={{ duration: 750 }} out:fade={{ duration: 250 }}>
	<slot />
</div>
