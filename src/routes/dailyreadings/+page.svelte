<script>
	import Readings from '$data/bibleReading';
	import HeroBlock from '$components/hero.svelte';
	import { fly, fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>7700 Lighthouse Scriptures | Westwoods Community Church</title>
</svelte:head>

<HeroBlock>
	<span slot="header" class="center">7700 Lighthouse Scriptures</span>
</HeroBlock>

<div class="container">
	{#each Readings as reading, index}
		<div class="card" in:fly|global={{ y: 300, x: 600, duration: 175, delay: index * 90 }} out:fade|global>
			<h4 class="title">{reading.date}</h4>
			<p class="passage">{reading.passage} {index}</p>
		</div>
	{/each}
</div>

<style lang="scss">
	.container {
		width: calc(100% - 40px);
		max-width: 1170px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
	.card {
		padding: 20px;
		margin: 20px;
		border-radius: 5px;
		background: var(--theme-colors-card_bg);
		color: var(--theme-colors-card_color);
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		p {
			margin: 0;
		}
	}
</style>
