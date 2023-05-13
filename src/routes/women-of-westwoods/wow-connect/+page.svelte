<script>
	import { PortableText } from '@portabletext/svelte';
	export let Events;
	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ Events } = data);
</script>

<svelte:head>
	<title>WoW Connect | Women of Westwoods</title>
</svelte:head>

<div class="container">
	<h3>WoW Connect</h3>
	<h4>Because supportive social relationships are essential to human thriving!</h4>
	<p>
		Once a month we will create a space to gather as women to build community around a different
		topic. All gatherings will be held at Westwoods Community Church. Upcoming dates are:
	</p>

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
		margin: 0 0 5px 0;
	}
	.eventContainer {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
