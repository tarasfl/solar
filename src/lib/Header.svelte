<header>
  <div class="container">
    <a href="/"><img alt="logo" src="./logo.png" class="logo" /></a>
    <div>
      <IconButton
        class="material-icons bell"
        href="/account-overview"
        color="secondary">account_circle</IconButton
      >

      <IconButton class="material-icons bell">notifications</IconButton>
    </div>
  </div>
</header>
<md-divider></md-divider>

<!-- Component for layout header -->
<script lang="ts">
  import '@material/web/divider/divider'
  import { Icon } from '@smui/common'
  import IconButton from '@smui/icon-button'
</script>

<style>
  @keyframes bellshake {
    0% {
      transform: rotate(0);
    }
    15% {
      transform: rotate(5deg);
    }
    30% {
      transform: rotate(-5deg);
    }
    45% {
      transform: rotate(4deg);
    }
    60% {
      transform: rotate(-4deg);
    }
    75% {
      transform: rotate(2deg);
    }
    85% {
      transform: rotate(-2deg);
    }
    92% {
      transform: rotate(1deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  .container :global(.bell :hover) {
    animation: bellshake 0.5s;
  }

  header {
    width: 100%;
    background-color: #ffffff;
    height: 65px;
  }

  .logo {
    margin-left: 5px;
    margin-top: 5px;
    height: 55px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  * {
    margin: 0;
    padding: 0;
  }
</style>
