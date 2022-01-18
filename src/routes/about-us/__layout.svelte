<script>
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 750 }} out:fade={{ duration: 250 }}>
	<slot />
</div>
