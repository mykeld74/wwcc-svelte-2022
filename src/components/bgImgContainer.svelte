<script lang="ts">
	export let source: string = '';
	export let bgSize: string = 'cover';
	export let id: string = '';
	export let className: string = '';
	export let position: string = 'center';

	let backgroundImage = `url('https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/WestwoodsCC/${source}')`;

	$: bgImages = `--bgImage:${backgroundImage};--bgSize:${bgSize};--bgPosition:${position}`;
</script>

<div style={bgImages} {id} class="bgImgSection {className}">
	<slot />
</div>

<style lang="scss">
	.bgImgSection {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bgImage) no-repeat var(--bgPosition, center) / var(--bgSize, cover);
	}
	.linkBlock {
		height: 100%;
		min-height: 300px;
		padding: 0 2vw;
		text-align: center;
		color: #fff;
		cursor: pointer;

		&:hover {
			color: var(--linkColor);
		}
	}
	.weAre {
		min-height: 40vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 30px 0px;
		color: rgb(255, 255, 255);
	}
</style>
