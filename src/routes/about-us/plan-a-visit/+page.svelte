<script>
	import HeroBlock from '$components/hero.svelte';
</script>

<svelte:head>
	<script src="https://js.churchcenter.com/modal/v1"></script>
	<title>Plan a Visit | Westwoods Community Church</title>
</svelte:head>

<HeroBlock>
	<span slot="header" class="center">Plan A Visit</span>
</HeroBlock>
<div class="wrapper">
	<div class="container">
		<p class="intro">
			We are so excited and honored that you are considering spending your Sunday morning with us.
			We know that stepping into a new church can be intimidating. Here's a little bit about us,
			hopefully this can help ease some of that anxiety.
		</p>
		<h3>Service Times</h3>
		<p>
			Our services are every Sunday, starting at 9:30am. We recommend you come a couple of minutes
			early.
		</p>

		<h3>Location</h3>
		<p>
			Our address is 7700 W Woodard Dr., Lakewood, CO, at approximately Wadsworth and Morrison Road.
		</p>

		<h3>What to Wear</h3>
		<p>
			We are a casual church, so feel free to come in casual attire, jeans and t-shirt is just fine.
			If you are more comfortable dressing up, that's great too!
		</p>

		<h3>What to Expect</h3>
		<p>
			When you arrive you can enter through the doors on either the north or south side of the
			building. There will be someone there to greet you. We have coffee available feel free to grab
			a cup and make your way to the auditorium. Our services are generally 60-75 minutes, there
			will be worship and Bible based teaching, usually presented by our lead pastor Rick Schmitz,
			however, we have do have a number of members of our teaching team and one of them may be
			speaking.
		</p>

		<h3>What About My Kids?</h3>
		<p>
			If you have kids, we have classes available for kids through elementary school age. We would
			love to have your kids participate in our classes, however, if they are not comfortable, they
			may also stay with you during the service. If your kids are going to go to one of our classes,
			please check them in before the service starts. They will stay with you during worship, then
			they will be dismissed to go to their classrooms. They will meet their teachers and the back
			of the auditorium on go to the classroom from there. <a href="/westwoods-kids"
				>Learn more about our kids classes here.
			</a>
		</p>

		<h3>What About My Teens?</h3>
		<p>
			On Sunday's our teens join us in our morning service. We also offer a great program for
			students, meeting Monday nights at 6:30pm. <a href="/westwoods-students"
				>Learn more about our Students program here.</a
			>
		</p>
		<h3>Tell us your coming</h3>
		<p>
			We would love to know your coming. Although it is not necessary, we would like to get some
			information from you. If you are willing, please click the link and fill out the form to let
			us know your coming or ask any questions you may still have.
		</p>

		<a
			href="https://westwoods.churchcenter.com/people/forms/674179"
			data-open-in-church-center-modal="true"><div class="button">Plan a Visit Form</div></a
		>
	</div>
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: [full-start] 1fr [center-start] clamp(300px, 90vw, 1170px) [center-end] 1fr [full-end];
	}
	.container {
		width: 100%;
		grid-column: center;
		margin: 30px auto;
	}
	.intro {
		font-size: 1.6rem;
	}
	h3 {
		margin: 3rem 0 0.5rem 0;
		text-decoration: underline;
	}
	.button {
		width: 300px;
		height: 50px;
		background: var(--red);
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24px;
		font-weight: 600;
		border-radius: 5px;
	}
</style>
