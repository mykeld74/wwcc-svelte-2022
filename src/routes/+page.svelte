<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { BgImgSection, Modal, WatchOnline, AnnounceModal, Image } from '../components';
	import { gsap } from '@gsap/shockingly/dist/gsap';
	import { SplitText } from '@gsap/shockingly/dist/SplitText.js';
	/** @type {import('./$types').PageData} */
	export let data;
	let filled = false;
	let showAnnouncement = true;
	let isAnnouncementOpen = false;

	let seriesImg;

	$: ({ currentSeriesImg } = data);

	$: console.log(currentSeriesImg);

	const handleClick = () => {
		isAnnouncementOpen = false;
	};

	onMount(() => {
		gsap.registerPlugin(SplitText);
		seriesImg = currentSeriesImg.seriesImage;

		isAnnouncementOpen = true;

		// sessionStorage.getItem('isAnnouncementOpen')
		// 	? (isAnnouncementOpen = false)
		// 	: (isAnnouncementOpen = true);

		var tl = gsap.timeline(),
			mySplitText = new SplitText('#header', { type: 'words,chars' }),
			chars = mySplitText.chars; //an array of all the divs that wrap each character

		gsap.set('#header', { perspective: 400 });

		tl.from(chars, {
			delay: 0.25,
			duration: 1.0,
			opacity: 0,
			scale: 0,
			y: 80,
			rotationX: 180,
			transformOrigin: '0% 50% -50',
			ease: 'back',
			stagger: 0.01
		});

		setTimeout(() => {
			mySplitText.revert();
		}, 1500);
	});
</script>

<svelte:head>
	<title>Westwoods Community Church</title>
</svelte:head>

<div id="welcomeBlock" out:fade|global={{ duration: 250 }}>
	<WatchOnline />
	<div class="overlay" />
	<div id="header">
		<h1 id="wwcc">Westwoods Community Church</h1>
		<p class="bigBold">Belong before you believe!</p>
		<a href="/about-us/plan-a-visit" class="button">Plan a Visit</a>
	</div>

	<!-- <div class="skylineContainer">
		<svg
			version="1.1"
			id="DenverSkyline"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 679.867 207.675"
			xml:space="preserve"
		>
			<path
				class="skyline {filled ? 'filled' : ''}"
				d="M0,207.578v-8.32h6.323v-6.989h20.966v-4.659H42.93v4.992h9.318v-24.96h4.992l1.297-12.061
    	l1.65,11.735l2.934,0.183l2.017-11.918l0.917,12.101l4.034,0.183v15.619h3.58v-18.001h7.715v-15.715h40.287v14.286h9.143v-24.001h10
    	v-4h14.858v4.286h18.001v4.857h4.857v-19.715l6.572-6.572h4.857V94.688h5.828V33.293h34.948v-6.612h28.809v129.405h7.556V138.14
    	h7.084V132h8.501l3.306-20.308l1.417,18.891h7.556V28.1c0,0-0.945-28.1,28.1-28.1v14.404c0,0,22.551-4.487,22.551,22.551
    	s0,110.63,0,110.63h6.494V99.413c-1.417-0.472,11.807,0,11.807,0v-7.084h24.086v4.723h9.445v23.141h30.698v66.59h5.195v-21.725
    	h17.474v-13.222h6.14V88.079h8.029v-56.2h36.365v6.14h4.723v82.648h24.086V71.078h24.558l4.723,4.723v4.25h20.308v51.95
    	l23.614-15.113c0,0,10.39-9.445,26.447-0.945v29.753h7.556v25.975h14.168v-8.029h28.336v15.5v28.533
    	C679.866,207.675,0,204.777,0,207.578z"
			>
				<animate
					attributeName="stroke-dashoffset"
					dur="1250ms"
					to="1000"
					fill="freeze"
					id="first"
				/>

			</path>
		</svg>
	</div> -->
</div>

<div id="linkSection">
	<a
		href="https://www.youtube.com/channel/UCJkTcdfWk2DWGDuqJUOsrxA/playlists"
		target="_blank"
		rel="noopener noreferrer"
	>
		<BgImgSection source="missSunday" bgSize="cover" id="missSunday" className="linkBlock">
			<div>
				<p class="lbText">Miss a Sunday?</p>
				<p class="lbText">Watch it here.</p>
			</div>
		</BgImgSection>
	</a>
	<a href="/current-series">
		{#if seriesImg}
			<BgImgSection
				source={seriesImg}
				bgSize="cover"
				id="currentSeries"
				className="linkBlock"
				position="center center"
			>
				<div class="currentSeriesContainer">
					<p class="lbText">Current Series</p>
				</div>
			</BgImgSection>
		{/if}
	</a>
	<BgImgSection source="building" id="directions" className="linkBlock">
		<Modal>
			<p slot="trigger" class="trigger lbText">Service Times and Directions</p>
			<p slot="header" class="xtraLrg">Join us this Sunday</p>
			<div slot="content">
				<p class="xtraLrg">9:30am</p>
				<p>7700 Woodard Dr.</p>
				<p>Lakewood, CO 80227</p>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.8329214253686!2d-105.08480848435234!3d39.675972808278864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b81ad73d8223d%3A0xef2d6fab8083844!2sWestwoods%20Community%20Church!5e0!3m2!1sen!2sus!4v1569100714699!5m2!1sen!2sus"
					frameBorder="0"
					allowFullScreen
					title="Westwoods Map"
					id="wwMap"
				/>
			</div>
		</Modal>
	</BgImgSection>
</div>
<div id="weAreContainer">
	<BgImgSection id="weAre" source="wwWorship22b" className="weAre">
		<p class="wwIs center">Westwoods Is:</p>
		<div class="wwIsContainer">
			<div class="wwIsBlock b1">
				<p>
					A non-denominational, intergenerational community of imperfect people seeking to be
					changed by the person of Jesus Christ.
				</p>
			</div>
			<div class="wwIsBlock b2">
				<p>
					A church being built on the foundation of authentic relationships and the relevant
					application of God’s Word. Our hope is to be a challenging community for believers, a safe
					community for spiritual seekers and a powerful picture of grace and love to our community.
				</p>
			</div>
			<div class="wwIsBlock b3">
				<p>Maybe you’ve said no to church, but what if church could be different?</p>
				<ul>
					<li>Shouldn’t church be a place of life, connection, excitement and enthusiasm?</li>
					<li>
						Shouldn’t church be a place where people can feel and experience a real connection with
						God?
					</li>
					<li>Shouldn’t church be a place that positively shapes our communities?</li>
				</ul>
				<p class="center bold">WE THINK SO!</p>
			</div>
		</div>
	</BgImgSection>
</div>

<!-- <AnnounceModal {isAnnouncementOpen} on:click={handleClick}>
	<div slot="header"><h2>Service Cancelled</h2></div>
	<div slot="content" class="btsContent">
		<h3>Sunday, January 26th</h3>
		<p>Due to weather conditions, we will not be having our Sunday service.</p>
	</div>
</AnnounceModal> -->

<style lang="scss">
	#welcomeBlock {
		position: relative;
		min-height: 75vh;
		display: flex;
		background: var(--theme-colors-background);
		justify-content: center;
		flex-direction: column;
		align-items: center;
		text-align: center;
		overflow: hidden;
		background: url(https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/WestwoodsCC/denverSkyline)
			0 center / cover no-repeat;
		@media (max-width: 450px) {
			min-height: calc(100vh - 50px);
			background-position: -230px center;
		}
	}

	.btsContent {
		text-align: center;
	}
	.dontShow {
		font-size: 16px;
	}

	.lentBanner {
		background: var(--accentColor);
		color: #fff;
		text-align: center;
		padding: 10px;
		p {
			font-size: clamp(22px, 3.5vw, 32px);
			font-weight: 500;
			margin: 0;
			text-transform: uppercase;
		}
	}
	.easterHeader {
		font-size: clamp(24px, 5vw, 40px);
		font-weight: 500;
		margin: 0;
		text-wrap: balance;
		text-align: center;
	}
	.easterText {
		font-size: clamp(18px, 2.5vw, 26px);
		font-weight: 500;
		margin: 1rem 0;
		text-align: center;
		text-wrap: balance;
	}
	.easterLink {
		color: var(--accentColor);
		margin-top: 2rem;
		&:hover {
			color: #fff;
		}
	}
	.divider {
		margin: 1rem 0;
		background: #fff;
		height: 1px;
		width: 100%;
	}
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 300px;
		background: var(--accentColor);
		color: #fff;
		height: 60px;
		border-radius: 200px;
		margin: 20px auto 0;
		font-size: 30px;
		font-weight: 700;
		transition: all 0.3s ease;
		&:hover {
			transform: scale(1.05);
			box-shadow: 0 0 20px 5px rgba(255, 32, 0, 0.6);
		}
	}
	.holidayAnnouncementLink {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 100;
		background-color: var(--accentColor);
		color: #fff;
		border: none;
		padding: 10px;
		font-size: clamp(16px, 2vw, 24px);
		font-weight: 700;
		margin: 0;
		cursor: pointer;
	}
	.holidayHeader {
		width: 100%;
		text-align: center;
		font-size: clamp(28px, 5vw, 40px);
		font-weight: 700;
		border-bottom: 2px solid var(--theme-colors-text);
		padding-bottom: 20px;
	}

	.currentSeriesContainer {
		width: 100%;
		height: 100%;
		min-height: 300px;
		aspect-ratio: 3 / 2;
		background: transparent;
		flex-direction: column;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 20px 0 10px;
	}
	.seriesTitle {
		font-weight: 700;
		margin: 0;
		text-shadow: 2px 2px 2px #724524;
		:hover & {
			color: #fff;
		}
	}
	.thirtyDayContainer {
		width: 100%;
		height: 100%;
		border: #fff solid 10px;
		font-family: 'Barlow Condensed', sans-serif;

		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 10px;
		color: #fff;
		.title,
		.subtitle {
			font-size: 70px;
			line-height: 1.1;
			font-weight: 500;
			margin: 0;
			text-transform: uppercase;
		}
	}

	.overlay {
		position: absolute;
		inset: 0;
		background: var(--theme-colors-background);
		opacity: var(--theme-colors-overlay_opacity);
	}
	#header {
		z-index: 20;
	}

	.kcImgContainer {
		width: 250px;
	}
	.kcLinkContainer {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 30px;
		.button {
			background: var(--accentColor);
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			height: 50px;
			border-radius: 5px;
			transition: all 0.3s ease;
			p {
				color: #fff;
				margin: 0;
				font-weight: 700;
				transition: all 0.3s ease;
			}
			&:hover {
				background: #fff;
				p {
					color: var(--accentColor);
				}
			}
		}
	}

	.imgHeader {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h1 {
		font-size: clamp(32px, 5vw, 58px);
		font-weight: 700;
		text-shadow:
			var(--theme-colors-background) -1px -1px 0px,
			var(--theme-colors-background) 1px -1px 0px,
			var(--theme-colors-background) -1px 1px 0px,
			var(--theme-colors-background) 1px 1px 0px;
		color: var(--theme-colors-text);
	}

	.bigBold {
		font-size: clamp(65px, 7vw, 95px);
		margin-bottom: 0;
		line-height: 1;
		font-family: Teko, serif;
		font-weight: 700;
		line-height: 1;
		text-shadow:
			var(--theme-colors-background) -1px -1px 0px,
			var(--theme-colors-background) 1px -1px 0px,
			var(--theme-colors-background) -1px 1px 0px,
			var(--theme-colors-background) 1px 1px 0px;
	}

	#linkSection {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	}

	.holiday {
		font-size: clamp(24px, 4vw, 32px);
		font-weight: 700;
		margin: 0 0 10px;
	}
	.holidayDesc {
		font-size: clamp(18px, 2vw, 24px);
		margin: 0 0 30px;
	}
	.lbText {
		font-size: clamp(22px, 2.5vw, 32px);
		line-height: 1.4;
		text-shadow: #000 0px 0px 3px;
		font-weight: 700;
		transition: color 0.3s ease-in-out 0s;
		margin: 0;
	}

	.wwIs {
		font-size: clamp(32px, 5vw, 58px);
		font-weight: 700;
		color: #fff;
		text-shadow: #333 2px 2px 5px;
		width: 100%;
		margin: 3vh 0 5vh;
	}
	.wwIsContainer {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: calc(100% - 20px);
		max-width: 1080px;
		margin: auto;
	}
	.wwIsBlock {
		background: rgba(0, 0, 0, 0.6);
		padding: 20px;
		&.b1 {
			width: 35%;
			margin-bottom: 15px;
			@media (max-width: 485px) {
				width: 100%;
			}
		}
		&.b2 {
			width: 60%;
			margin-bottom: 15px;
			@media (max-width: 485px) {
				width: 100%;
			}
		}
		&.b3 {
			width: 100%;
		}
	}
	.xtraLrg {
		font-size: clamp(26px, 4vw, 46px);
		font-weight: bold;
	}
	#wwMap {
		width: 100%;
		height: 50vh;
	}
	.alert {
		background: var(--red);
		padding: 15px 10px;
		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;
		bottom: 0;
		width: 100%;

		h3 {
			margin: 0;
		}
	}

	.banner {
		background: var(--accentColor);
		color: #fff;
		text-align: center;
		padding: 10px;
	}
	.bannerText {
		font-size: clamp(22px, 2.5vw, 32px);
		font-weight: 700;
		margin: 0;
		text-decoration: none;
		color: #fff;
	}
	.noMargin {
		margin: 0;
	}
</style>
