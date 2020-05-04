<script>
  import Projects from "../data/projects.json";
  import Project from "../components/Project.svelte";
</script>

<style lang="scss">
  @import "../styles/mixins/flex.scss";
  @import "../styles/theme.scss";

  h1 {
    margin-bottom: var(--spacings7);
  }

  ul {
    @include flex("column", "space-between");
    align-items: center;

    @include screen("medium") {
      @include flex("row", "space-between");
      flex-wrap: wrap;
    }
  }
</style>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1 class="banner">Projects</h1>

<ul>
  {#each Projects as project}
    <Project {project} />
  {/each}
</ul>
