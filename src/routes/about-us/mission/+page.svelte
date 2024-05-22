<script>
	import HeroBlock from '$components/hero.svelte';
	import Block from '$components/textComponent.svelte';
	// import { gsap } from 'gsap';
	// import { onMount } from 'svelte';
	// import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';
	// gsap.registerPlugin(ScrollTrigger);

	// onMount(() => {
	// 	gsap.from('.block .blockContent', {
	// 		opacity: 0,
	// 		scale: 0,
	// 		x: 800,
	// 		duration: 0.5,
	// 		ease: 'power1.inOut'
	// 	});
	// 	gsap.from('.block2 .blockContent', {
	// 		opacity: 0,
	// 		scale: 0,
	// 		x: -800,
	// 		duration: 0.5,
	// 		stagger: 0.25,
	// 		ease: 'power1.inOut'
	// 	});
	// 	gsap.from('.block3 .blockContent', {
	// 		scrollTrigger: {
	// 			trigger: '.block3',
	// 			// toggleActions: 'play none none none',
	// 			start: 'top bottom',
	// 			end: 'bottom bottom-=50',
	// 			scrub: 0.5,
	// 			markers: false
	// 		},
	// 		opacity: 0,
	// 		scale: 0,
	// 		x: 800,
	// 		duration: 1.5,
	// 		stagger: 0.25,
	// 		ease: 'power1.inOut'
	// 	});
	// 	gsap.from('.block4 .blockContent', {
	// 		scrollTrigger: {
	// 			trigger: '.block4',
	// 			// toggleActions: 'play none none none',
	// 			start: '0 85%',
	// 			end: 'bottom bottom-=50',
	// 			scrub: 0.5,
	// 			markers: false
	// 		},
	// 		opacity: 0,
	// 		scale: 0,
	// 		x: -800,
	// 		duration: 1.5,
	// 		stagger: 0.25,
	// 		ease: 'power1.inOut'
	// 	});
	// 	gsap.from('.block5 .blockContent', {
	// 		scrollTrigger: {
	// 			trigger: '.block5',
	// 			// toggleActions: 'play none none none',
	// 			start: '0 85%',
	// 			end: 'bottom bottom-=50',
	// 			scrub: 0.5,
	// 			markers: false
	// 		},
	// 		opacity: 0,
	// 		scale: 0,
	// 		x: 800,
	// 		duration: 1.5,
	// 		stagger: 0.25,
	// 		ease: 'power1.inOut'
	// 	});
	// });
</script>

<svelte:head>
	<title>Mission | Westwoods Community Church</title>
</svelte:head>

<HeroBlock>
	<span slot="header" class="center">Mission</span>
</HeroBlock>
<Block>
	<h2 slot="title" class="blockContent">The Body of Christ on Earth</h2>
	<div slot="content" class="blockContent">
		<p>
			Over and over in the New Testament the church is referred to as the body of Christ, and we
			need to understand what that means. We are His eyes to see a needy world. We are his mouth to
			speak words of grace and truth. We are His heart to love, even the unlovable. We are His hands
			to mend, serve, and reach out. We are His legs and feet to carry His message to those who need
			it!
		</p>
	</div>
</Block>
<Block block="block2">
	<h2 slot="title" class="blockContent">Corporately Pooling our Spiritual Gifts</h2>
	<div slot="content" class="blockContent">
		<p>
			1 Peter 4 says that we should use whatever gifts God has given us to serve others. We need to
			help people find and utilize their gifts in order to fulfill God’s plan for this church that
			He has begun in us.
		</p>
	</div>
</Block>
<Block block="block3">
	<h2 slot="title" class="blockContent">To Fulfill His Great Commission</h2>
	<div slot="content" class="blockContent">
		<p>
			In Matthew 28, Jesus gives us the clearest directive that anyone could hope for, saying, “Go
			and make disciples of all nations, baptizing them in the name of the Father, Son, and the Holy
			Spirit and teaching them to obey all that I have commanded you.” This is our simple command
			straight from the mouth of God–“Make Disciples”.
		</p>
	</div>
</Block>
<Block block="block4">
	<h2 slot="title" class="blockContent">As Soon as Possible</h2>
	<div slot="content" class="blockContent">
		<p>
			Christians have stood idle long enough. We don’t want to stand before a nail scarred Christ
			and explain to Him why we never quite got around to the whole making disciples thing! We must
			have, and act on, a sense of urgency–to take seriously His great commission and to take
			personal, as well as shared, responsibility to make sure it is getting done!
		</p>
	</div>
</Block>
