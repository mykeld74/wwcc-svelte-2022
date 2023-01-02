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
	<!-- <div class="videoContainer">
		<iframe
			src="https://www.youtube.com/embed/videoseries?list={seriesID}"
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	</div> -->

	<div class="currentSeriesList">
		<h2>Our current series - Jesus is <span class="underline" />.</h2>
		<!-- <h4>11.27 - Hope</h4>
		<h4>12.4 - Faith</h4>
		<h4>12.11 - Joy</h4>
		<h4>12.18 - Peace</h4> -->
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
