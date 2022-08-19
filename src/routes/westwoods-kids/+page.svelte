<script>
	import Image from '$components/image.svelte';
</script>

<svelte:head>
	<title>Westwoods Kids</title>
</svelte:head>

<div class="hero">
	<div class="heroImageContainer">
		<Image source="wwKidsBanner" altTag="Westwoods Kids Banner" />
	</div>
	<h1>Welcome to Westwoods Kids</h1>
	<p>Transforming our Next Generation with the Love of Jesus One Friend at a Time</p>
</div>

<div class="textBlock blue">
	<div class="container"><h2>Westwoods Kids core values are:</h2></div>
</div>
<div class="textBlock purple">
	<div class="container">
		<h2>We will know and love your child well.</h2>
		<p>
			Our amazing volunteers will provide a safe and exciting place for kids to learn and have fun.
			Please let us know if you have any concerns that will help us serve your family best.
		</p>
	</div>
</div>
<div class="textBlock teal">
	<div class="container">
		<h2>We will teach your child about the love of Jesus.</h2>
		<p>
			We want kids to leave each Sunday learning something new about Jesus’ amazing love for them.
		</p>
	</div>
</div>
<div class="textBlock red">
	<div class="container">
		<h2>We will value your child’s safety.</h2>
		<p>
			When you check in, you’ll receive a security tag to bring with you to pick up your child. If
			we need to contact you during service, we’ll text you at the number you provide.
		</p>
	</div>
</div>

<style lang="scss">
	.hero {
		text-align: center;
		padding: 30px 15px;
	}
	.heroImageContainer {
		width: 90%;
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
		}
		&.teal {
			background: #4cb3d1;
		}
		&.red {
			background: #c21f48;
		}
	}
</style>
