<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faBars, faLink, faTimes } from '@fortawesome/free-solid-svg-icons';
	import { fly, fade } from 'svelte/transition';
	import navItems from '$data/navItems';
	const delayInterval = 50;

	const navBlocks = navItems;

	export let isOpen = false;
</script>

<button on:click={() => (isOpen = !isOpen)} class={isOpen ? 'navButton close' : 'navButton'}>
	<div class="faIcon">
		{#if isOpen}
			<Fa icon={faTimes} />
		{:else}
			<Fa icon={faBars} class="faIcon" />
		{/if}
	</div>
</button>
{#if isOpen}
	<div class="navOverlay" transition:fade on:click={() => (isOpen = false)} />
	<div id="navContainer" transition:fly={{ x: 300, duration: 500 }}>
		<nav on:click={() => (isOpen = false)}>
			{#each navBlocks as navBlock}
				<p class="category" transition:fade={{ duration: 750 }}>
					{navBlock.heading}
				</p>
				<ul>
					{#each navBlock.items as link, i}
						<li
							transition:fly={{ x: 100, y: 50, duration: 125, delay: delayInterval * link.order }}
						>
							<a href={link.slug} class="navItem">{link.page}</a>
						</li>
					{/each}
				</ul>
			{/each}
			<p class="category" transition:fade={{ duration: 750 }}>Prayer</p>
			<ul>
				<li transition:fly={{ x: 100, y: 50, duration: 125, delay: delayInterval * 13 }}>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLScjbhWqcpsjKnubkYgRQiX-rAsuNejM8AD2Bk2YzpAqdJh2Tw/viewform"
						class="navItem"
						target="_blank"
						rel="noopener noreferrer">Submit a Prayer Request</a
					>
				</li>
			</ul>
			<p class="category" transition:fade={{ duration: 750 }}>Give</p>
			<ul>
				<li transition:fly={{ x: 100, y: 50, duration: 125, delay: delayInterval * 14 }}>
					<a
						href="https://westwoods.churchcenter.com/giving"
						class="navItem"
						target="_blank"
						rel="noopener noreferrer">Donate to Westwoods</a
					>
				</li>
			</ul>
		</nav>
	</div>
{/if}

<style lang="scss">
	.navOverlay {
		position: fixed;
		width: 100vw;
		height: 100vh;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
	}
	#navContainer {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		max-width: 355px;
		background: var(--theme-colors-top_bar);
		height: 100vh;
		padding: 85px 0 0 50px;
		z-index: 900;
		a {
			color: var(--theme-colors-text);
		}
	}
	.navButton {
		background: var(--theme-colors-top_bar);
		color: var(--theme-colors-text);
		border-radius: 50%;
		border: none;
		font-size: 42px;
		padding: 0;
		width: 60px;
		height: 60px;
		position: absolute;
		top: 10px;
		right: 10px;
		outline: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 902;
		transition: all 0.33s ease-in-out;

		&.close {
			right: 260px;
			width: 50px;
			height: 50px;
			border: 2px solid var(--baseColor);
			border-radius: 50%;
		}
	}
	.faIcon {
		margin: 0;
		padding: 0;
		font-size: 32px;
	}
	.category {
		color: var(--accentColor);
		font-weight: bold;
		margin-bottom: 10px;
	}

	ul {
		list-style: none;
		margin-left: 0;
	}

	nav {
		width: 100%;
		height: 100%;
		overflow: scroll;
	}
</style>
