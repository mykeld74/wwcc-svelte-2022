<script>
	import HeroBlock from '$components/hero.svelte';
	import Img from '$components/image.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ currentSeriesID } = data);
	$: seriesID = currentSeriesID[0].linkid;
</script>

<svelte:head>
	<title>Current Series | Westwoods Community Church</title>
</svelte:head>

<HeroBlock>
	<span slot="header" class="center">Current Series</span>
</HeroBlock>

<div class="container">
	<h2 class="joinUs">Join us Sunday mornings!</h2>
	<p class="times">9:00am - 10:30am Live in person and online</p>
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
		<h2>Our current series - Jesus is <span class="underline" />.</h2>
		<h4>1.8 - Powerful, Personal, Present</h4>
		<h4>1.15 - God</h4>
		<h4>1.22 - The Lamb of God</h4>
		<h4>1.29 - The Gift Giver</h4>
		<h4>2.5 - Living Water</h4>
		<h4>2.12 - The Bread of Life</h4>
		<h4>2.19 - The Light of the World</h4>
		<h4>2.26 - The Door</h4>
		<h4>3.5 - The Good Shepherd</h4>
		<h4>3.12 - The Resurrection and Life</h4>
		<h4>3.19 - The Way, Truth, and Life</h4>
		<h4>3.26 - The True Vine</h4>
		<h4>4.2 - More</h4>
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
