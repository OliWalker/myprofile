<script>
	import GlobalStyles from '../components/GlobalStyles.svelte';
	import Nav from '../components/Nav.svelte';
	import { page } from '$app/stores';
</script>

<GlobalStyles />

<Nav />

<main>
	<slot />
</main>

<div class="background pre" class:dark={$page.path !== '/'} />
<div class="background" class:dark={$page.path !== '/'} />

<style lang="scss">
	@import '../styles/mixins/flex.scss';
	@import '../styles/mixins/center.scss';
	@import '../styles/mixins/utils.scss';
	@import '../styles/theme.scss';

	main {
		padding: var(--spacings4);
		padding-bottom: var(--header-height);
		min-height: calc(100vh - var(--header-height));
		display: flex;
		flex-direction: column;
		flex: 1;
		max-width: var(--max-content-width);
		margin: 0 auto;

		@include screen('small') {
			padding: var(--spacings8);
		}
	}

	.background.pre {
		z-index: -2;
		background-image: url('/background_tiny.webp');
	}

	.background {
		background-image: url('/background_large.webp');
		background-position: right bottom;
		background-size: cover;
		position: fixed;
		left: -1px;
		z-index: -1;
		height: 100%;
		width: 100%;
		top: 0;
	}

	.background::before {
		@include center('center');
		content: '';
		@include fullSize();

		background: black;
		opacity: 0.6;
		transition: all 0.2s ease;
	}

	.dark::before {
		opacity: 0.9;
	}
</style>
