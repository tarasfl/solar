
<script lang="ts">    
    import { page } from '$app/stores';
      import DataTable, {
        Head,
        Body,
        Row,
        Cell,
        Pagination,
      } from '@smui/data-table';
      import Select, { Option } from '@smui/select';
      import IconButton from '@smui/icon-button';
      import Paper, { Content, Title, Subtitle} from '@smui/paper';
    import Button, { Label } from '@smui/button';

    let leads = $page.data.leads;

     
      type Todo = {
        prospectName: string;
        email: string;
        phoneNumber: string;
        zipCode: string;
        roofArea: number;
        panelCount:number;
        kWp:number;
      };
      let items: Todo[] = [
      ];
    //   building_id: number;
    // address: string;
    // roof_area: string;
    // kwp: string;
    // data_layer: string;
    // prospect_name: string;
    // email: string;
    // phone: string;
    // campaign_id: number;

    leads.forEach((lead) => {
        if(lead.campaign_id == $page.params.slug){
            items.push({
                prospectName: lead.prospect_name,
                email: lead.email,
                phoneNumber: lead.phone,
                zipCode: lead.address,
                roofArea: lead.roof_area,
                panelCount: 0,
                kWp: lead.kwp
            })
        }
    })
      let rowsPerPage = 10;
      let currentPage = 0;
     
      $: start = currentPage * rowsPerPage;
      $: end = Math.min(start + rowsPerPage, items.length);
      $: slice = items.slice(start, end);
      $: lastPage = Math.max(Math.ceil(items.length / rowsPerPage) - 1, 0);
     
      $: if (currentPage > lastPage) {
        currentPage = lastPage;
      }
     
    </script>

    
<div>

    <Paper color='secondary'>
        <Title>View Campaign</Title>
        <Content>


<DataTable table$aria-label="Todo list" style="width: 100%;">
    <Head>
      <Row>
        <Cell class = 'cell-align-head'>Prospect Name</Cell>
        <Cell class = 'cell-align-head' >Email Adress</Cell>
        <Cell class = 'cell-align-head' >Phone Number</Cell>
        <Cell class = 'cell-align-head' >Zip Code</Cell>
        <Cell class = 'cell-align-head' numeric>Roof Area</Cell>
        <Cell class = 'cell-align-head' numeric>Panel Count</Cell>
        <Cell class = 'cell-align-head' numeric>kWp Potential</Cell>
      </Row>
    </Head>
    <Body>
      {#each slice as item}
        <Row>
          <Cell class = 'cell-align' numeric>{item.prospectName}</Cell>
          <Cell class = 'cell-align'>{item.email}</Cell>
          <Cell class = 'cell-align'>{item.phoneNumber}</Cell>
          <Cell class = 'cell-align'>{item.zipCode}</Cell>
          <Cell class = 'cell-align' numeric>{item.roofArea}</Cell>
          <Cell class = 'cell-align' numeric>{item.panelCount}</Cell>
          <Cell class = 'cell-align' numeric>{item.kWp}</Cell>
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
        on:click={() => currentPage--}
        >chevron_left</IconButton
      >
      <IconButton
        class="material-icons"
        action="next-page"
        title="Next page"
        on:click={() => currentPage++}
        >chevron_right</IconButton
      >
      <IconButton
        class="material-icons"
        action="last-page"
        title="Last page"
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
 