<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import Portal from '$components/portal.svelte';
	export let isEasterModalOpen = true;
	export let modalName = 'default';
	function openModal() {
		isEasterModalOpen = true;
	}
	function closeModal() {
		isEasterModalOpen = false;
		localStorage.setItem(modalName, '1');
	}
</script>

{#if isEasterModalOpen}
	<Portal>
		<div class="modalWrapper" transition:fade>
			<div class="modalBackground" on:click={closeModal} />
			<div class="modalContent" transition:fly={{ opacity: 0, y: 500 }}>
				<p class="modalHeader" />
				<h1>Easter Sunday in the Park</h1>
				<hr />
				<div class="modalBody">
					<h3>We will have only one service Easter Sunday.</h3>
					<h3>10:00am at Lakewood Park.</h3>
					<h3>We hope you'll join us.</h3>
					<a href="https://easterinlakewood.com" target="_blank" rel="noopener noreferrer"
						><p>Learn More Here...</p></a
					>
				</div>
				<button class="modalCloseButton" on:click={closeModal}
					><p class="modalCloseText">&#10007;</p></button
				>
			</div>
		</div>
	</Portal>
{/if}

<style lang="scss">
</style>
