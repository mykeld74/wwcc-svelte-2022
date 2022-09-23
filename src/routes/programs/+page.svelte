<script>
	import Programs from '$data/programs';
	import HeroBlock from '$components/hero.svelte';
	import Block from '$components/textComponent.svelte';
	import { scale, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>Programs | Westwoods Community Church</title>
</svelte:head>

<HeroBlock>
	<span slot="header" class="center">Programs</span>
</HeroBlock>
<Block>
	<div slot="content" class="programContainer">
		<h3>Get the programs for this series here!</h3>

		<div class="programContainer">
			{#if loaded}
				{#each Programs as program, i}
					<div
						class="program"
						in:scale={{ duration: 500, delay: 100 * i }}
						out:fade={{ duration: 500 }}
					>
						<a href={program.location} class="programLink" target="_blank" rel="noopener noreferrer"
							>Program {program.date}</a
						>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</Block>

<style lang="scss">
	.programContainer {
		width: 100%;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 5vh;
		flex-wrap: wrap;
	}
	.program {
		width: 100%;
		max-width: 400px;
	}
	.programLink {
		width: 100%;
		max-width: 400px;
		font-size: 22px;
		font-weight: 500;
		background: var(--accentColor);
		color: rgb(255, 255, 255);
		border-radius: 5px;
		min-height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20px 15px 0px;
		cursor: pointer;
		transition: all 0.2s ease-in-out 0s;
		&:hover {
			transform: scale(1.025);
			box-shadow: rgb(0 0 0 / 40%) 3px 3px 8px;
		}
	}
</style>
