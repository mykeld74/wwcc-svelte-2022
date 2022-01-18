<script>
	import HeroBlock from '$components/hero.svelte';
	import Block from '$components/textComponent.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		gsap.from('.block .blockContent', {
			opacity: 0,
			scale: 0,
			x: 800,
			duration: 0.5,
			ease: 'power1.inOut'
		});
		gsap.from('.block2 .blockContent', {
			opacity: 0,
			scale: 0,
			x: -800,
			duration: 0.5,
			stagger: 0.25,
			ease: 'power1.inOut'
		});
		gsap.from('.block3 .blockContent', {
			scrollTrigger: {
				trigger: '.block3',
				// toggleActions: 'play none none none',
				start: '0 85%',
				end: 'bottom bottom-=50',
				scrub: 0.5,
				markers: false
			},
			opacity: 0,
			scale: 0,
			x: 800,
			duration: 1.5,
			stagger: 0.25,
			ease: 'power1.inOut'
		});
		gsap.from('.block4 .blockContent', {
			scrollTrigger: {
				trigger: '.block4',
				// toggleActions: 'play none none none',
				start: '0 85%',
				end: 'bottom bottom-=50',
				scrub: 0.5,
				markers: false
			},
			opacity: 0,
			scale: 0,
			x: -800,
			duration: 1.5,
			stagger: 0.25,
			ease: 'power1.inOut'
		});
		gsap.from('.block5 .blockContent', {
			scrollTrigger: {
				trigger: '.block5',
				// toggleActions: 'play none none none',
				start: '0 85%',
				end: 'bottom bottom-=50',
				scrub: 0.5,
				markers: false
			},
			opacity: 0,
			scale: 0,
			x: 800,
			duration: 1.5,
			stagger: 0.25,
			ease: 'power1.inOut'
		});
	});
</script>

<svelte:head>
	<title>Values | Westwoods Community Church</title>
</svelte:head>

<HeroBlock>
	<span slot="header" class="center">Values</span>
</HeroBlock>
<Block>
	<h2 slot="title" class="blockContent">Worship</h2>
	<div slot="content" class="blockContent">
		<p>
			<strong>PRAYER:</strong> We must be intentional to insure that prayer is honored, both personally
			and as a church body, and that everything we do is under-girded by the power of God through prayer.
		</p>

		<p>
			<strong>EXCELLENCE:</strong> We must be intentional to insure that we do everything with the highest
			possible quality in order to honor Christ. We will sacrifice quantity for quality.
		</p>

		<p>
			<strong>PURPOSE:</strong> We must be intentional to insure that every event and program is purposeful
			and fits within the parameters of the vision, mission, and values of WCC; and that the purpose
			for our existence is clearly understood by the body.
		</p>
	</div>
</Block>
<Block block="block2">
	<h2 slot="title" class="blockContent">Community</h2>
	<div slot="content" class="blockContent">
		<p>
			<strong>RELATIONSHIPS:</strong> We must be intentional to insure that we don’t forget the power
			of authentic, integrity-filled, honest, and challenging relationships. We must always remember
			that relationships are the conveyor belt on which life change happens.
		</p>

		<p>
			<strong>OWNERSHIP:</strong> We must be intentional to insure that the body takes personal responsibility
			for their church and their ministry–physically, mentally, spiritually, and financially.
		</p>

		<p>
			<strong>WORD OF GOD:</strong> We must be intentional to insure that the Word of God is taught and
			honored, its principles followed and displayed in every event, and that people are increasing in
			their desire for God’s Word and their application of it.
		</p>
	</div>
</Block>
<Block block="block3">
	<h2 slot="title" class="blockContent">Outreach</h2>
	<div slot="content" class="blockContent">
		<p>
			<strong>RELEVANCE:</strong> We must be intentional to insure that we communicate the truth of the
			Gospel in real, needed, and understandable ways, and every program element is relevant to the intended
			audience.
		</p>

		<p>
			<strong>EVANGELISM:</strong> We must be intentional to insure that we are really reaching people
			with Gospel of Jesus Christ, and that the body is trained, challenged, motivated, and taking responsibility
			to share Christ within their relational circles.
		</p>

		<p>
			<strong>MISSIONS:</strong> We must be intentional to insure that we are really impacting the world
			with the Gospel of Jesus Christ, and that the body is trained, challenged, motivated, and taking
			responsibility to share the message of Christ globally. This is expressed in our desire to start
			and to support new churches and to care for the poor in our community, as well as being active
			in mission activities around the world.
		</p>
	</div>
</Block>
