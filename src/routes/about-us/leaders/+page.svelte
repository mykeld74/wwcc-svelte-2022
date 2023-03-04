<script lang="ts">
	import { Staff, Elders } from '$data/leaders';
	import Img from '$components/image.svelte';
	import HeroBlock from '$components/hero.svelte';
	const width = 400;
</script>

<svelte:head>
	<title>Leaders | Westwoods Community Church</title>
</svelte:head>

<HeroBlock>
	<span slot="header" class="center">Leaders</span>
</HeroBlock>

<div class="container">
	<div class="staff">
		<p class="leaderTitle">Our Staff</p>
		<div class="cardContainer">
			{#each Staff as staff}
				<div class="leader">
					<div class="image">
						<Img source={staff.imgId} altTag={staff.name} {width} />
					</div>
					<div class="info">
						<h4>{staff.name}</h4>
						<p>{staff.position}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="elders">
		<p class="leaderTitle">Our Elders</p>
		<div class="cardContainer">
			{#each Elders as elder}
				<div class="leader">
					<div class="image">
						<Img source={elder.imgId} altTag={elder.name} {width} />
					</div>
					<div class="info">
						<h4>{elder.name}</h4>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		width: calc(100% - 40px);
		max-width: 960px;
		margin: 0 auto;
	}
	.cardContainer {
		max-width: 1270px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
		grid-gap: 1rem;
		margin: 0 auto;
	}

	.leader {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 1rem;
		border: 1px solid var(--theme-colors-text);
		padding: 20px;
		border-radius: 10px;
	}

	.image {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		overflow: hidden;
		aspect-ratio: 1/1;
	}

	.leaderTitle {
		font-size: clamp(24px, 5vw, 40px);
		font-weight: 700;
		margin: 0;
		padding: 0;
	}
	.staff {
		padding-bottom: 50px;
		border-bottom: 4px solid var(--theme-colors-text);
	}
	.elders {
		padding: 40px 0;
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
</style>
