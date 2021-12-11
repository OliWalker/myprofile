<svelte:head>
	<title>Hmm - something is not right</title>
</svelte:head>

<h1 class="banner">Hmm...</h1>

<p class="textLarge">Something has gone wrong</p>
<p class="textLarge">We have been notified and will be working on this issue</p>

<style>
	h1,
	p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin-bottom: var(--spacings7);
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
