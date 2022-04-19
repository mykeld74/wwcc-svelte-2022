<script>
	import Img from '$components/image.svelte';
	import MCs from '$data/mcs.json';
	const MC = MCs.mcs;
</script>

<svelte:head>
	<title>Missional Communities | MCs | Westwoods Community Church</title>
</svelte:head>

<div class="background">
	<div class="container">
		<div class="mcLogo"><Img source="mcLogo" altTag="MC Logo" /></div>
		<div class="content">
			<h1>Join a Missional Community!</h1>
			<p class="info">
				We think that the best learning and life change occurs in a small groups of people doing
				life together and that's what our missional communities (MCs) are all about! Check out these
				communities currently meeting. Reach out and see when and where they are meeting next!
			</p>
			<div class="MCs">
				{#each MC as mc}
					<div class="mc">
						<div class="mcHeader">
							<p class="mcTitle">{mc.title}</p>
						</div>
						<p class="mcDay">{mc.day}</p>
						{#if mc.contact}
							{#each mc.contact as contact}
								<p class="mcContact">{contact}</p>
							{/each}
						{/if}
						{#if mc.location}
							<p class="mcLocation">{mc.location}</p>
						{/if}
					</div>
				{/each}
			</div>
			<p>
				Missional Communties (MCs) are groups serving together, praying together and sharing life
				together. Each group will rotate through learning, serving and celebrating during each
				month. Call to find out what this week's rotation will be and where to meet.
			</p>
		</div>
	</div>
</div>

<style>
	.background {
		background: url('https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/WestwoodsCC/mcBackground')
			50% 50% / cover fixed;
		margin: 0;
		padding: 30px 0;
	}
	.info {
		margin-bottom: 30px;
	}
	.container {
		width: 100%;
		max-width: 1170px;
		margin: 30px auto;
		padding: 0 10px;
	}

	.mcLogo {
		width: calc(100% - 50px);
		max-width: 600px;
		margin: 20px auto;
	}
	.content {
		position: relative;
		padding: 20px 10px;
		border-radius: 10px;
		min-height: 55vh;
		max-width: 1080px;
		margin: 0 auto 30px;
		background: rgba(255, 255, 255, 0.6);
		color: #000;
		text-align: center;
	}
	.MCs {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
		grid-gap: 20px;
		margin-bottom: 30px;
	}
	p {
		margin: 0 0 10px 0;
	}
	.mcTitle {
		font-size: 32px;
		font-weight: 600;
	}
	.mcDay {
		font-weight: 500;
	}
</style>
