<script>
	import HeroBlock from '$components/hero.svelte';
	import ContactForm from '$components/contactForm.svelte';
</script>

<svelte:head>
	<title>Jobs | Westwoods Community Church</title>
</svelte:head>

<HeroBlock>
	<span slot="header" class="center">Pastor of Kids Ministry</span>
</HeroBlock>
<div class="block">
	<div class="container">
		<div class="blockContent">
			<p>
				To apply, submit resume with cover letter via email to <a href="mailto:info@westwoodscc.org"
					>info@westwoodscc.org</a
				>. Questions about the position can be emailed to the same address.
			</p>
			<h3>Purpose</h3>
			<p>
				To lead and shepherd a team of leaders to both walk kids through the Westwood strategy to
				love and follow Christ, love, and serve others, and to love and reach the lost as well as to
				support parents in their journey in the way of Jesus.
			</p>
			<h3>Disciple Making</h3>
			<ul>
				<li>Motivated primarily by the lives changed by Jesus</li>
				<li>Focus on the success, needs, and experience of others.</li>
				<li>Always asking, “Who can I recruit and train to do this job?”</li>
				<li>
					Connects, recruits, equips, and inspires a diverse group of volunteers to engage Westwoods
					Kids
				</li>
				<li>Invests in and develops Kids Room Leaders</li>
				<li>
					Wants and seeks feedback for themselves and provides that to others in a positive way
				</li>
			</ul>
			<h3>Skills</h3>
			<ul>
				<li>
					Must have a clear understanding of the vision, mission and values and strategy of Westwood
					community and specific role kids ministry can and does play in it
				</li>
				<li>
					Passion for ministry to children (Birth-5th Grade) and seeing both parents and children
					grow in faith
				</li>
				<li>
					Must be able to:
					<ul>
						<li>Function as a recruiter, trainer, and leader of leaders</li>
						<li>
							Ensure all team members are being cared for, encouraged, and mentored adequately
						</li>
						<li>Understand the importance of an ability to develop an apprentice</li>
					</ul>
				</li>
				<li>
					Committed to living a life Spiritual and Emotional Maturity listed below including but not
					limited to daily prayer, quietness and study of God’s word
				</li>
			</ul>
			<h3>Goals</h3>
			<ul>
				<li>To develop a strong team of leaders</li>
				<li>To have a significant impact on children for Christ</li>
				<li>
					Grow the number of children and families who are being reached and cared for on a Sunday
					morning and beyond including special events
				</li>
				<li>Grow our capacity to reach and care for children by growing the leadership team</li>
				<li>Create environments for people to grow together as a team outside of the church</li>
			</ul>
			<h3>Relationships</h3>
			<ul>
				<li>Reports to Lead Pastor</li>
				<li>Supported by Elder of Kids Ministry</li>
				<li>Works closely with all Westwoods ministry team leaders</li>
			</ul>
			<h3>Spiritual and Emotional Maturity</h3>
			<ul>
				<li>Cultivates an intimate relationship with Jesus that is contagious</li>
				<li>Possesses a depth of life experience and maturity</li>
				<li>Exudes humility and teachability</li>
				<li>Demonstrates gentleness with and love for people</li>
				<li>Values integrity</li>
				<li>
					Wants and seeks feedback for themselves and provides that to others in a positive way
				</li>
			</ul>
			<h3>Salary and Hours</h3>
			<ul>
				<li>$22,000/yr, Exempt</li>
				<li>~20hrs/week</li>
			</ul>
			<p>
				Westwoods Community Church exists to transform our city with the love of Jesus one friend at
				time. Through relative teaching and authentic worship, we desire to honor Jesus by building
				into families, our communities and into our own spiritual growth. At Westwoods we believe
				that everyone belongs before they believe and that Westwoods is a family that people can
				call home. Through local partnerships and ministries, we are an outpost of hope, and we
				strive to do the most good in our city.
			</p>
		</div>
		<p>Download the PDF job description here:</p>
		<a href="./PastorofKidsMinistry.pdf" target="_blank" class="button">Click for More Details</a>
	</div>
</div>

<style>
	.block {
		background-color: var(--theme-colors-container_bg);
		color: var(--theme-colors-text);
		padding: 20px 0;
	}
	.container {
		width: calc(100% - 20px);
		max-width: 960px;
		margin: 0 auto 20px;
	}
	.intro {
		margin-bottom: 20px;
	}
	.button {
		width: 100%;
		max-width: 400px;
		font-size: 22px;
		font-weight: 500;
		background: var(--accentColor);
		color: rgb(255, 255, 255);
		padding: 10px 20px;
		border-radius: 5px;
		text-decoration: none;
		text-align: center;
		display: block;
		margin: 0 auto;
	}

	p {
		margin: 0 0 20px;
		line-height: 1.2;
	}
	h3 {
		margin: 20px 0 10px;
	}
	li {
		margin-left: 20px;
	}
</style>
