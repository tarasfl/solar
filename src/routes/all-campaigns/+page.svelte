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

    type Todo = {
      zipCode: number;
      date: string;
      status: string, 
      numberOfLeads: number,
      minkWP: number,
      minPanelCount: number
    };
    let items: Todo[] = [];
    let rowsPerPage = 10;
    let currentPage = 0;
   
    $: start = currentPage * rowsPerPage;
    $: end = Math.min(start + rowsPerPage, items.length);
    $: lastPage = Math.max(Math.ceil(items.length / rowsPerPage) - 1, 0);


    items = [
        {
            zipCode: 90571,
            date: '26 feb 24',
            status: 'completed',
            numberOfLeads: 23,
            minkWP: 250,
            minPanelCount: 900
        }
    ]
   
    $: if (currentPage > lastPage) {
      currentPage = lastPage;
    }
    // export let campaignData; //for display data 
  </script>
<div>
<Paper color='secondary' style='height:500px'>
    <Title>View all search campaigns</Title>
    <!-- <Subtitle>To be implemented</Subtitle> -->
    <Content>
        <DataTable table$aria-label="Todo list" style="width: 100%;">
        <Head>
          <Row>
            <Cell numeric class = 'cell-align-head'>Zipcode</Cell>
            <Cell class = 'cell-align-head'>Status</Cell>
            <Cell numeric class = 'cell-align-head'>No. of Leads</Cell>
            <Cell numeric class = 'cell-align-head'>Min kWp</Cell>
            <Cell numeric class = 'cell-align-head'>Min Panel Count</Cell>
            <Cell class = 'cell-align-head'>Action</Cell>
          </Row>
        </Head>
        <Body>
          {#each items as item}
            <Row style='height:90px'>
                <Cell class = 'cell-align' numeric><big><strong>{item.zipCode}</strong></big><p>{item.date}</p></Cell>
                <Cell class = 'cell-align'><big><strong>{item.status}</strong></big></Cell>
                <Cell class = 'cell-align' numeric><big><strong>{item.numberOfLeads}</strong></big></Cell>
                <Cell class = 'cell-align' numeric><big><strong>{item.minkWP}</strong></big></Cell>
                <Cell class = 'cell-align' numeric><big><strong>{item.minPanelCount}</strong></big></Cell>
                <Cell>
                    <Button variant="raised" style='width:100%'>
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
            disabled={currentPage === 0}
            title="First page"
            on:click={() => (currentPage = 0)}
            >first_page</IconButton
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
            disabled={currentPage === lastPage}
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