<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import Portal from '$components/portal.svelte';
	export let isAnnouncementOpen: boolean = false,
		
	function openModal() {
		isAnnouncementOpen = true;
	}
	function closeModal() {
		sessionStorage.setItem('isAnnouncementOpen', false);
		isAnnouncementOpen = false;
	}

</script>

{#if isAnnouncementOpen}
	<Portal>
		<div class="modalWrapper" transition:fade>
			<div class="modalBackground" on:click={closeModal} />
			<div class="modalContent" transition:fly={{ opacity: 0, y: 500 }}>
				<p class="modalHeader"><slot name="header" /></p>
				<div class="modalBody">
					<slot name="content" />
				</div>
				<button class="modalCloseButton" on:click={closeModal}
					><p class="modalCloseText">&#10007;</p></button
				>
			</div>
		</div>
	</Portal>
{/if}

<style>
	.modalHeader {
		width: 100%;
		text-align: center;
		font-size: clamp(28px, 5vw, 40px);
		font-weight: 700;
		border-bottom: 2px solid var(--theme-colors-text);
		padding-bottom: 20px;
	}
</style>
