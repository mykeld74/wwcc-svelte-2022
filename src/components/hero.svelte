<script lang="ts">
	import Img from '$components/image.svelte';
	export let headerImage: string = null,
		defaultLayout: boolean = true,
		addBorder: boolean = false;
</script>

{#if addBorder}
	<div class="heroBlock bottomBorder" class:defaultLayout>
		{#if headerImage}
			<div class="heroBg"><Img source={headerImage} altTag="Header Image" /></div>
		{:else}
			<div class="heroBlock_image">
				<Img source="wwLogo" altTag="Westwoods Community Church Logo" />
			</div>
		{/if}
		<h1><slot name="header" /></h1>
	</div>
{:else}
	<div class="heroBlock" class:defaultLayout>
		{#if headerImage}
			<div class="heroBg"><Img source={headerImage} altTag="Header Image" /></div>
		{:else}
			<div class="heroBlock_image">
				<Img source="wwLogo" altTag="Westwoods Community Church Logo" />
			</div>
		{/if}
		<h1><slot name="header" /></h1>
	</div>
{/if}

<style lang="scss">
	.heroBlock {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		&.defaultLayout {
			padding: 2vh 2vw;
		}
	}
	.heroBlock_image {
		width: 250px;
	}

	h1 {
		margin-bottom: 0;
	}
	.bottomBorder {
		border-bottom: 2px solid var(--theme-colors-text);
	}
</style>
