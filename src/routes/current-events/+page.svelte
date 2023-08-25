<script>
	import { PortableText } from '@portabletext/svelte';
	import HeroBlock from '$components/hero.svelte';
	export let Events;
	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ Events } = data);

	$: console.log(Events);
</script>

<svelte:head>
	<title>Westwoods Events | Women of Westwoods</title>
</svelte:head>

<HeroBlock addBorder={true}>
	<span slot="header" class="center">Current Events</span>
</HeroBlock>

<div class="container">
	<h3>Women's Events:</h3>

	<section class="eventContainer">
		{#each Events as { title, date, time, location, body }}
			<article class="eventCard">
				<h3>{title}</h3>
				<p class="dateTime"><strong>Date: </strong>{date}</p>
				<p class="dateTime"><strong>Time: </strong>{time}</p>
				<p class="location"><strong>Location: </strong>{location}</p>
				<hr />
				{#if body}
					<PortableText value={body} />
				{/if}
			</article>
		{/each}
	</section>
</div>

<style lang="scss">
	.container {
		width: 100%;
		max-width: 1170px;
		margin: 30px auto;
		padding: 0 15px;
	}
	h3 {
		margin: 0 0 25px 0;
	}
	.eventContainer {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		gap: 20px;
	}
	.eventCard {
		border: var(--theme-colors-text) 2px solid;
		border-radius: 10px;
		padding: 20px;
		h3 {
			margin: -20px 0 15px -20px;
			color: var(--theme-colors-top_bar);
			background: var(--theme-colors-text);
			width: calc(100% + 40px);
			padding: 10px 20px;
		}
		.dateTime {
			margin: 0 0 10px 0;
		}
		.location {
			margin: 0 0 20px 0;
		}
	}
	hr {
		background: var(--theme-colors-text);
	}
</style>
