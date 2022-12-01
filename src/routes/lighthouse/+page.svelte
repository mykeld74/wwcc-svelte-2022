<script>
	import Img from '$components/image.svelte';
	import PledgeForm from '$components/pledgeForm.svelte';
	import LighthouseIcon from '$components/lighthouseIcon.svelte';
</script>

<svelte:head>
	<title>7700 Lighthouse | Westwoods Community Church</title>
</svelte:head>

<div class="hero">
	<h1 class="center">7700 Lighthouse Campaign</h1>
	<a
		href="https://westwoods.churchcenter.com/giving"
		class="navItem s-WnRlGR2WwRpv"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class="donateButton"><p>Donate Now</p></div>
	</a>
</div>

<div class="lighthouseContainer">
	<h2>
		Our goal is not simply to grow our weekend gathering, but to transform our city with the love of
		Jesus, one friend at a time.
	</h2>
	<p>
		This campaign will add focus, vision, and direction as well as tangible objectives that will
		help us take the next step into being the transformational community Jesus is calling us to be.
	</p>

	<h3>Here are two things we must do:</h3>
	<ol>
		<li>We must live this out individually if it will become true for us corporately</li>
		<li>
			We must teach, disciple, celebrate and keep the goal and objectives in front of the Westwoods
			family
		</li>
	</ol>
	<h3>Objectives to accomplish by the end of 2022:</h3>
	<ol>
		<li>
			7 new MCs <ul>
				<li>
					<span class="iconContainer">
						<LighthouseIcon />
					</span>77 new mc attenders - <span class="strong">Value of Relationships / Purpose</span>
				</li>
			</ul>
		</li>
		<li>
			770 people praying for Westwoods each month - <span class="strong">Value of Prayer</span>
			<ul>
				<li>
					<span class="iconContainer">
						<LighthouseIcon />
					</span>77 people committed to getting 10 people to pray for Westwoods once a month
				</li>
			</ul>
		</li>
		<li>
			7700 people gathering for Weekend services - <span class="strong"
				>Value of Relevance/ Purpose</span
			>
		</li>
		<li>
			77,000 verses of God’s Word read during the campaign - <span class="strong"
				>Value of God’s Word</span
			>
		</li>

		<li>
			770,000 dollars raised to make sure this lighthouse stays lit for a LONG time - <span
				class="strong">Value of Ownership</span
			>
		</li>
	</ol>
	<h3>Each Objective will have unique champions each leading a unique team to accomplish it.</h3>
	<ul>
		<li>
			<span class="iconContainer">
				<LighthouseIcon />
			</span>LighthouseIcon 7 new MCs / 77 new mc attenders – <span class="strong">Joe Brooks</span>
		</li>
		<li>
			<span class="iconContainer">
				<LighthouseIcon />
			</span>770 people praying– <span class="strong">Shanna and Taryn</span>
		</li>
		<li>
			<span class="iconContainer">
				<LighthouseIcon />
			</span>7700 people gathering with us for Weekend services –
			<span class="strong">Chris Sanchez</span>
		</li>
		<li>
			<span class="iconContainer">
				<LighthouseIcon />
			</span>77,000 verses of God’s Word read during the campaign –
			<span class="strong">Drew Cole</span>
		</li>
		<li>
			<span class="iconContainer">
				<LighthouseIcon />
			</span>$770,000 raised to resource all the above and to make sure this Lighthouse stays lit
			for a LONG TIME – <span class="strong">Lynn Deegan</span>
		</li>
	</ul>
	<h3>Financial Details:</h3>
	<ol>
		<li>The day we close on the building we walk into over $2,000,000 in equity</li>
		<li>The day we close, our monthly payment will be reduced by thousands of dollars</li>
		<li>
			Another reason this is important is that our goal will not be accomplished in our lifetimes
		</li>
		<li>
			The $770,000 goal is broken out so we can move forward as we hit each goal
			<ol type="A">
				<li>
					Once we raise the initial ~$250 - $350, we will close on the building (Hoping for a summer
					close)
				</li>
				<li>When we raise an additional $100,000, we work to open the welcome area</li>
				<li>
					When we raise the next $320,000, we will move the playground and redo the parking lot
				</li>
			</ol>
		</li>
	</ol>
	<PledgeForm />

	<div class="redesign">
		<Img source="7700woodard" altTag="7700 Woodard" />
	</div>
</div>

<style lang="scss">
	.hero {
		width: 100%;
		height: clamp(150px, 40vw, 450px);
		background: url('https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/WestwoodsCC/lighthouse')
			90% 70% / cover;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin-bottom: 20px;
		padding-bottom: 5vh;
		h1 {
			color: #fff;
			text-shadow: 3px 3px 6px #000000;
			margin-bottom: 0;
		}
	}
	h2 {
		font-size: clamp(1.75rem, 3vw, 2.25rem);
	}
	h3 {
		font-size: clamp(1.25rem, 2vw, 1.75rem);
		line-height: 1.4;
		margin-bottom: 15px;
		text-decoration: underline;
	}
	li {
		margin-bottom: 10px;
	}
	ul,
	ol {
		margin-left: clamp(20px, 7.5vw, 50px);
		li ul,
		li ol {
			margin-left: clamp(10px, 5vw, 30px);
		}
	}

	ul li {
		position: relative;
		list-style-type: none;

		/* &:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 20px;
			height: 20px;
			background: url('https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/WestwoodsCC/lighthouseIcon')
				center center / contain no-repeat;
		} */
	}
	.lighthouseContainer {
		width: calc(100% - 40px);
		max-width: 1170px;
		margin: 0 auto 50px;
	}
	.strong {
		font-weight: 700;
	}
	.donateButton {
		position: fixed;
		top: 80px;
		right: 80px;
		z-index: 2;
		width: 120px;
		height: 120px;
		border-radius: 50%;
		background: var(--accentColor);
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		@media (max-width: 768px) {
			top: auto;
			bottom: 20px;
			right: 20px;
		}
		p {
			font-size: 1.5rem;
			font-weight: 700;
			margin: 0;
			text-align: center;
		}
	}
</style>
