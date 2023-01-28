<script>
	import Image from '$components/image.svelte';
</script>

<svelte:head>
	<title>M.O.M. Community</title>
</svelte:head>

<div class="container">
	<h2>M.O.M. (Meaning Of Motherhood) Community</h2>
	<p>Meets the 2nd and 4th Sundays at 4:30pm - 6:00pm at Westwoods Community Church</p>

	<p class="italic bold">All Moms, All Stages, All Kids Ages!</p>

	<p class="italic bold">
		Journeying, Partnering, Serving, and Encouraging our mom's community through life experiences,
		testimonies, and God's work through us individually.
	</p>

	<p class="italic bold">KidCare and Dinner Provided</p>

	<div class="momLogo"><Image source="momCommunity" alt="M.O.M. Community" /></div>

	<p class="bold">Join Us!</p>
	<p>
		All Questions can be answered at <a href="mailto:womenofwestwoods@gmail.com"
			>womenofwestwoods@gmail.com</a
		>
	</p>
</div>

<style>
	.container {
		width: 100%;
		max-width: 1170px;
		margin: 30px auto;
		padding: 0 15px;
		text-align: center;
	}
	p {
		font-size: clamp(20px, 3vw, 26px);
	}
	.italic {
		font-style: italic;
	}
	.bold {
		font-weight: 700;
	}
	.momLogo {
		margin: 30px auto;
		width: calc(100% - 40px);
		max-width: 350px;
	}
</style>
