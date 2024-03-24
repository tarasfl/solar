<script lang="ts">
    import Paper, { Content, Title, Subtitle} from '@smui/paper';
    import Button, { Label } from '@smui/button';
    import DataTable, {
      Head,
      Body,
      Row,
      Cell,
      Pagination,
    } from '@smui/data-table';
    import Select, { Option } from '@smui/select';
    import IconButton from '@smui/icon-button';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    let campaign = $page.data.campaign;

    type Todo = {
      zipcode: string;
      status: string, 
      leads: number,
      kwp: number,
      panel_count: number,
      campaign_id: number
    };
    let items: Todo[] = campaign;
    let rowsPerPage = 10;
  let currentPage = 0;
 
  $: start = currentPage * rowsPerPage;
  $: end = Math.min(start + rowsPerPage, items.length);
  $: slice = items.slice(start, end);
  $: lastPage = Math.max(Math.ceil(items.length / rowsPerPage) - 1, 0);
 
  $: if (currentPage > lastPage) {
    currentPage = lastPage;
  }
   
    $: if (currentPage > lastPage) {
      currentPage = lastPage;
    }
  </script>
<div>
<Paper color='secondary'>
    <Title>View all search campaigns</Title>
    <Content>
        <DataTable table$aria-label="Todo list" style="width: 100%;">
        <Head>
          <Row>
            <Cell class = 'cell-align-head'>Zipcode</Cell>
            <Cell class = 'cell-align-head'>Status</Cell>
            <Cell numeric class = 'cell-align-head'>No. of Leads</Cell>
            <Cell numeric class = 'cell-align-head'>Min kWp</Cell>
            <Cell numeric class = 'cell-align-head'>Min Panel Count</Cell>
            <Cell class = 'cell-align-head'>Action</Cell>
          </Row>
        </Head>
        <Body>
          {#each slice as item}
            <Row style='height:90px'>
                <Cell class = 'cell-align'><big><strong>{item.zipcode}</strong></big></Cell>
                <Cell class = 'cell-align'><big><strong>{item.status}</strong></big></Cell>
                <Cell class = 'cell-align' numeric><big><strong>{item.leads}</strong></big></Cell>
                <Cell class = 'cell-align' numeric><big><strong>{item.kwp}</strong></big></Cell>
                <Cell class = 'cell-align' numeric><big><strong>{item.panel_count}</strong></big></Cell>
                <Cell>
                    <Button variant="raised" style='width:100%' href = '/all-campaigns/{item.campaign_id}'>
                        <Label style='color:#fff'>View Data</Label>
                    </Button>
                </Cell>
            </Row>
          {/each}
        </Body>
       
        <Pagination slot="paginate">
          <svelte:fragment slot="rowsPerPage">
            <Label>Rows Per Page</Label>
            <Select variant="outlined" bind:value={rowsPerPage} noLabel>
              <Option value={10}>10</Option>
              <Option value={25}>25</Option>
              <Option value={100}>100</Option>
            </Select>
          </svelte:fragment>
          <svelte:fragment slot="total">
            {start + 1}-{end} of {items.length}
          </svelte:fragment>
          <IconButton
            class="material-icons"
            action="first-page"
            title="First page"
            on:click={() => (currentPage = 0)}
            >first_page</IconButton
          >
          <IconButton
            class="material-icons"
            action="prev-page"
            title="Prev page"
            on:click={() => currentPage--}>chevron_left</IconButton
          >
          <IconButton
            class="material-icons"
            action="next-page"
            title="Next page"
            on:click={() => currentPage++}>chevron_right</IconButton
          >
          <IconButton
            class="material-icons"
            action="last-page"
            on:click={() => (currentPage = lastPage)}
            >last_page</IconButton
          >
        </Pagination>
      </DataTable>
       
     </Content>
</Paper>
</div>
<style>
    * :global( .cell-align){
        text-align: left;
    }
    * :global( .cell-align-head){
        text-align: left;
        color: rgba(114, 114, 114, 0.9);
    }
</style>