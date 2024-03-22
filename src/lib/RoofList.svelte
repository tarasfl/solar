<script lang='ts'>
  import Button, { Label } from '@smui/button';
  import List, {Item, PrimaryText, SecondaryText, Text} from '@smui/list';

  import Pagination from './Pagination.svelte';

  import {
    type SolarPanelConfig,
    type SolarPotential
  } from '../routes/classes';
    import { i } from 'vite/dist/node/types.d-jgA8ss1A';


    export let solarData: any[];
    export let elements: any[];
    export let location: {lat: number, lng:number} | undefined | google.maps.LatLng;;
    export let map: google.maps.Map;
    export let solarPotential: SolarPotential;
    export let minKwp: number;
    export let zipCode: string;
    export let lastCampaignId: number;

let buildingsData = elements[0];
let items = solarData;
let currentPage = 1;
let pageSize = 5; // Number of items per page
let googleData = false;

// const result = stmt.run(
//             data.address,
//             data.roof_area,
//             data.kwp,
//             data.data_layer,
//             data.prospect_name,
//             data.email,
//             data.phone,
//             data.campaign_id
//         );



if(elements[0][0].scope == "GOOGLE"){
  googleData = true;
  console.log("GOOGLE", googleData)
}

function onPageChange(newPage) {
  currentPage = newPage;
  getCurrentPageItems()
}


function getCurrentPageItems() {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return items.slice(startIndex, endIndex);
}


  async function update_campaign() {
      const data = {
        zipcode: zipCode,
        status: 'active',
        leads: solarData.length,
        kwp: minKwp,
        panel_count: (minKwp/0.45).toFixed(0)
      };
      await fetch('/api/update_campaign', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
      })
  }
  async function update_lead_campaign(){
    solarData.forEach(async (elem) => {
    const data = {
    address: buildingsData[solarData.indexOf(elem)].vicinity,
    roof_area: elem.solarPotential.maxArrayAreaMeters2.toFixed(2),
    kwp: elem.solarPotential.panelCapacityWatts.toFixed(2),
    data_layer: null,
    prospect_name: buildingsData[solarData.indexOf(elem)].name,
    email: null,
    phone: null,
    campaign_id: lastCampaignId+1
      };
      await fetch('/api/update_lead_campaign', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
      })
})
    }

    async function writeData(){
      update_campaign().then(() => update_lead_campaign())
     
    }
</script>



<List twoLine>
  {#each getCurrentPageItems() as i}
  <Item style='margin-bottom: 5px;' color="primary" on:click = {() => {
    location = {lat: i.center.latitude, lng: i.center.longitude}
    map.setCenter(location)
    solarPotential = i.solarPotential
  }}>
  {#if !googleData}
    <Text>
    {#if elements[0][solarData.indexOf(i)].tags['name'] }
    <PrimaryText>
      <strong>{elements[0][solarData.indexOf(i)].tags['name'] }</strong>
    </PrimaryText>

    <SecondaryText>
      {elements[0][solarData.indexOf(i)].tags['addr:street'] }  {elements[0][solarData.indexOf(i)].tags['addr:housenumber'] }, {elements[0][solarData.indexOf(i)].tags['addr:city'] }
    </SecondaryText>
    {:else}

    <PrimaryText>
      <strong>{elements[0][solarData.indexOf(i)].tags['addr:street'] }  {elements[0][solarData.indexOf(i)].tags['addr:housenumber'] }</strong>
    </PrimaryText>

    <SecondaryText>
      {#if elements[0][solarData.indexOf(i)].tags['addr:city'] }
      {elements[0][solarData.indexOf(i)].tags['addr:city'] }
      {/if}
    </SecondaryText>
    {/if}
  </Text>
  {:else if googleData}
  <Text>
  <PrimaryText>
    <strong>{elements[0][solarData.indexOf(i)].name }</strong>
  </PrimaryText>

  <SecondaryText>
    {elements[0][solarData.indexOf(i)].vicinity } 
  </SecondaryText>
</Text>
{/if}
</Item>


  {/each}
</List>

<Pagination
  currentPage={currentPage}
  totalPages={Math.ceil(items.length / pageSize)}
  onPageChange={onPageChange}
/>


<Button  variant="raised" style='width:100%' on:click = {() => { writeData() }}>
  <Label style='color:#fff'>Save</Label>
</Button>



