<header>
	<nav>
		<ul>
			<li>
				<a rel="prefetch" href="projects" class="heading3">Projects</a>
			</li>
			<li>
				<a rel="prefetch" href="." class="heading3">Home</a>
			</li>
			<li>
				<a rel="prefetch" href="skills" class="heading3">Skills</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	@import '../styles/mixins/flex.scss';
	@import '../styles/mixins/utils.scss';
	@import '../styles/theme.scss';

	header {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: var(--header-height);
		z-index: 10;
		nav {
			position: relative;
			@include fullSize();
			@include flex('column', 'center');
			box-shadow: 0px 2px 8px 0px var(--black1);

			ul {
				@include flex('row', 'space-between');
				@include fullSize();
				max-width: var(--max-content-width);
				margin: 0 auto;
				align-items: center;
				padding: 0 var(--spacings4);

				@include screen('small') {
					@include inline(var(--spacings6));
					justify-content: flex-end;
					padding: 0 var(--spacings8);
				}
			}
		}
		nav:after {
			content: '';
			@include fullSize();
			position: absolute;
			background-color: var(--black1);
			opacity: 0.95;
			top: 0;
			z-index: -1;
		}
	}
</style>
