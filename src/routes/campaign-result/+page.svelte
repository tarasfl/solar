<script lang="ts">

    // Svelte components
    import RoofList from "../../lib/RoofList.svelte";

    // smui elements
    import LayoutGrid, {Cell} from "@smui/layout-grid";

    import {solarData} from '../solar'

    export let data: any[];
    export let area: number;
    export let maxPanelCount: number;
    export let anualSunshine: number;
    export let c02Savings: number;

    import { onMount } from 'svelte';
    import {Loader} from '@googlemaps/js-api-loader';
    import Paper from "@smui/paper";
   

    let location: {lat: number, lng:number} | undefined;  // location
    let map: google.maps.Map; // elemenent for map initialising
    let mapElement: HTMLElement; // HTML element for visualisation

    let mapsLibrary: google.maps.MapsLibrary;

    solarData.subscribe((value:any[]) => {
        data = value;
    })
    location = {lat: data[0].center.latitude, lng: data[0].center.longitude}

    area = data[0].solarPotential.maxArrayAreaMeters2
    maxPanelCount = data[0].solarPotential.maxArrayPanelsCount
    anualSunshine = data[0].solarPotential.maxSunshineHoursPerYear
    c02Savings = data[0].solarPotential.carbonOffsetFactorKgPerMwh


    console.log(data[0].center)
    onMount(async () => {
    const loader = new Loader({
        apiKey: 'AIzaSyBP2gDNENS_7umt0jaHn3RtgseKS_8lQ_A',
        version: 'weekly', // You can specify the version of Google Maps API
      });

      const libraries = {
        maps: loader.importLibrary('maps'),
      };

      mapsLibrary = await libraries.maps;

      map = new mapsLibrary.Map(mapElement, {
        center: location,
        zoom: 20,
        mapTypeId: 'satellite'
      });

    })
</script>


<h3 class='page-title'>Search Campaign Result</h3>
<div class='lead-search'>

<LayoutGrid class='container'>
  <Cell span={8} style='height:100%'>
    
      <div bind:this={mapElement} class = 'map' style="position: relative; overflow:hidden;">
    </div>
    <div id="overlay" style="position: absolute; top: 230px; left: 300px; background-color: rgba(255, 255, 255, 1); padding: 10px; border-radius: 5px; z-index: 1000;">
        <div class="text-line"><p>Annual sunshine</p> <p>{anualSunshine}</p></div>
        <div class="text-line"><p>Roof Area</p> <p>{area}</p></div>
        <div class="text-line"><p>Max panel count</p> <p>{maxPanelCount}</p></div>
        <div class="text-line"><p>C02 savings</p> <p>{c02Savings}</p></div>
      </div>
  </Cell>
  <Cell spanDevices={{ desktop: 4, tablet: 8, phone: 4}}>
      {#if map}
      <Paper color="secondary" style='height:100%'>
        <RoofList bind:location bind:area bind:anualSunshine bind:maxPanelCount bind:c02Savings data = {data} {map}/>
    </Paper>
          
      {/if}
  </Cell>
</LayoutGrid>
</div>

<style>

    .lead-search,
  .lead-search :global(.container),
  .lead-search :global(.container > div){
    height: 100%;

    }

    .map {
      min-height: 420px;
      height:100%;
      width: 100%;
    }

    .text-line{
        display: flex;
        justify-content: space-between;
    }

  </style>


