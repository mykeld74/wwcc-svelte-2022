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
			We further believe that what we are doing in Westwoods Kids is as much church as people
			attending our main service in the auditorium. It is more than kid care and those serving are
			not "missing out on church," but truly we are getting to engage church with the next
			generation as we all learn together the invitations to life found in the way of Jesus.
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
