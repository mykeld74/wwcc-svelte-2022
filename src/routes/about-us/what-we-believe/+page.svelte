<script>
	import HeroBlock from '$components/hero.svelte';
	import Block from '$components/textComponent.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';
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
	<title>What We Believe | Westwoods Community Church</title>
</svelte:head>

<HeroBlock>
	<span slot="header" class="center">What We Believe</span>
</HeroBlock>
<Block>
	<h2 slot="title" class="blockContent">The Gospel</h2>
	<div slot="content" class="blockContent">
		<p>
			The distinctive characteristic of all Christian doctrine is good news. Christianity is based
			on the gospel, or good news. We believe that Paul summed up this good news in 1 Corinthians
			15:
		</p>
		<ol>
			<li>
				<p class="liTitle">Christ died for our sins</p>
				<p>
					He died in our place, suffering the penalty that the Holy God set upon our human sin.
					Christ’s death is then, good news! We sinners no longer have to die for our sins. We can
					trust Christ and His sacrifice for us. We do not need to fear death and judgment.
				</p>
			</li>
			<li>
				<p class="liTitle">He was buried</p>

				<p>
					He was buried as fully human; Jesus suffered physical death and remained in the grave
					until the third day. The burial of Jesus shows that His death was real. It was the miracle
					of divine resurrection that brought Christ back to life.
				</p>
			</li>

			<li>
				<p class="liTitle">He was raised from the dead on the third day.</p>

				<p>
					He appeared to believers after His resurrection. This event authenticated the claims of
					Christ that He was God.
				</p>
			</li>

			<li>
				<p class="liTitle">All of this was According to the Scriptures.</p>

				<p>
					It was not only at the time, place and manner described in the Scripture, but also for the
					purpose and with the results described in Scripture.
				</p>
			</li>
		</ol>
		<p>
			In summary, the good news is that Christ died, was buried, and was raised again for us so that
			through faith in Him we are able to live the kind of life that we were made to live, delivered
			from eternal separation from God and instead live in a perfect relationship with Him Forever.
		</p>
	</div>
</Block>
<Block block="block2">
	<h2 slot="title" class="blockContent">The Holy Bible</h2>
	<div slot="content" class="blockContent">
		<p>
			The Holy Bible was written by men, divinely inspired by God, and is the record of His
			revelation of Himself to man. It is a perfect treasure of divine instruction. It has God for
			its author, salvation for its end, and truth, without any mixture of error, for its matter. It
			reveals the principles by which God judges us; and therefore is, and will remain to the end of
			the world, the true center of Christian union, and the supreme standard by which all human
			conduct, creeds, and religious opinions should be tried. The criterion by which the Bible is
			to be interpreted is Jesus Christ.
		</p>

		<div class="verses">
			<p>
				Ex. 24:4; Deut. 4:1-2; 17:19; Josh. 8:34; Psalm 19:7-10; 119:11, 89, 105, 140; Isa. 34:16;
				40:8; Jer. 15:16; 36; Matt. 5:17-18; 22:29; Luke 21:33; 24:44-46; John 5:39; 16:13-15;
				17:17; Acts 2:16 ff.; 17:11; Rom. 15:4; 16:25-26; 2 Tim. 3:15-17; Heb. 1:1-2; 4:12; 1 Peter
				1:25; 2 Peter 1:19-21.
			</p>
		</div>
	</div>
</Block>
<Block block="block3">
	<h2 slot="title" class="blockContent">God</h2>
	<div slot="content" class="blockContent">
		<p>
			There is one and only one living, and true God. He is an intelligent, spiritual, personal
			Being, and the Creator, Redeemer, Preserver, and Ruler of the universe. God is infinite in
			holiness and all other perfections. To Him we owe the highest love, reverence, and obedience.
			The eternal God reveals Himself to us as Father, Son, and Holy Spirit, with distinct personal
			attributes, but without division of nature, essence, or being.
		</p>

		<ol>
			<li>
				<p class="liTitle">God the Father</p>

				<p>
					God as Father reigns with providential care over His universe, creatures, and the flow of
					the stream through human history according to the purposes of His grace. He is
					all-powerful, all loving, and all wise. God is Father in truth to those who become His
					children through faith in Jesus Christ. He is fatherly in His attitude toward all men.
				</p>

				<div class="verses">
					<p>
						Gen. 1:1; 2:7; Ex. 3:14; 6:2-3; 15:11 ff.; 20:1 ff.; Lev. 22:2; Deut. 6:4; 32:6; 1
						Chron. 29:10; Psalm 19:1-3; Isa. 43:3, 15; 64:8; Jer. 10:10; 17:13; Matt. 6:9 ff.; 7:11;
						23:9; 28:19; Mark 1:9-11; John 4:24; 5:26; 14:6-13; 17:1-8; Acts 1:7; Rom. 8:14-15; 1
						Cor. 8:6; Gal. 4:6; Eph. 4:6; Col. 1:15; 1 Tim. 1:17; Heb. 11:6; 12:9; 1 Peter 1:17; 1
						John 5:7
					</p>
				</div>
			</li>
			<li>
				<p class="liTitle">God the Son</p>

				<p>
					Jesus Christ is the eternal Son of God. In His incarnation as Jesus Christ He was
					conceived of the Holy Spirit and born of the Virgin Mary. Jesus perfectly revealed and
					performed the will of God, taking upon Himself the demands and necessities of human
					nature, and identifying Himself completely with mankind yet without any sin. He honored
					the divine law by His personal obedience, and in His death on the cross He made provision
					for the redemption of men from all sin. He was raised from the dead with a glorified body
					and appeared to His disciples as the person who was with them before His crucifixion. He
					ascended into heaven and is now exalted at the right hand of God where He is the One
					Mediator, partaking of the nature of God and of man, and in whose Person is effected the
					reconciliation between God and man. He will return in power and glory to judge the world
					and to consummate His redemptive mission. He now dwells in all believers as the living and
					ever present Lord.
				</p>

				<div class="verses">
					<p>
						Gen. 18:1 ff.; Psalm 2:7 ff.; 110:1 ff.; Isa. 7:14; 53; Matt. 1:18-23; 3:17; 8:29;
						11:27; 14:33; 16:16, 27; 17:5; 27; 28:1-6, 19; Mark 1:1; 3:11; Luke 1:35; 4:41; 22:70;
						24:46; John 1:1-18, 29; 10:30, 38; 11:25-27; 12:44-50; 14:7- 11; 16:15-16, 28; 17:1-5,
						21-22; 20:1-20, 28; Acts 1:9; 2:22- 24; 7:55-56; 9:4-5, 20; Rom. 1:3-4; 3:23-26; 5:6-21;
						8:1-3, 34; 10:4; 1 Cor. 1:30; 2:2; 8:6; 15:1-8, 24-28; 2 Cor. 5:19- 21; Gal. 4:4-5; Eph.
						1:20; 3:11; 4:7-10; Phil. 2:5-11; Col. 1:13-22; 2:9; 1 Thess. 4:14-18; 1 Tim. 2:5-6;
						3:16; Titus 2:13-14; Heb. 1:1-3; 4:14-15; 7:14-28; 9:12-15, 24-28; 12:2; 13:8; 1 Peter
						2:21-25; 3:22; 1 John 1:7-9; 3:2; 4:14-15; 5:9; 2 John 7-9; Rev. 1:13-16; 5:9-14;
						12:10-11; 13:8; 19:16
					</p>
				</div>
			</li>

			<li>
				<p class="liTitle">God the Holy Spirit</p>
				<p>
					The Holy Spirit is the Spirit of God. He inspired holy men of old to write the Scriptures.
					Through illumination He enables men to understand truth. He exalts Christ, and convicts of
					sin, righteousness, and judgment. He calls men to the Savior, and effects regeneration. He
					cultivates Christian character, comforts believers, and bestows the spiritual gifts by
					which they serve God through His church. He seals the believer unto the day of final
					redemption. His presence in the Christian is the assurance of God to bring the believer
					into the fullness of the stature of Christ. He enlightens and empowers the believer and
					the church in worship, evangelism, and service.
				</p>

				<div class="verses">
					<p>
						Gen. 1:2; Judg. 14:6; Job 26:13; Psalm 51:11; 139:7 ff.; Isa. 61:1-3; Joel 2:28-32;
						Matt. 1:18; 3:16; 4:1; 12:28-32; 28:19; Mark 1:10, 12; Luke 1:35; 4:1, 18-19; 11:13;
						12:12; 24:49; John 4:24; 14:16-17, 26; 15:26; 16:7-14; Acts 1:8; 2:1-4, 38; 4:31; 5:3;
						6:3; 7:55; 8:17, 39; 10:44; 13:2; 15:28; 16:6; 19:1-6; Rom. 8:9-11, 14-16, 26-27; 1 Cor.
						2:10- 14; 3:16; 12:3-11; Gal. 4:6; Eph. 1:13-14; 4:30; 5:18; 1 Thess. 5:19; 1 Tim. 3:16;
						4:1; 2 Tim. 1:14; 3:16; Heb. 9:8, 14; 2 Peter 1:21; 1 John 4:13; 5:6-7; Rev. 1:10; 22:17
					</p>
				</div>
			</li>
		</ol>
	</div>
</Block>
<Block block="block4">
	<h2 slot="title" class="blockContent">Salvation</h2>
	<div slot="content" class="blockContent">
		<p>
			Salvation involves the redemption of the whole man, and is offered freely to all who accept
			Jesus Christ as Lord and Savior, who by His own blood obtained eternal redemption for the
			believer. In its broadest sense salvation includes regeneration, sanctification, and
			glorification.
		</p>

		<ol>
			<li>
				<p>
					Regeneration, or the new birth, is a work of God’s grace whereby believers become new
					creatures in Christ Jesus. It is a change of heart wrought by the Holy Spirit through
					conviction of sin, to which the sinner responds in repentance toward God and faith in the
					Lord Jesus Christ. Repentance and faith are inseparable experiences of grace. Repentance
					is a genuine turning from sin toward God. Faith is the acceptance of Jesus Christ and
					commitment of the entire personality to Him as Lord and Savior. Justification is God’s
					gracious and full acquittal upon principles of His righteousness of all sinners who repent
					and believe in Christ. Justification brings the believer into a relationship of peace and
					favor with God.
				</p>
			</li>

			<li>
				<p>
					Sanctification is the experience, beginning in regeneration, by which the believer is set
					apart to God’s purposes, and is enabled to progress toward moral and spiritual perfection
					through the presence and power of the Holy Spirit dwelling in them. Growth in grace should
					continue throughout the regenerate person’s life.
				</p>
			</li>

			<li>
				<p>
					Glorification is the culmination of salvation and is the final blessed and abiding state
					of the redeemed.
				</p>
			</li>
		</ol>

		<div class="verses">
			<p>
				Gen. 3:15; Ex. 3:14-17; 6:2-8; Matt. 1:21; 4:17; 16:21- 26; 27:22 to 28:6; Luke 1:68-69;
				2:28-32; John 1:11-14, 29; 3:3-21, 36; 5:24; 10:9, 28-29; 15:1-16; 17:17; Acts 2:21; 4:12;
				15:11; 16:30-31; 17:30-31; 20:32; Rom. 1:16-18; 2:4; 3:23-25; 4:3 ff.; 5:8-10; 6:1-23;
				8:1-18, 29-39; 10:9-10, 13; 13:11-14; 1 Cor. 1:18, 30; 6:19-20; 15:10; 2 Cor. 5:17- 20; Gal.
				2:20; 3:13; 5:22-25; 6:15; Eph. 1:7; 2:8-22; 4:11- 16; Phil. 2:12-13; Col. 1:9-22; 3:1 ff.;
				1 Thess. 5:23-24; 2 Tim. 1:12; Titus 2:11-14; Heb. 2:1-3; 5:8-9; 9:24-28; 11:1 to 12:8; 14;
				James 2:14-26; 1 Peter 1:2-23; 1 John 1:6 to 2:11; Rev. 3:20; 21:1 to 22:5.
			</p>
		</div>
	</div>
</Block>
<Block block="block5">
	<h2 slot="title" class="blockContent">The Church</h2>
	<div slot="content" class="blockContent">
		<p>
			The Church is the hope of the world. No other institution or organization can change the
			world; this is the task of the Church. The power to complete this task was given to the Church
			by Jesus Christ. There is one true Church which is universal and comprised of all those who
			acknowledge Jesus Christ as Savior and Lord. The Scripture commands believers to meet together
			for Worship, to love and serve each other, to reach a lost world with the gospel, and to
			observe the ordinances of Baptism and communion. Wherever God’s people meet together in
			obedience to His commands, there is a local expression of the Church. The task of the Church
			is to be the body of Christ on earth, individuals pooling their God given gifts to fulfill His
			great commission. The New Testament speaks also of the church as the body of Christ, which
			includes all of the redeemed throughout all ages.
		</p>

		<div class="verses">
			<p>
				Matt. 16:15-19; 18:15-20; Acts 2:41-42, 47; 5:11-14; 6:3-6; 13:1-3; 14:23, 27; 15:1-30;
				16:5; 20:28; Rom. 1:7; 1 Cor. 1:2; 3:16; 5:4-5; 7:17; 9:13-14; 12; Eph. 1:22-23; 2:19-22;
				3:8-11, 21; 5:22-32; Phil. 1:1; Col. 1:18; 1 Tim. 3:1-15; 4:14; 1 Peter 5:1-4; Rev. 2-3;
				21:2-3.
			</p>
		</div>
	</div>
</Block>

<style lang="scss">
	.liTitle {
		font-weight: 600;
	}
	.verses {
		background: #000;
		color: #13aad5;
		padding: 5px 10px;
		border-radius: 5px;
		p {
			font-size: 0.8rem;
			margin: 0;
		}
	}
</style>
