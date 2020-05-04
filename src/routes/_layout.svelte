<script>
  import GlobalStyles from "../components/GlobalStyles.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;

  import { stores } from "@sapper/app";
  const { page } = stores();
</script>

<style lang="scss">
  @import "./styles/mixins/flex.scss";
  @import "../styles/mixins/center.scss";
  @import "../styles/mixins/utils.scss";
  @import "../styles/theme.scss";

  main {
    padding: var(--spacings4);
    padding-bottom: var(--header-height);
    min-height: calc(100% - var(--header-height));
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: var(--max-content-width);
    margin: 0 auto;

    @include screen("small") {
      padding: var(--spacings8);
    }
  }

  .background {
    background-image: url("https://res.cloudinary.com/dh9xnvxbz/image/upload/q_70/v1535205869/profile_photo.jpg");
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
    @include center("center");
    content: "";
    @include fullSize();

    background: black;
    opacity: 0.6;
    transition: all 0.2s ease;
  }

  .dark::before {
    opacity: 0.9;
  }
</style>

<GlobalStyles />

<Nav />

<main>
  <slot />
</main>

<div class={`background ${$page.path === '/' ? '' : 'dark'}`} />
