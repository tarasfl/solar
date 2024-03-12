<script lang='ts'>
    import Button, { Label } from '@smui/button';
    import List, {Item, PrimaryText, SecondaryText, Text} from '@smui/list';

  import Pagination from './Pagination.svelte';

  import {
    type SolarPanelConfig,
    type SolarPotential
  } from '../routes/clases';
  // import {writeDataToDB} from '../routes/database'


    export let data: any[];
    export let elements: any[];
    export let location: {lat: number, lng:number} | undefined | google.maps.LatLng;;
    export let map: google.maps.Map;
    export let area: number;
    export let maxPanelCount: number;
    export let anualSunshine: number;
    export let c02Savings: number;
    export let solarPotential: SolarPotential;
    
console.log(elements[0][0].tags['addr:street'] 
)

let items = data;
let currentPage = 1;
let pageSize = 5; // Number of items per page


function onPageChange(newPage) {
  currentPage = newPage;
}

function getCurrentPageItems() {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return items.slice(startIndex, endIndex);
}

</script>

<script lang="ts" context='module'>
    import sqlite3 from "sqlite3";

// 
export function writeDataToDB(){
    // const db = new sqlite3.Database('');
    // db.run("CREATE TABLE IF NOT EXISTS Campaign (campaign_id INTEGER PRIMARY KEY,zipcode TEXT,status TEXT,leads NUMERIC,kwp NUMERIC,panel_count NUMERIC);");
    // db.run("CREATE TABLE LeadCampaign (building_id INTEGER PRIMARY KEY, address TEXT, roof_area TEXT, kwp TEXT, data_layer TEXT, prospect_name TEXT, email TEXT, phone TEXT, building TEX);");
    // db.run("ALTER TABLE LeadCampaign ADD COLUMN IF NOT EXIST campaign_id INTEGER REFERENCES Campaign(campaign_id);")
    // db.close()
  }
</script>


<List twoLine>
  {#each getCurrentPageItems() as i}
  <Item style='margin-bottom: 5px;' color="primary" on:click = {() => {
    location = {lat: i.center.latitude, lng: i.center.longitude}
    map.setCenter(location)
    area = i.solarPotential.maxArrayAreaMeters2
    maxPanelCount = i.solarPotential.maxArrayPanelsCount
    anualSunshine = i.solarPotential.maxSunshineHoursPerYear
    c02Savings = i.solarPotential.carbonOffsetFactorKgPerMwh
    solarPotential = i.solarPotential
  }}>
  <Text>
   {#if elements[0][data.indexOf(i)].tags['name'] }
  <PrimaryText>
    <strong>{elements[0][data.indexOf(i)].tags['name'] }</strong>
  </PrimaryText>

  <SecondaryText>
    {elements[0][data.indexOf(i)].tags['addr:street'] }  {elements[0][data.indexOf(i)].tags['addr:housenumber'] }, {elements[0][data.indexOf(i)].tags['addr:city'] }
  </SecondaryText>
  {:else}

  <PrimaryText>
    <strong>{elements[0][data.indexOf(i)].tags['addr:street'] }  {elements[0][data.indexOf(i)].tags['addr:housenumber'] }</strong>
  </PrimaryText>

  <SecondaryText>
    {elements[0][data.indexOf(i)].tags['addr:city'] }
  </SecondaryText>
  {/if}
</Text>
</Item>

  {/each}
</List>

<Pagination
  currentPage={currentPage}
  totalPages={Math.ceil(items.length / pageSize)}
  onPageChange={onPageChange}
/>


<Button  variant="raised" style='width:100%' on:click = {() => { writeDataToDB() }}>
  <Label style='color:#fff'>Save</Label>
</Button>



