<script context="module">
	import client from '$lib/client';
	export const prerender = true;

	export async function load() {
		const query = `*[_type == "event"] | order(order asc){
      _id,
      title,
      date,
      time,
      body
		}`;
		const Events = await client.fetch(query);
		return { props: { Events } };
	}
</script>
<script>
	import PortableText from '@portabletext/svelte'
	export let Events;

	

	
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

	<div>
		{#each Events as {title, date, time, body}}
		<h3>{title}</h3>
		<p>{date}</p>
		<p>{time}</p>
		<PortableText
			blocks={body}			
		/>

		{/each}

	</div>

	<h3>May 17th - WoW Connect Night. Watch for details!</h3>
</div>

<style>
	.container {
		width: 100%;
		max-width: 1170px;
		margin: 30px auto;
		padding: 0 15px;
	}
	h3 {
		margin: 0 0 5px 0;
	}
	ul {
		margin-left: 5vw;
	}
</style>
