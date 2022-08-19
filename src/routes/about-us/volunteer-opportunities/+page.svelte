<script>
	import { onMount } from 'svelte';

	import Volunteer from '$data/volunteer.json';
	import HeroBlock from '$components/hero.svelte';

	const Ops = Volunteer.opportunities;
	let desc;
	let descHeight = 0;
	let w;
	// let descMinHeight;

	onMount(() => {
		if (window.innerWidth > 768) {
			const setHeight = setInterval(() => {
				descMinHeight();
				if (document.querySelectorAll('.desc').length > 0) {
					clearInterval(setHeight);
				}
			}, 100);
		}
	});

	let descMinHeight = () => {
		desc = document.querySelectorAll('.desc');
		for (let i = 0; i < Ops.length; i++) {
			if (desc[i].clientHeight > descHeight) {
				descHeight = desc[i].clientHeight;
			}
		}
		return descHeight;
	};
</script>

<svelte:head>
	<title>Volunteer Opportunities | Westwoods Community Church</title>
</svelte:head>

<HeroBlock>
	<span slot="header" class="center">Volunteer Opportunities</span>
</HeroBlock>

<div class="container" bind:clientWidth={w}>
	{#each Ops as op, i}
		<div class="volBlock">
			<h4 class="title">{op.title}</h4>
			<p class="desc" id="desc{i}" style="min-height: {descHeight}px">
				{op.desc}
			</p>
			{#if op.time}
				<p class="time">{op.time}</p>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	/* your styles go here */
	.container {
		width: calc(100% - 20px);
		max-width: 960px;
		margin: 0 auto 20px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
		gap: 2vh 3vw;
	}
	.volBlock {
		border: 1px solid #ccc;
		min-height: 300px;
		background: rgba(0, 0, 0, 0.3);

		@media (max-width: 801px) {
			width: 100%;
			min-height: auto;
		}
	}
	.title {
		width: 100%;
		background: var(--theme-colors-text);
		color: var(--theme-colors-background);
		padding: 10px;
		font-size: clamp(16px, 2vw, 20px);
		margin-bottom: 10px;
	}
	.desc {
		padding: 10px;
		min-height: var(--descMinHeight);
		@media (max-width: 801px) {
			min-height: auto;
		}
	}
	.time {
		padding: 10px;
		margin: 0;
		font-weight: 700;
	}
</style>
