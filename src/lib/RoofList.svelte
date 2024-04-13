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
    export let img_data: string;
    export let location: {lat: number, lng:number} | undefined | google.maps.LatLng;;
    export let map: google.maps.Map;
    export let solarPotential: SolarPotential;
    export let minKwp: number;
    export let zipCode: string;
    export let lastCampaignId: number;
    export let actionPerformed: Writable<boolean>;
    export let leads: any[]; 

    
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


function onPageChange(newPage) {
  currentPage = newPage;
}

// write to db campaign
  async function update_campaign(leadsArray) {
    let id  = lastCampaignId + 1
    console.log(id)
      const data = {
        campaign_id: id,
        zipcode: zipCode,
        status: 'active',
        leads: leadsArray.length,
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

  // filter leads too prevent dublicating data in db
function filterLeads(leadsArray){
  let filteredLeads = [];
  leadsArray.forEach((data:any) =>{
    if(leads.length>0){
    leads.forEach((element: any) => {
      if (element.address == data.address && element.prospect_name == data.prospect_name){
        console.log('item is allready in db')
      }else{
        filteredLeads.push(data)
      }
    })
  }
  else{
    filteredLeads.push(data)
  }
  })

  return filteredLeads;

}  

// prepare leads data to write to db
function prepareLeads(){
  let leadsArray = [];
  solarData.forEach(async (elem) => {
    const data = {
      address: buildingsData[solarData.indexOf(elem)].vicinity,
      roof_area: elem.solarPotential.maxArrayAreaMeters2.toFixed(2),
      kwp: elem.solarPotential.panelCapacityWatts.toFixed(2),
      data_layer: null,
      prospect_name: buildingsData[solarData.indexOf(elem)].name,
      email: null,
      phone: null,
      campaign_id: lastCampaignId+1,
      panel_count: 0,
      img_data: img_data
    };
    leadsArray.push(data)
})
return leadsArray;
    }


async function update_lead_campaign(leadsArray: any[]){
  leadsArray.forEach(async (data: any) =>  {
    await fetch('/api/update_lead_campaign', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    })
  })
}

// write data to campaign and leads data to db
async function writeData(leadsArray: any[]) {
      update_campaign(leadsArray).then(() => update_lead_campaign(leadsArray).then(() => window.alert('Data was written successfully')))
      actionPerformed.set(true)
}

// function triggered by button to start saving data to db
async function performWritingData(){
  if(!buttonClicked){
    let leadsArray = prepareLeads();
    let filteredLeads = filterLeads(leadsArray)

    if(filteredLeads.length>0){
          await writeData(filteredLeads)
    }
    else{
      if (confirm("There is no unique leads found, save them anyway? ") == true) {
            await writeData(leadsArray)
      }
    }
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


<Button  variant="raised" style='width:100%' on:click = {() => { performWritingData() }}>
  <Label style='color:#fff'>Save</Label>
</Button>



