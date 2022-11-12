<script>
	import Image from '$components/image.svelte';
</script>

<div class="hero">
	<div class="logoContainer">
		<Image source="WoWLogoNew" altTag="WoW Logo" />
	</div>
</div>

<main><slot /></main>

<style lang="scss">
	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		padding: 20px 0;
	}
</style>
