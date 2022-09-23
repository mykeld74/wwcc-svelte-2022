<script>
	import Facilities from '$data/facilities';
	import BgImage from '$components/bgImgContainer.svelte';
</script>

<svelte:head>
	<title>Facility Rental | Westwoods Community Church</title>
</svelte:head>

<BgImage source="auditoriumBanner">
	<h1 class="rentals">Facility Rentals</h1>
</BgImage>

<div class="container">
	{#each Facilities as room, i}
		<div class="room">
			<p class="title">{room.title}</p>
			<ul>
				{#each room.desc as desc}
					<li>{desc}</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
		width: calc(100% - 20px);
		max-width: 960px;
		margin: 30px auto;
		gap: 3vh 2.5vw;
	}
	.room {
		/* width: 100%; */
		ul {
			font-size: 0.9em;
		}
	}
	.title {
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 10px;
		text-decoration: underline;
	}
	.rentals {
		height: 30vh;
		display: flex;
		align-items: center;
		color: #fff;
	}
</style>
