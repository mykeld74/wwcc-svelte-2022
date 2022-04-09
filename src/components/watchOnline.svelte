<a
	href="https://www.youtube.com/channel/UCJkTcdfWk2DWGDuqJUOsrxA/featured"
	target="_blank"
	rel="noopener noreferrer"
>
	<div class="watchOnline">
		<p>Watch Online</p>
	</div>
</a>

<style lang="scss">
	.watchOnline {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		aspect-ratio: 1;
		top: 15vh;
		left: 5vw;
		text-align: center;
		background: var(--accentColor);
		padding: 1rem;
		border-radius: 50%;
		width: 100px;
		z-index: 90;
		transition: all 0.3s ease-in-out;
		&:hover {
			transform: scale(1.1);
		}
		p {
			color: #fff;
			font-size: 22px;
			font-weight: 600;
			margin: 0;
		}
		@media (max-width: 425px) {
			top: auto;
			left: auto;
			bottom: 10px;
			right: 10px;
			width: 75px;
			p {
				font-size: 18px;
			}
		}
	}
</style>
