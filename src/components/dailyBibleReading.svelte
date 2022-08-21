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
		<div class="buttonContainer">
			<a class="button" href="/dailyreadings">See all Readings</a>
		</div>
	</div>
{/if}

<style lang="scss">
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
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

	.buttonContainer {
		width: 220px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		font-size: 24px;
		font-weight: bold;
		background: var(--theme-colors-card_bg);
		color: var(--theme-colors-card_color);
		margin: 0;
		border-radius: 10px;
		transition: all 0.25s ease-in-out;
		&:hover {
			background: var(--theme-colors-card_color);
			color: var(--theme-colors-card_bg);
		}
		@media (max-width: 553px) {
			margin-top: 20px;
		}
	}
</style>
