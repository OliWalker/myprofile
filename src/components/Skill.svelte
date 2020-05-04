<script>
  export let skill;
</script>

<style lang="scss">
  @import "../styles/theme.scss";

  li {
    padding: 10px 15px;
    margin: var(--spacings2);
    border-radius: 10px;
    border: 1px solid var(--black8);

    @include screen("medium") {
      margin: var(--spacings3) var(--spacings2);
    }
  }
</style>

<li class="text">{skill}</li>
