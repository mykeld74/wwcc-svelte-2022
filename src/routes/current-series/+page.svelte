<script>
	import HeroBlock from '$components/hero.svelte';
	import { onMount } from 'svelte';
	let description = [];
	let previousSeries;
	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ currentSeriesID } = data);

	$: console.log(data);
	onMount(() => {
		previousSeries = currentSeriesID.slice(1);
		description = currentSeriesID[0].description;
	});
</script>

<svelte:head>
	<title>Current Series | Westwoods Community Church</title>
</svelte:head>

<HeroBlock>
	<span slot="header" class="center">Current Series</span>
</HeroBlock>

<div class="container">
	<h2 class="joinUs">Join us Sunday mornings!</h2>
	<p class="times">9:30am Live in person and online</p>
	<div class="videoContainer">
		<iframe
			src="https://www.youtube.com/embed/videoseries?list={currentSeriesID[0].linkid}"
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	</div>

	<div class="currentSeriesList">
		<h2>Our current series:<br />{currentSeriesID[0].title}</h2>
		{#if description}
			{#each description as desc}
				<h4>{@html desc}</h4>
			{/each}
		{/if}
	</div>

	<h2 class="previousSeriesTitle">Previous Series</h2>

	<div class="previousSeriesContainer">
		{#if previousSeries}
			{#each previousSeries as series}
				<div class="seriesContainer">
					<div class="previousVideoContainer">
						<iframe
							src="https://www.youtube.com/embed/videoseries?list={series.linkid}"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
					<p class="seriesTitle">{series.title}</p>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="scss">
	.joinUs {
		font-size: clamp(32px, 4.5vw, 56px);
	}
	.times {
		font-size: clamp(26px, 4vw, 46px);
		padding: 0;
		font-weight: 500;
	}
	.container {
		width: 100%;
		max-width: 1170px;
		margin: 30px auto;
		padding: 0 10px;
	}
	.videoContainer {
		position: relative;
		width: 100%;
		aspect-ratio: 16/9;
		margin-bottom: 20px;
	}
	.underline {
		border-bottom: 4px solid var(--theme-colors-text);
		display: inline-block;
		width: 200px;
	}
	.currentSeriesList {
		width: 100%;
		margin-top: 50px;
		padding-top: 25px;
		border-top: 1px solid var(--theme-colors-text);
		h4 {
			margin-left: 20px;
		}
	}

	.previousVideoContainer {
		position: relative;
		width: 100%;
		aspect-ratio: 16/9;
		margin-bottom: 10px;
	}
	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.previousSeriesContainer {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 20px;
	}
	.seriesTitle {
		text-align: center;
	}
	.previousSeriesTitle {
		border-top: 2px solid var(--theme-colors-text);
		border-bottom: 2px solid var(--theme-colors-text);
		padding: 10px 0;
		margin-top: 60px;
	}
</style>
