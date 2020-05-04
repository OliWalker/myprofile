<script>
  export let project;

  //   const createBoxShadow = color => `box-shadow: 0px 5px 17px -10px ${color}`;
  const createBoxShadow = color => `box-shadow: 16px 16px 0px -14px ${color}`;
</script>

<style lang="scss">
  @import "../styles/theme.scss";
  @import "../styles/mixins/flex.scss";
  @import "../styles/mixins/utils.scss";

  .project {
    z-index: 1;
    width: 100%;
    margin-bottom: var(--spacings5);
    position: relative;

    @include screen("medium") {
      max-width: 355px;
      margin-bottom: var(--spacings6);
    }

    @include screen("large") {
      max-width: 460px;
      margin-bottom: var(--spacings7);
    }

    a {
      @include flex("column", "flex-start");
      width: 100%;
      padding: var(--spacings5);

      .project__img {
        @include flex("row", "space-between");
        align-items: center;
        margin-bottom: var(--spacings6);

        img {
          width: 100px;
          height: 100px;
        }
      }

      .project__text {
        ul {
          margin-top: var(--spacings6);
          @include flex("row", "space-between");
          flex-wrap: wrap;

          li {
            margin-bottom: var(--spacings4);
          }
          li:before {
            content: "-";
          }
          li:after {
            content: "-";
            margin-right: var(--spacings3);
          }
        }
      }
    }
  }
  .project:after {
    content: "";
    @include fullSize();
    position: absolute;
    background-color: var(--black1);
    opacity: 0.7;
    top: 0;
    z-index: -1;
  }
</style>

<li class="project">
  <a
    style={createBoxShadow(project.shadow)}
    href={project.href}
    target="_blank"
    rel="noopener noreferrer">
    <div class="project__img">
      <img alt={project.title} src={project.imgSrc} />
      <h2 class="heading2">{project.title}</h2>
    </div>
    <div class="project__text">
      <p class="textLarge">{project.short}</p>
      <ul class="textSmall">
        {#each project.techStack as tech}
          <li class="textSecondary">{tech}</li>
        {/each}
      </ul>
    </div>
  </a>
</li>
