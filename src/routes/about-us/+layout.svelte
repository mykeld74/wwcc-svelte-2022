<script>
	import { fade } from 'svelte/transition';
</script>

<svelte:head />

<div in:fade|global={{ duration: 750 }} out:fade|global={{ duration: 250 }}>
	<slot />
</div>
