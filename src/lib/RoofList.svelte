<script lang='ts'>
    import Button, { Label } from '@smui/button';
    import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Pagination,
  } from '@smui/data-table';
  import IconButton from '@smui/icon-button';
  type Todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
  };
  let items: Todo[] = [];
  let rowsPerPage = 10;
  let currentPage = 0;
 
  $: start = currentPage * rowsPerPage;
  $: end = Math.min(start + rowsPerPage, items.length);
  $: lastPage = Math.max(Math.ceil(items.length / rowsPerPage) - 1, 0);
 
  $: if (currentPage > lastPage) {
    currentPage = lastPage;
  }

    export let data: any[];
    export let location: {lat: number, lng:number} | undefined;
    export let map: google.maps.Map;
    console.log(data)



</script>


<DataTable table$aria-label="Todo list" style="width: 100%;">
    <Head>
      <Row>
        <Cell>Total results</Cell>
      </Row>
    </Head>
    <Body>
      {#each data as i}
        <Row>
            <Cell><Button on:click = {() => {
                location = {lat: i.center.latitude, lng: i.center.longitude}
                map.setCenter(location)
        }}><Label>{i.name}</Label></Button></Cell>
          
        </Row>
      {/each}
    </Body>
   
    <Pagination slot="paginate">
      <svelte:fragment slot="total">
        {start + 1}-{end} of {items.length}
      </svelte:fragment>
   
      <IconButton
        class="material-icons"
        action="first-page"
        title="First page"
        on:click={() => (currentPage = 0)}
        disabled={currentPage === 0}>first_page</IconButton
      >
      <IconButton
        class="material-icons"
        action="prev-page"
        title="Prev page"
        on:click={() => currentPage--}
        disabled={currentPage === 0}>chevron_left</IconButton
      >
      <IconButton
        class="material-icons"
        action="next-page"
        title="Next page"
        on:click={() => currentPage++}
        disabled={currentPage === lastPage}>chevron_right</IconButton
      >
      <IconButton
        class="material-icons"
        action="last-page"
        title="Last page"
        on:click={() => (currentPage = lastPage)}
        disabled={currentPage === lastPage}>last_page</IconButton
      >
    </Pagination>
  </DataTable>
