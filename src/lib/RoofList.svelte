<script lang='ts'>
  import Button, { Label } from '@smui/button';
  import List, {Item, PrimaryText, SecondaryText, Text} from '@smui/list';

  import Pagination from './Pagination.svelte';

  import {
    type SolarPanelConfig,
    type SolarPotential
  } from '../routes/classes';

  import {campaigns} from '../routes/solar'

    export let data: any[];
    export let elements: any[];
    export let location: {lat: number, lng:number} | undefined | google.maps.LatLng;;
    export let map: google.maps.Map;
    export let area: number;
    export let maxPanelCount: number;
    export let anualSunshine: number;
    export let c02Savings: number;
    export let solarPotential: SolarPotential;

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

function writeDataToStorage(){
  let writeData = []
  campaigns.subscribe(value => {
    writeData = value
  })
  writeData.push(data)
  campaigns.set(writeData)
}
campaigns.subscribe(value => {
    console.log(value)
  })
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


<Button  variant="raised" style='width:100%' on:click = {() => { writeDataToStorage() }}>
  <Label style='color:#fff'>Save</Label>
</Button>



