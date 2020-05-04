<script>
  import Skills from "../data/skills.json";
  import Skill from "../components/Skill.svelte";
</script>

<style lang="scss">
  @import "../styles/mixins/flex.scss";

  h1 {
    margin-bottom: var(--spacings7);
  }

  ul {
    @include flex("row", "space-between");
    flex-wrap: wrap;
    margin-bottom: var(--spacings7);
  }
</style>

<svelte:head>
  <title>Skills</title>
</svelte:head>

<h1 class="banner">Tech</h1>

<ul>
  {#each Skills as skill}
    <Skill {skill} />
  {/each}
</ul>

<p class="textLarge">Plus loves learning more...</p>
