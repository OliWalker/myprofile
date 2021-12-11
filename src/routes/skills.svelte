<script>
	import skills from '../data/skills.json';
	import Skill from '../components/Skill.svelte';
</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>

<h1 class="banner">Tech</h1>

{#each Object.entries(skills) as [title, set]}
	<h2 class="heading2">{title}<span class="textSecondary">({set.subtitle})</span></h2>
	<ul>
		{#each set.skills as skill}
			<Skill {skill} />
		{/each}
	</ul>
{/each}

<p class="textLarge">Plus loves learning more...</p>

<style lang="scss">
	@import '../styles/mixins/flex.scss';

	h1 {
		margin-bottom: var(--spacings7);
	}

	h2 {
		margin-bottom: var(--spacings4);
	}

	span {
		font-size: 0.8em;
		margin-left: var(--spacings4);
	}

	ul {
		@include flex('row', 'space-between');
		flex-wrap: wrap;
		margin-bottom: var(--spacings7);
	}

	p {
		margin-top: var(--spacings7);
	}
</style>
