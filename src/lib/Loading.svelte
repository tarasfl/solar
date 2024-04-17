<div class="container">
  <CircularProgress style="height: 128px; width: 128px;" indeterminate />
  <h2>{message}</h2>
</div>

<script lang="ts">
  import CircularProgress from '@smui/circular-progress'
  export let message: string
</script>

<style>
  .container {
    color: rgba(114, 114, 114, 0.9);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: fixed;
    height: 100%;
    width: 100%;
  }
</style>
