<script lang="ts">
	import { fade } from 'svelte/transition';
	import BgImgSection from '$components/bgImgContainer.svelte';
	import Modal from '$components/modal.svelte';
	import WatchOnline from '$components/watchOnline.svelte';

	import TodaysVerse from '$components/dailyBibleReading.svelte';
	let filled = false;
	let showAnnouncement = true;
</script>

<svelte:head>
	<title>Westwoods Community Church</title>
</svelte:head>

<div id="welcomeBlock" out:fade={{ duration: 250 }}>
	<WatchOnline />
	<div class="overlay" />
	<div id="header">
		<h1>Westwoods Community Church</h1>
		<p class="bigBold">Belong before you believe!</p>
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
		<!-- <BgImgSection source="currentSeries" id="currentSeries" className="linkBlock">
			<p class="lbText">Current Series</p>
		</BgImgSection> -->

		<BgImgSection source="JesusIs" bgSize="cover" id="currentSeries" className="linkBlock">
			<div class="currentSeriesContainer"><p class="lbText">Current Series</p></div>
		</BgImgSection>
	</a>
	<BgImgSection source="building" id="directions" className="linkBlock">
		<Modal>
			<p slot="trigger" class="trigger lbText">Service Times and Directions</p>
			<p slot="header" class="xtraLrg">Join us this Sunday</p>
			<div slot="content">
				<p class="xtraLrg">9:00am & 10:30am</p>
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
	<a href="/lighthouse">
		<BgImgSection source="lighthouse" id="lighthouse" className="linkBlock">
			<p class="lbText">7700 Lighthouse Campaign</p>
		</BgImgSection>
	</a>
</div>
<TodaysVerse />
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
		background: transparent;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		padding-bottom: 20px;
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
	h1 {
		font-size: clamp(32px, 5vw, 58px);
		font-weight: 700;
		text-shadow: var(--theme-colors-background) -1px -1px 0px,
			var(--theme-colors-background) 1px -1px 0px, var(--theme-colors-background) -1px 1px 0px,
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
		text-shadow: var(--theme-colors-background) -1px -1px 0px,
			var(--theme-colors-background) 1px -1px 0px, var(--theme-colors-background) -1px 1px 0px,
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
</style>
