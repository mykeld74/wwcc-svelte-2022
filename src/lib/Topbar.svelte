<script>
	import ThemeToggle from '$lib/theme/ThemeToggle.svelte';
	import Nav from '$components/nav.svelte';
	let isOpen = false;
</script>

<div class="topbar">
	<div class="leftSide">
		<a href="/"><p class="homeLink">Westwoods Community Church</p></a>
		<ThemeToggle bind:isOpen />
	</div>
	<div class="rightSide">
		<Nav />
	</div>

	<slot />
</div>

<style>
	.topbar {
		width: 100%;
		background: var(--theme-colors-top_bar);
		color: var(--theme-colors-text);
		position: fixed;
		padding: 0 10px;
		top: 0;
		height: 50px;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.homeLink {
		color: var(--theme-colors-text);
		margin: 0;
		cursor: pointer;
	}
	.leftSide {
		display: flex;
		align-items: center;
	}
</style>
