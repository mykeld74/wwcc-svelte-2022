<script>
	import { onMount } from 'svelte';
	import Image from '$components/image.svelte';
	import Modal from '$components/modal.svelte';

	let kidsCampCheck = '1';

	onMount(() => {
		kidsCampCheck = localStorage.getItem('wwkidsCamp');
	});
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
<Modal modalName="wwkidsCamp" isOpen={kidsCampCheck === '1' ? false : true}>
	<div class="wwKidCamp" slot="trigger">
		<h3>Tuesdays in June:</h3>
		<div class="bannerImage">
			<Image source="adventureIsland" altTag="Adventure Island Logo" />
		</div>
		<h3>
			Adventure Island Kids Camp<br />Click here to learn more!
		</h3>
	</div>
	<div slot="content">
		<div class="aiImage"><Image source="adventureIsland" altTag="Adventure Island Logo" /></div>
		<p>
			Join us for a great summer of connection as we gather with kids and families for Kids Connect.
			Happening every Tuesday evening for the month of June.
		</p>
		<p>We will have a free community meal each night from 5-5:30pm.</p>
		<p>
			Our programming will be from 5:30-7:30pm. There will be great time for learning, having fun
			and growing together.
		</p>
		<p>
			You can register here: <a
				href="https://westwoodskids.mycokesburyvbs.com/"
				target="_blank"
				rel="noopener noreferrer">https://westwoodskids.mycokesburyvbs.com</a
			>
		</p>
		<p>Open for kiddos 3 years old - 5th Grade</p>
	</div>
</Modal>
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
	.aiImage {
		width: clamp(200px, 100%, 350px);
		margin: auto;
	}
	.wwKidCamp {
		width: clamp(300px, 90%, 680px);
		text-align: center;
		background: #c21f48;
		padding: 15px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 30px auto;
		border-radius: 80px;
		transition: background 0.3s ease-in-out;
		color: #fff;
		&:hover {
			background: #540d36;
		}
		h3 {
			cursor: pointer;
			margin: 0;
		}
	}
	.bannerImage {
		width: clamp(150px, 100%, 250px);
		margin: 20px auto;
	}
</style>
