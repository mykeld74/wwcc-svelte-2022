<script>
	import Image from '$components/image.svelte';
</script>

<svelte:head>
	<title>Westwoods Kids Classes | Westwoods Community Church</title>
</svelte:head>

<div class="hero">
	<div class="heroImageContainer">
		<Image source="westwoodsKidsBanner" altTag="Westwoods Kids Banner" />
	</div>
	<h1>The Westwoods Kids Classes:</h1>
</div>
<div class="textBlock blue">
	<div class="container">
		<h2>We have 4 classes available:</h2>
		<p>Babies</p>
		<p>Toddlers</p>
		<p>Littles (PreK-Kindergarten)</p>
		<p>Bigs (Elementary)</p>
	</div>
</div>
<div class="textBlock purple">
	<div class="container">
		<h2>We Believe</h2>
		<p>
			We believe real life change happens in relationships and our classes are set up to foster peer
			to peer friendships and volunteer connection for children to be known and connected.
		</p>

		<p>
			In this COVID time we will have all our volunteers wearing masks and each classroom will have
			two adult volunteers excited and ready to welcome the children each Sunday.
		</p>

		<p>
			We will be monitoring the classroom sizes and if we begin to have more than 8 kiddos in a room
			we will be multiplying to have more classrooms available for those age groups.
		</p>
	</div>
</div>

<style lang="scss">
	.hero {
		text-align: center;
		padding: 0;
	}
	.heroImageContainer {
		width: 100%;
		margin: 0 auto 30px;
	}
	.container {
		width: 100%;
		max-width: 1170px;
		margin: 30px auto;
		padding: 0 15px;
	}

	.textBlock {
		color: #fff;
		text-align: center;
		padding: 15px 15px;
		&.blue {
			background: #42639e;
		}
		&.purple {
			background: #540d36;
			text-align: left;
			h2 {
				text-align: center;
			}
		}
		&.teal {
			background: #4cb3d1;
		}
		&.red {
			background: #c21f48;
		}
	}
</style>
