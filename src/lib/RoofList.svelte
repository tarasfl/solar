<script lang='ts'>
  import Button, { Label } from '@smui/button';
  import List, {Item, PrimaryText, SecondaryText, Text} from '@smui/list';

  import Pagination from './Pagination.svelte';

  import {
    type SolarPanelConfig,
    type SolarPotential
  } from '../routes/classes';
    import { Writable } from 'svelte/store';


    export let solarData: any[];
    export let elements: any[];
    export let location: {lat: number, lng:number} | undefined | google.maps.LatLng;;
    export let map: google.maps.Map;
    export let solarPotential: SolarPotential;
    export let minKwp: number;
    export let zipCode: string;
    export let lastCampaignId: number;
    export let actionPerformed: Writable<boolean>;

    
    let buttonClicked: boolean;
    actionPerformed.subscribe((value) => {buttonClicked = value})

let buildingsData = elements[0];
let items = solarData;
items.forEach((item) => {
  item.buildingData = buildingsData[solarData.indexOf(item)]
})

let rowsPerPage = 5;
let currentPage = 0;
     
$: start = currentPage * rowsPerPage;
$: end = Math.min(start + rowsPerPage, items.length);
$: slice = items.slice(start, end);

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

function onPageChange(newPage) {
  currentPage = newPage;
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
      if(!buttonClicked){
        update_campaign().then(() => update_lead_campaign())
        actionPerformed.set(true)
      }
    }
</script>



<List twoLine>
  {#each slice as i}
  <Item style='margin-bottom: 5px;' color="primary" on:click = {() => {
    location = {lat: i.center.latitude, lng: i.center.longitude}
    map.setCenter(location)
    solarPotential = i.solarPotential
  }}>
  <Text>
  <PrimaryText>
    <strong>{i.buildingData.name }</strong>
  </PrimaryText>

  <SecondaryText>
    {i.buildingData.vicinity } 
  </SecondaryText>
</Text>
</Item>


  {/each}
</List>

<Pagination
  currentPage={currentPage}
  totalPages={Math.ceil(items.length / rowsPerPage)-1}
  onPageChange={onPageChange}
/>


<Button  variant="raised" style='width:100%' on:click = {() => { writeData() }}>
  <Label style='color:#fff'>Save</Label>
</Button>



