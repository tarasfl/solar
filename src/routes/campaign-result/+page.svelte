<script lang="ts">

    // Svelte components
    import RoofList from "../../lib/RoofList.svelte";
    import PanelBuilldingInsights from "../../lib/PanelBuilldingInsights.svelte";

    // smui elements
    import LayoutGrid, {Cell} from "@smui/layout-grid";
    import { Icon } from '@smui/common';

    import {solarData, filterValue} from '../solar'
    import  {type SolarPotential} from '../clases'

    export let data: any[];
    export let buildings: any[];
    export let elements: any[];
    export let area: number;
    export let maxPanelCount: number;
    export let anualSunshine: number;
    export let c02Savings: number;
    export let solarPotential: SolarPotential;

    import { onMount } from 'svelte';
    import {Loader} from '@googlemaps/js-api-loader';
    import Paper from "@smui/paper";
   

    let location: {lat: number, lng:number} | undefined | google.maps.LatLng;  // location
    let map: google.maps.Map; // elemenent for map initialising
    let mapElement: HTMLElement; // HTML element for visualisation

    let mapsLibrary: google.maps.MapsLibrary;
    let geometryLibrary: google.maps.GeometryLibrary

    solarData.subscribe((value:any[]) => {
        data = value[1];
        buildings = value[0];
        elements = value;
    })
    location = new google.maps.LatLng(data[0].center.latitude, data[0].center.longitude)
    area = data[0].solarPotential.maxArrayAreaMeters2
    maxPanelCount = data[0].solarPotential.maxArrayPanelsCount
    anualSunshine = data[0].solarPotential.maxSunshineHoursPerYear
    c02Savings = data[0].solarPotential.carbonOffsetFactorKgPerMwh
    solarPotential = data[0].solarPotential;

    console.log(data[0].center)
    console.log(buildings)
    onMount(async () => {

    const loader = new Loader({
        apiKey: 'AIzaSyBP2gDNENS_7umt0jaHn3RtgseKS_8lQ_A',
        version: 'weekly', // You can specify the version of Google Maps API
      });

      const libraries = {
        maps: loader.importLibrary('maps'),
        geometry: loader.importLibrary('geometry')
      };
      geometryLibrary = await libraries.geometry;
      mapsLibrary = await libraries.maps;

      map = new mapsLibrary.Map(mapElement, {
        center: location,
        zoom: 20,
        mapTypeId: 'satellite',
        disableDefaultUI: true ,
        zoomControl: true
      });
      if (mapElement !== null ){
      const overlay = document.getElementById('overlay');
      const mapContainer = mapElement.getBoundingClientRect();
      const top = mapContainer.top + 10; // Adjust as needed
    const left = mapContainer.left +10 ; // Adjust as needed

    // Set the position of the overlay
    overlay.style.top = `${top}px`;
    overlay.style.left = `${left}px`;
      
    window.addEventListener('resize', () => {
  const mapContainer = mapElement.getBoundingClientRect();
  const top = mapContainer.top + 10; // Adjust as needed
  const left = mapContainer.left +10 ; // Adjust as needed
  overlay.style.top = `${top}px`;
  overlay.style.left = `${left}px`;
  
});}

    })
</script>

<div class='lead-search'>

  
<LayoutGrid class='container'>
  <Cell span={8} style='height:100%'>
    <div>
      <div bind:this={mapElement} class = 'map' style="position: relative; overflow:hidden;">
    </div>
    <div id="overlay" style="position: absolute; background-color: rgba(255, 255, 255, 1); padding: 10px; border-radius: 5px; z-index: 1000;">
        <div class="text-line">
          <div class = 'left-side-text'><Icon class='material-icons' style = 'color:rgba(50, 110, 198, 0.8)'>light_mode</Icon><p>Annual sunshine</p> </div>
          <div class="right-side-text"><p>{anualSunshine.toFixed(2)}</p></div>
        </div>
        <div class="text-line">
          <div class="left-side-text"><Icon class='material-icons' style = 'color:rgba(50, 110, 198, 0.8)'>square_foot</Icon><p>Roof Area</p> </div>
          <div class="right-side-text"><p>{area.toFixed(2)}</p></div>
        </div>
        <div class="text-line">
          <div class="left-side-text"><Icon class='material-icons' style = 'color:rgba(50, 110, 198, 0.8)'>solar_power</Icon><p>Max panel count</p> </div>
          <div class="right-side-text"><p>{maxPanelCount}</p></div>
        </div>
        <div class="text-line">
          <div class="left-side-text"><Icon class='material-icons' style = 'color:rgba(50, 110, 198, 0.8)'>co2</Icon><p>C02 savings</p> </div>
          <div class="right-side-text"><p>{c02Savings.toFixed(2)}</p></div></div>
      </div>
    </div>
  </Cell>
  <Cell spanDevices={{ desktop: 4, tablet: 8, phone: 4}}>
      {#if map}
      <Paper color="secondary" style='height:100%'>
        <RoofList elements = {elements} bind:solarPotential bind:location bind:area bind:anualSunshine bind:maxPanelCount bind:c02Savings data = {data} {map}/>
    </Paper>
          
      {/if}
  </Cell>
  <Cell>
    {#if geometryLibrary != undefined}
    <PanelBuilldingInsights {map} {geometryLibrary} {solarPotential} />
    {/if}
  </Cell>
</LayoutGrid>
</div>

<style>

  .left-side-text {
    width: 70%;
    display: flex;
  }
  .right-side-text {
    width: 30%;
    text-align: right;
    color: rgba(114, 114, 114, 0.9);
    margin-right: 5px;
    margin-left: 10px;
  }

    .lead-search,
  .lead-search :global(.container),
  .lead-search :global(.container > div){
    height: 100%;

    }

    .map {
      min-height: 480px;
      height:100%;
      width: 100%;
    }

    .text-line{
        display: flex;
        justify-content: stretch;
    }

  </style>

