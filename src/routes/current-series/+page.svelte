<script>
	import HeroBlock from '$components/hero.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ currentSeriesID } = data);
	$: seriesID = currentSeriesID[0].linkid;

	$: console.log(seriesID);
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
			src="https://www.youtube.com/embed/videoseries?list={seriesID}"
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	</div>

	<div class="currentSeriesList">
		<h2>Our current series:<br />James, The Wisdom of Jesus</h2>
		<h4>6.30 - James - Introduction</h4>
		<h4>7.7 - James 1</h4>
		<h4>7.14 - James 2</h4>
		<h4>7.21 - James 3</h4>
		<h4>7.28 - James 4</h4>
		<h4>8.4 - James 5</h4>
		<h4>8.11 - James - Conclusion</h4>
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
	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
