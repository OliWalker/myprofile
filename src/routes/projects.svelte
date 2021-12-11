<script>
	import projects from '../data/projects.json';
	import Project from '../components/Project.svelte';

	let isWork = true;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<h1 class="banner">Projects</h1>

<div class="projectToggle">
	<button
		class="bareButton heading2 underlineGrower"
		class:active={isWork}
		on:click={() => (isWork = true)}>Work</button
	>
	<button
		class="bareButton heading2 underlineGrower"
		class:active={!isWork}
		on:click={() => (isWork = false)}>Personal</button
	>
</div>

{#if isWork}
	<ul>
		{#each projects.work as project}
			<Project {project} />
		{/each}
	</ul>
{:else}
	<ul>
		{#each projects.personal as project}
			<Project {project} />
		{/each}
	</ul>
{/if}

<style lang="scss">
	@import '../styles/mixins/flex.scss';
	@import '../styles/theme.scss';

	h1 {
		margin-bottom: var(--spacings7);
	}

	.projectToggle {
		margin-bottom: var(--spacings4);
	}

	.projectToggle button:first-child {
		margin-right: var(--spacings6);
	}

	ul {
		@include flex('column', 'space-between');
		align-items: flex-start;

		@include screen('medium') {
			@include flex('row', 'space-between');
			flex-wrap: wrap;
		}
	}
</style>
