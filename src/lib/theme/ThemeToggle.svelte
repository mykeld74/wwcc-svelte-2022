<script>
	import { getContext } from 'svelte';
	const { current, toggle } = getContext('theme');
</script>

<button on:click={toggle} {...$$props} class={$current} />

<style lang="scss">
	button {
		--width: 40px;
		--height: calc(var(--width) / 2);
		--radius: calc(var(--height) / 2);
		display: flex;
		position: relative;
		width: var(--width);
		height: var(--height);
		border-radius: var(--radius);
		border: 1px inset #999;
		background-color: var(--theme-colors-text);
		transition: background-color 0.3s ease-in-out;
		margin-left: 20px;
		&:after {
			content: '';
			position: absolute;
			top: -1px;
			left: -1px;
			width: var(--height);
			height: var(--height);
			border-radius: var(--radius);
			background-color: var(--theme-colors-background);
			box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
			transition: all 0.3s ease-in-out;
		}
		&.dark::after {
			transform: translate3d(100%, 0, 0);
		}
	}
</style>
