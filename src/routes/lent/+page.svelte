<script>
	import lentVerses from '$data/lentVerses';
</script>

<svelte:head>
	<title>Lent | Westwoods Community Church</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Meow+Script&display=swap" rel="stylesheet" />
</svelte:head>

<div class="hero">
	<div class="heroContent">
		<p>Lent</p>
	</div>
</div>

<div class="contentContainer">
	<div class="lentIntro">
		<h1>Westwoods Community Church Lenten Season Practices</h1>

		<p>
			We are so glad you are considering joining us in the season of Lent as we prepare our hearts,
			minds and bodies for this season that culminates in the Passion week and ultimately on the
			resurrection of Jesus on Easter.
		</p>
		<h3>What is Lent?</h3>
		<p>
			Lent is a 47 day period from Ash Wednesday to Easter Sunday that is part of the Big C- Church
			calendar. There may be more common ties to the practice of Ash Wednesday and Lent in various
			Angelican/Lutheran/Catholic churches, but we believe that the practice of this season has the
			potential to awaken us again to the reality of Jesus’ presence in our lives and allow us to
			enter into Good Friday & Easter Sunday with a new and refreshed spirit. Our reason for
			engaging this season is to allow our lives to be open to walking humble with our Lord and
			learning evermore our utter dependence on the Holy Spirit.
		</p>
		<h3>The Invitation</h3>
		<p>
			We invite you to join us starting February 22nd through April 9th on a journey. A journey of
			reflection, a journey of adjusting rhythms, trying old/new practices and opening ourselves up
			to the presence and power of the Holy Spirit.
		</p>
		<p>
			There are several pathways we want to offer people to be able to engage this season. It is not
			a one-size fits all reality. It is also not a season of trying to do things to earn God’s
			approval. Rather we hope this season is one that creates in us a renewed heart that can rest
			and trust in who God is, who he says we are and transform how we see others.
		</p>
	</div>
	<h3>The Practices</h3>
	<div class="lentPractices">
		<div class="practiceBlock">
			<p class="titles">FORMATION</p>
			<p class="practice">
				Intentionally engage your mind, heart, body and soul this lent season with a formational
				practice. Some ideas: Read the Gospels through lent (other side). Download Lectio 365 app
				and read the devotions every morning/night. Join us in praying over the prayer requests (We
				can add you to the list that we send out the prayer requests, you can join us for Wednesday
				mornings at Westwoods at 5am, or start your own prayer routine/group praying over the
				requests each week). So many other ways.
			</p>
		</div>
		<div class="practiceBlock">
			<p class="titles">FELLOWSHIP</p>
			<p class="practice">
				Gathering together to be reoriented back to the way of Jesus is essential in our busy,
				scattered and full lives. Life happens and we understand that, but we also would love to see
				what could come from meeting together consistently. We invite you over the season of lent to
				make fellowship a top priority that does not get set to the side for these 47 days.
				Committing to joining us every Sunday, committing to meeting with your MC every week, and/or
				committing to doing life with one or two others over lent talking about your formation,
				fellowship and fasting together.
			</p>
		</div>
		<div class="practiceBlock">
			<p class="titles">FASTING</p>
			<p class="practice">
				Think subtraction not addition here. We are not adding another thing to our overloaded
				lives, but considering where we can subtract in order to engage our time/day more
				intentionally. Think through your weekly life and take note of the places you seek out
				comfort or distraction in a given week. Notice the places you turn when you need a break,
				when you are tired or bored. Identify two places in your life that you can fast from over
				the season of lent: fast from a comfort and fast from a distraction.
			</p>
		</div>
	</div>
	<div class="lentEngagement">
		<p>
			We would love to create amongst our community, a refocused and revitalized engagement of each
			of these practices and notice how they can open us more and more to the power and mystery of
			Christ in us the hope of glory.
		</p>

		<p>
			As you engage these practices a key component will be to reflect, not just do them or check
			them off the list. Someone far smarter/wiser has said, “We don’t change from our experience,
			we change when we reflect on our experience.” (Trevor Hudson) If we want to get the most out
			of these practices, we will need to engage them and then reflect on them with God, with
			community and with ourselves.
		</p>
	</div>

	<div class="readVerses">
		<h3>Read the Gospels through Lent</h3>
		<div class="lentVerses">
			{#each lentVerses as verse}
				<div class={verse.class}>
					<p class="date">{verse.date}:</p>
					<p class="passage">{verse.passage}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.hero {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4vh 2vw;
		p {
			font-family: 'Meow Script', cursive;
			font-size: clamp(48px, 30vw, 180px);
		}
	}
	.contentContainer {
		width: calc(100% - 40px);
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1rem;
	}
	.lentPractices {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
		margin-bottom: 20px;
	}
	.practiceBlock {
		border: 1px solid var(--theme-colors-text);
		padding: 15px;
		border-radius: 10px;

		p {
			margin: 0;
		}
		.titles {
			font-size: clamp(22px, 2.5vw, 30px);
			font-weight: bold;
			text-align: center;
			border-bottom: 1px solid var(--theme-colors-text);
			margin-bottom: 15px;
			padding-bottom: 5px;
		}
	}
	.lentVerses {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 20px;
		p {
			margin: 0;
		}
	}
	.default {
		display: flex;
		gap: 15px;
		border: 1px solid var(--theme-colors-text);
		padding: 15px;
		border-radius: 10px;
		/* &.sunday {
			color: var(--accentColor);
		} */
	}
	.passage {
		font-weight: 700;
	}
	.readVerses {
		margin-bottom: 40px;
	}
</style>
