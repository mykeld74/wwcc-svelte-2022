<script>
	import HeroBlock from '$components/hero.svelte';
	import Img from '$components/image.svelte';
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
	<Img source="Mark_WIJR" altTag="Current Series Logo" />
	<h2>Who is Jesus Really</h2>
	<h4>1.2 - Mark 1</h4>
	<h4>1.9 - Mark 2</h4>
	<h4>1.16 - Mark 3</h4>
	<h4>1.24 - Mark 4</h4>
	<h4>1.30 - Mark 5</h4>
	<h4>2.6 - Mark 6</h4>
	<h4>2.13 - Mark 7</h4>
	<div class="videoContainer">
		<iframe
			src="https://www.youtube.com/embed/videoseries?list=PLzIu1DkkWpWw6UhOfdGQ1WHHSgSf69u3x"
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	</div>
</div>

<style>
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
	}
	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
