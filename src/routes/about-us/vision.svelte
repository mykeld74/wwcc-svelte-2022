<script>
	import HeroBlock from '$components/hero.svelte';
	import Block from '$components/textComponent.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';
	gsap.registerPlugin(ScrollTrigger);

	let h;
	let w;

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
	<title>Vision | Westwoods Community Church</title>
</svelte:head>

<HeroBlock>
	<span slot="header" class="center">Vision</span>
</HeroBlock>
<Block>
	<h2 slot="title" class="blockContent">Excited Community</h2>
	<div slot="content" class="blockContent" bind:clientWidth={w} bind:clientHeight={h}>
		<p>
			<strong>EXCITED:</strong> In the book of Acts the Bible gives us a picture of the early Church:
			It says, “They were all in awe as many wonders and miraculous signs were done by the Apostles.”
			This is where the excitement must come from- to see and experience the awe and wonder of God. We
			will see this by the way He uses us to change lives as we distribute His grace to a needy world.
		</p>

		<p>
			<strong>COMMUNITY:</strong> The book of Acts goes on to say that they existed in a community, a
			family, where there was no need that was not met. We see WCC growing and thriving out of this family
			environment. We have to be relationally driven, not program driven.
		</p>
	</div>
</Block>
<Block block="block2">
	<h2 slot="title" class="blockContent">Committed to Passion</h2>
	<div slot="content" class="blockContent">
		<p>
			<strong>COMMITMENT:</strong> The definition of commitment is to pledge yourself to some particular
			course of action, to pay the price to see an expected outcome. We believe that God has called us
			to be a wartime church not a peacetime church. General George Patton once said that peace brings
			out the worst in people–-selfishness, contentment, and unbridled pursuit of pleasure and comfort–while
			war brings out the best in people–character, honor, commitment, self-sacrifice, and loyalty. To
			be a wartime church takes commitment; we call for it and expect it.
		</p>

		<p>
			<strong>PASSION:</strong> Too many people are doing the work of the church, God’s work, with empty
			eyes. Eyes with no flame of excitement, no fire of expectation. We want to see passion filling
			our people, lighting up their eyes, and spilling out into the world.
		</p>
	</div>
</Block>
<Block block="block3">
	<h2 slot="title" class="blockContent">Loving and Following Christ</h2>
	<div slot="content" class="blockContent">
		<p>
			<strong>LOVING CHRIST:</strong> Paul said in Second Corinthians that it was the love of Christ
			that controlled him. It is this same motivation that drives us. It is out of love that we follow.
		</p>
		<p>
			<strong>FOLLOWING CHRIST:</strong> We want to follow Christ naturally. In John 15, Jesus tells
			us to abide in Him; this abiding is essential to our healthy growing relationship with Him and
			our ultimate happiness in life. Abiding brings us connection and strength, as well as nourishment
			to live the life to which we’re called. Following Christ has to be the foundation of everything
			we do as a church. To minister outside of this relationship is wasted activity. When we follow
			Christ out of a motivation of love, we live lives of worship to Him.
		</p>
	</div>
</Block>
<Block block="block4">
	<h2 slot="title" class="blockContent">Loving and Serving Each Other</h2>
	<div slot="content" class="blockContent">
		<p>
			<strong>LOVING EACH OTHER:</strong> The Apostle John records these words of Jesus in his gospel:
			“My command is this: Love one another as I have loved you. Greater love has no man than this, that
			he lay his life down for his friends.” That is the level of love that Jesus expects us to have
			for one another. It is when the world sees that kind of love that lives are drawn to Christ.
		</p>

		<p>
			<strong>SERVING EACH OTHER:</strong> Love is meeting needs. When we love, we serve. The book of
			Acts is full of examples of people giving their lives away for each other. It is only when we put
			others first that we can fulfill God’s dream for us and our church.
		</p>
	</div>
</Block>
<Block block="block5">
	<h2 slot="title" class="blockContent">THE NEED FOR BALANCE:</h2>
	<div slot="content" class="blockContent">
		<p>
			We need to be extremely conscious as a church and also as individuals to maintain balance
			between these three essential elements:
		</p>
		<ul>
			<li>FOLLOWING CHRIST (WORSHIP)</li>
			<li>SERVING EACH OTHER (COMMUNITY)</li>
			<li>REACHING THE LOST (OUTREACH)</li>
		</ul>
		<p>
			If we are to be effective as individuals and as a church, this balance is crucial. If we
			emphasize one and not the others we will be out of balance and thus not in a position to make
			a maximum impact.
		</p>
	</div>
</Block>
