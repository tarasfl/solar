<script lang='ts'>
    import Button, { Label } from '@smui/button';
    import List, {Item, PrimaryText} from '@smui/list';

  import Pagination from './Pagination.svelte';

  import {
    type SolarPanelConfig,
    type SolarPotential
  } from '../routes/classes';

  //   import Select, {Option} from '@smui/select';

    export let data: any[];
    export let location: {lat: number, lng:number} | undefined | google.maps.LatLng;;
    export let map: google.maps.Map;
    export let area: number;
    export let maxPanelCount: number;
    export let anualSunshine: number;
    export let c02Savings: number;
    export let solarPotential: SolarPotential;
    console.log(data)

    

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

<List>
  {#each getCurrentPageItems() as i}
  <Item style='margin-bottom: 5px; width:100%' color="primary" on:click = {() => {
    location = {lat: i.center.latitude, lng: i.center.longitude}
    map.setCenter(location)
    area = i.solarPotential.maxArrayAreaMeters2
    maxPanelCount = i.solarPotential.maxArrayPanelsCount
    anualSunshine = i.solarPotential.maxSunshineHoursPerYear
    c02Savings = i.solarPotential.carbonOffsetFactorKgPerMwh
    solarPotential = i.solarPotential
  }}><PrimaryText style = 'color: black;'>{i.name}</PrimaryText></Item>
  {/each}
</List>

<Pagination
  currentPage={currentPage}
  totalPages={Math.ceil(items.length / pageSize)}
  onPageChange={onPageChange}
/>


<Button ><Label>Save</Label></Button>



