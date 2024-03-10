<script>
    export let currentPage;
    export let totalPages;
    export let onPageChange;
    import IconButton from '@smui/icon-button';
  
    function prevPage() {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    }
  
    function nextPage() {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    }
  </script>
  
  <div class="pagination">
    <IconButton on:click={prevPage} class='material-icons'>Prev</IconButton>
    <span>Page {currentPage} of {totalPages}</span>
    <button on:click={nextPage}>Next</button>
  </div>
  
  <style>
    .pagination {
      margin-top: 20px;
    }
  </style>
  