<script>
	export let block = 'block';
</script>

<div class="textComponent {block}">
	<div class="componentContent">
		<div class="center"><slot name="title" /></div>
		<slot name="content" />
	</div>
</div>

<style>
	.textComponent {
		background-color: var(--textBlockBg);
		color: var(--textBlockColor);
		padding: 3vh 2vw;
	}
	.componentContent {
		width: 96vw;
		max-width: 1160px;
		margin: 0 auto;
	}
</style>
