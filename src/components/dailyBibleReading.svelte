<script>
	import Verses from '$data/bibleReading.json';

	const today = new Date();
	const day = today.getDate();
	const month = today.getMonth() + 1;
	const year = today.getFullYear();

	const todayDate = `${month}-${day}-${year}`;

	let findToday = Verses.readings.find((verse) => verse.date === todayDate);
	let todaysVerse = findToday?.passage;
</script>

{#if todaysVerse}
	<div class="container">
		<div class="verse">
			<h4 class="title">Today's 7700 Lighthouse Bible Reading</h4>
			<p class="passage">{todaysVerse}</p>
		</div>
	</div>
{/if}

<style>
	.container {
		text-align: center;
		padding: 20px;
	}
	.title {
		margin: 0 0 10px 0;
	}
	.passage {
		margin: 0;
		font-size: 1.2rem;
	}
</style>
