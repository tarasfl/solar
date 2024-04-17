{#if $notification}
  <div class="notification {$notification.type}" transition:fade>
    {$notification.message}
  </div>
{/if}

<div>
  <Paper color="secondary">
    <Title>View Campaign</Title>
    <Content>
      <DataTable table$aria-label="Todo list" style="width: 100%;">
        <Head>
          <Row>
            <Cell class="cell-align-head">Prospect Name</Cell>
            <Cell class="cell-align-head">Email Address</Cell>
            <Cell class="cell-align-head">Phone Number</Cell>
            <Cell class="cell-align-head">Address</Cell>
            <Cell class="cell-align-head" numeric>Roof Area</Cell>
            <Cell class="cell-align-head" numeric>Panel Count</Cell>
            <Cell class="cell-align-head" numeric>kWp Potential</Cell>
            <Cell class="cell-align-head" numeric>Save change</Cell>
          </Row>
        </Head>
        <Body>
          {#each slice as item}
            <Row>
              <Cell class="cell-align" numeric>{item.prospect_name}</Cell>
              <Cell class="cell-align" numeric>
                <TextField class="cell-align" bind:value="{item.email}"
                ></TextField>
              </Cell>
              <Cell class="cell-align" numeric>
                <TextField class="cell-align" bind:value="{item.phone_number}"
                ></TextField>
              </Cell>
              <Cell class="cell-align">{item.address}</Cell>
              <Cell class="cell-align" numeric>{item.roof_area}</Cell>
              <Cell class="cell-align" numeric>{item.panel_count}</Cell>
              <Cell class="cell-align" numeric>{item.kwp}</Cell>
              <Cell class="cell-align" numeric>
                <Button
                  on:click="{() =>
                    handleEventChanges(
                      item.building_id,
                      item.email,
                      item.phone_number,
                    )}">Save Changes</Button
                >
              </Cell>
            </Row>
          {/each}
        </Body>
        <Pagination slot="paginate">
          <svelte:fragment slot="rowsPerPage">
            <Label>Rows Per Page</Label>
            <Select variant="outlined" bind:value="{rowsPerPage}" noLabel>
              <Option value="{10}">10</Option>
              <Option value="{25}">25</Option>
              <Option value="{100}">100</Option>
            </Select>
          </svelte:fragment>
          <svelte:fragment slot="total">
            {start + 1}-{end} of {items.length}
          </svelte:fragment>
          <IconButton
            class="material-icons"
            action="first-page"
            title="First page"
            on:click="{() => (currentPage = 0)}">first_page</IconButton
          >
          <IconButton
            class="material-icons"
            action="prev-page"
            title="Prev page"
            on:click="{() => currentPage--}">chevron_left</IconButton
          >
          <IconButton
            class="material-icons"
            action="next-page"
            title="Next page"
            on:click="{() => currentPage++}">chevron_right</IconButton
          >
          <IconButton
            class="material-icons"
            action="last-page"
            title="Last page"
            on:click="{() => (currentPage = lastPage)}">last_page</IconButton
          >
        </Pagination>
      </DataTable>
    </Content>
  </Paper>
</div>

<script lang="ts">
  import { page } from '$app/stores'
  import { writable } from 'svelte/store'
  import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Pagination,
  } from '@smui/data-table'
  import Select, { Option } from '@smui/select'
  import IconButton from '@smui/icon-button'
  import Paper, { Content, Title } from '@smui/paper'
  import Button, { Label } from '@smui/button'
  import TextField from '@smui/textfield'
  import { LeadCampaign } from '../../../lib/server/db/types'
  import { fade } from 'svelte/transition'

  let leads = $page.data.leads

  let items: LeadCampaign[] = []

  leads.forEach((lead) => {
    if (lead.campaign_id == $page.params.slug) {
      items.push({
        building_id: lead.building_id,
        data_layer: lead.data_layer,
        campaign_id: lead.campaign_id,
        img_data: lead.img_data,
        prospect_name: lead.prospect_name,
        email: lead.email,
        phone_number: lead.phone,
        address: lead.address,
        roof_area: lead.roof_area,
        panel_count: 0,
        kwp: lead.kwp,
      })
    }
  })

  let rowsPerPage = 10
  let currentPage = 0

  $: start = currentPage * rowsPerPage
  $: end = Math.min(start + rowsPerPage, items.length)
  $: slice = items.slice(start, end)
  $: lastPage = Math.max(Math.ceil(items.length / rowsPerPage) - 1, 0)

  $: if (currentPage > lastPage) {
    currentPage = lastPage
  }

  const notification = writable<{ message: string; type: 'success' | 'error' }>(
    null,
  )

  function showNotification(message: string, type: 'success' | 'error') {
    notification.set({ message, type })

    setTimeout(() => {
      notification.set(null)
    }, 3500)
  }

  async function handleEventChanges(
    building_id: number,
    new_email: string,
    new_phone: string,
  ) {
    let data = { building_id, new_email, new_phone }
    try {
      await fetch('/api/update_data_lead_campaign', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
      })
      showNotification('Changes saved successfully.', 'success')
    } catch (error) {
      showNotification('Error occurred while saving changes.', 'error')
    }
  }
</script>

<style>
  * :global(.cell-align) {
    text-align: left;
  }
  * :global(.cell-align-head) {
    text-align: left;
    color: rgba(114, 114, 114, 0.9);
  }

  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 5px;
    color: white;
  }

  .success {
    background-color: #4caf50;
  }

  .error {
    background-color: #f44336;
  }
</style>
