<script lang="ts">

    // Svelte components
    import RoofList from "../../lib/RoofList.svelte";

    // smui elements
    import LayoutGrid, {Cell} from "@smui/layout-grid";

    import {solarData} from '../solar'
    export let data: any[];

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


<h3 class='page-title'>Lead Search</h3>
<div class='lead-search'>

<LayoutGrid class='container'>
  <Cell span={8} style='height:100%'>
    
      <div bind:this={mapElement} class = 'map'></div>
  </Cell>
  <Cell spanDevices={{ desktop: 4, tablet: 8, phone: 4}}>
      {#if map}
      <Paper color="secondary" style='height:100%'>
        <RoofList bind:location data = {data} {map}/>
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


  </style>


