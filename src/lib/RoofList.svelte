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
    export let area: number;
    export let maxPanelCount: number;
    export let anualSunshine: number;
    export let c02Savings: number;
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
                area = i.solarPotential.maxArrayAreaMeters2
                maxPanelCount = i.solarPotential.maxArrayPanelsCount
                anualSunshine = i.solarPotential.maxSunshineHoursPerYear
                c02Savings = i.solarPotential.carbonOffsetFactorKgPerMwh
        }}><Label>{i.name}</Label></Button></Cell>
          
        </Row>
      {/each}
    </Body>
   
    <Pagination slot="paginate">
      <svelte:fragment slot="total">
        {start + 1}-{end}/{items.length}
      </svelte:fragment>
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
    </Pagination>
  </DataTable>

