<slot />
<footer class="kidsFooterContainer">
	<a href="/westwoods-kids">
		<div class="kidsButton">
			<p>Westwoods Kids Home</p>
		</div>
	</a>
	<a href="/westwoods-kids/classes">
		<div class="kidsButton">
			<p>Westwoods Kids Classes</p>
		</div>
	</a>
	<a href="https://forms.gle/wX4ceuk6q98R9K1W7" target="_blank" rel="noopener noreferrer">
		<div class="kidsButton">
			<p>Westwoods Kids Application</p>
		</div>
	</a>
</footer>

<style lang="scss">
	.kidsFooterContainer {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		align-items: center;
		justify-content: space-around;
		gap: 20px;
		width: 100%;
		background: #fff;
		margin: auto;
		border-top: 3px solid #fff;
		border-bottom: 3px solid #fff;
		padding: 10px 10vw;
	}
	.kidsButton {
		box-sizing: border-box;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #3760a2;
		border-radius: 40px;
		border: none;
		width: 100%;
		overflow: hidden;
		padding: 0 10px;
		height: 80px;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		@media (max-width: 478px) {
			margin: 10px auto;
		}

		p {
			z-index: 2;
			margin: 0;
			font-size: clamp(16px, 1.5vw, 24px);
			font-weight: 600;
			line-height: 1;
			color: #fff;
		}

		&:before {
			content: '';
			position: absolute;
			top: 0;
			right: -50px;
			bottom: 0;
			left: 0;
			/* border-right: 50px solid transparent; */
			border-bottom: 80px solid #540c35;
			transform: translateX(-100%);
			transition: all 0.3s ease-in-out;
		}
		&:hover {
			color: #fff;
			&:before {
				transform: translateX(0);
				transition: all 0.3s ease-in-out;
			}
		}
		*:before {
			z-index: -1;
		}
	}
</style>
