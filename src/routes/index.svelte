<script>
  import Github from "../assets/Github.svelte";
  import Linkedin from "../assets/Linkedin.svelte";
</script>

<style lang="scss">
  @import "../styles/mixins/flex.scss";
  @import "../styles/theme.scss";

  .home {
    @include flex("column", "space-between");
    flex: 1;
  }

  .home__banner {
    @include stack(var(--spacings6));
  }
  .home__contact {
    @include flex("row", "space-between");
    align-items: flex-end;
    width: 100%;

    p {
      margin-bottom: var(--spacings5);
    }
    div {
      div {
        @include flex("row", "flex-start");
        @include inline(var(--spacings4));
        margin-top: var(--spacings3);
      }
    }
    .buttonSmall {
      @include screen("medium") {
        display: none;
      }
    }

    .buttonLarge {
      display: none;
      @include screen("medium") {
        display: block;
      }
    }
  }
</style>

<svelte:head>
  <title>Oli Walker</title>
</svelte:head>

<div class="home">
  <section class="home__banner">

    <h1 class="banner">
      Hi!
      <br />
      <span class="heading1">I'm Oli</span>
    </h1>

    <p class="textLarge">
      I am a Full Stack Developer
      <br />
      building all things JavaScript
    </p>

  </section>

  <section class="home__contact">

    <div>
      <p class="textLarge">Say hi back at:</p>
      <a href="mailto:oliwalker@pm.me" class="heading3">OliWalker@pm.me</a>
      <div>
        <a href="https://linkedin.com/in/oli-walker/" aria-label="Linkedin">
          <Linkedin />
        </a>
        <a href="https://github.com/oliwalker" aria-label="Github">
          <Github />
        </a>
      </div>
    </div>

    <button class="actionButton buttonSmall">C.V</button>
    <button class="actionButton buttonLarge">Curriculum</button>

  </section>

</div>
