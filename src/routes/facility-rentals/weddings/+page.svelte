<script>
	import BgImage from '$components/bgImgContainer.svelte';
</script>

<svelte:head>
	<title>Wedding Rentals | Westwoods Community Church</title>
</svelte:head>

<BgImage source="auditoriumBanner">
	<h1 class="rentals">Weddings</h1>
</BgImage>
<div class="container">
	<p>
		Thank you for considering Westwoods as your wedding venue! We would love to be a part of your
		special day. Below you will find wedding packages and other information about our space. If you
		have any further questions, please email Joe at{' '}
		<a href="mailto:joe@westwoodscc.org">Joe@westwoodscc.org</a> and she’ll be in touch! If you
		regularly attend Westwoods, we would love to give you a family discount. Please reach out to
		discuss prices. You can add a Westwoods’ approved bartender to any reception package.{' '}
		<a
			href="https://drive.google.com/file/d/0B_maZVwX6vgjUGN2d2ZQRjlXRjQ/view"
			rel="noopener noreferrer"
			target="_blank"
		>
			Please view our policy and fees here.
		</a>
	</p>

	<p class="listTitle">Payment terms:</p>
	<ul>
		<li>
			Each rental includes a damage deposit that will be returned to you in full after the event if
			there are no damages. If there are damages, we will be in contact with you.
		</li>
		<li>The date will be secured on our calendar after we receive your damage deposit.</li>
		<li>Payment in full is required 60 days prior to your wedding date.</li>
	</ul>
	<p>
		To start the reservation process for your wedding,{' '}
		<a
			href="https://docs.google.com/forms/d/e/1FAIpQLSf1bTP-cS7_TPNouYsQ_uGWyOArMxtUpbcO_MkFB4h6sfSxyg/viewform"
			target="_blank"
			rel="noopener noreferrer"
		>
			please use this link
		</a>
		.
	</p>

	<hr />
	<h3>Gold Auditorium Package $1,850.00 fee, $300 damage deposit</h3>
	<p>Auditorium for ceremony, Café for reception</p>
	<p class="listTitle">Westwoods will provide:</p>
	<ul>
		<li>Pastor to officiate</li>
		<li>
			Wedding Coordinator to host the building during ceremony and reception, as well as coordinate
			the wedding ceremony if desired
		</li>
		<li>Tech booth support for sound and lighting</li>
		<li>
			Building use on day of wedding up to 8 hours for set up, ceremony and reception, as well as 2
			hours the night prior for the wedding rehearsal
		</li>
		<li>
			Our cleaning crew will take care of the deep cleaning after the reception, but you will still
			be responsible for general clean up of all trash, décor and food.
		</li>
	</ul>
	<hr />
	<h3>Silver Auditorium Package $1,125.00 fee, $150 damage deposit</h3>
	<p>Auditorium for ceremony only, reception at a different venue</p>

	<p class="listTitle">Westwoods will provide:</p>

	<ul>
		<li>Pastor to officiate</li>
		<li>
			Wedding Coordinator to host the building as well as coordinate the wedding ceremony if desired
		</li>
		<li>Tech booth support for sound and lighting</li>
		<li>
			Building use on day of wedding up to 5 hours for set up and ceremony as well as 2 hours the
			night prior for the wedding rehearsal
		</li>
	</ul>
	<hr />
	<h3>Gold Workshop Package $1,550.00 fee, $300 damage deposit</h3>

	<p>
		The Workshop for ceremony, Café for reception or lawn for reception depending on time of year
	</p>

	<p class="listTitle">Westwoods will provide:</p>

	<ul>
		<li>Pastor to officiate</li>
		<li>
			Wedding Coordinator to host the building during the ceremony and reception as well as
			coordinate the wedding ceremony if desired
		</li>
		<li>Tech support for sound</li>
		<li>
			Building use on day of wedding up to 8 hours for set up, ceremony and reception, as well as 1
			hour the night prior for the wedding rehearsal
		</li>
		<li>
			Our cleaning crew will take care of the deep cleaning after the reception, but you will still
			be responsible for general clean up of all trash, décor and food.
		</li>
	</ul>
	<hr />
	<h3>Silver Workshop Package $900.00 fee, $150 damage deposit</h3>

	<p>The Workshop for ceremony, reception in The Workshop or at a different venue</p>

	<p>
		*Only select this option if your wedding invite list is small enough to accommodate row seating
		and reception space with little to no table set up between ceremony and reception
	</p>

	<p class="listTitle">Westwoods will provide:</p>

	<ul>
		<li>Pastor to officiate</li>
		<li>
			Wedding Coordinator to host the building during the ceremony and reception as well as
			coordinate the wedding ceremony if desired
		</li>
		<li>Tech support for sound</li>
		<li>
			Building use on day of wedding up to 8 hours for set up, ceremony and reception, as well as 1
			hour the night prior for the wedding rehearsal
		</li>
	</ul>
	<hr />
	<h3>Basic Workshop Package $525.00 fee, $100 damage deposit</h3>
	<p>The Workshop for ceremony, reception at a different venue</p>

	<p class="listTitle">Westwoods will provide:</p>

	<ul>
		<li>Pastor to officiate</li>
		<li>
			Wedding Coordinator to host the building during the ceremony as well as coordinate the wedding
			ceremony if desired
		</li>
		<li>
			Building use on day of wedding up to 4 hours for set up and ceremony as well as 1 hour the
			night prior for the wedding rehearsal
		</li>
		<li>*No sound with this option</li>
	</ul>
	<p>
		Contact Joe at <a href="mailto:joe@westwoodscc.org">Joe@WestwoodsCC.org</a> if you have any questions!
	</p>
</div>

<style>
	.rentals {
		height: 30vh;
		display: flex;
		align-items: center;
		color: #fff;
	}
	.container {
		width: 100%;
		max-width: 1170px;
		margin: 30px auto;
		padding: 0 10px;
	}
	.listTitle {
		font-weight: bold;
		font-size: 1.2rem;
		margin-bottom: 10px;
		text-decoration: underline;
	}
</style>
