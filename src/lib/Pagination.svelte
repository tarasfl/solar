<div class="pagination">
  <IconButton on:click="{prevPage}" class="material-icons"
    >chevron_left</IconButton
  >
  <span>Page {currentPage+1} of {totalPages+1}</span>
  <IconButton on:click="{nextPage}" class="material-icons"
    >chevron_right</IconButton
  >
</div>

<script>
  export let currentPage
  export let totalPages
  export let onPageChange
  import IconButton from '@smui/icon-button'

  function prevPage() {
    if (currentPage >= 1) {
      onPageChange(currentPage - 1)
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }
</script>

<style>
  .pagination {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>
