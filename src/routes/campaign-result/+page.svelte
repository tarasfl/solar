<script lang="ts">
    import html2canvas from 'html2canvas';
    import { page } from '$app/stores';

    // Svelte components
    import RoofList from "../../lib/RoofList.svelte";
    import PanelBuilldingInsights from "../../lib/PanelBuilldingInsights.svelte";

    // smui elements
    import LayoutGrid, {Cell} from "@smui/layout-grid";
    import { Icon } from '@smui/common';

    import {solarData, filterValue, locationName} from '../solar'
    import  {type SolarPotential} from '../classes'
    import { writable } from 'svelte/store';

    let actionPerformed = writable(false);

    export let data: any[];
    export let buildings: any[];
    export let elements: any[];
    export let solarPotential: SolarPotential;
    export let campaign = $page.data.campaign;

    import { onMount } from 'svelte';
    import {Loader} from '@googlemaps/js-api-loader';
    import Paper from "@smui/paper";
    import Button, {Label} from "@smui/button";
   

    let location: {lat: number, lng:number} | undefined | google.maps.LatLng;  // location
    let map: google.maps.Map; // elemenent for map initialising
    let mapElement: HTMLElement; // HTML element for visualisation

    let mapsLibrary: google.maps.MapsLibrary;
    let geometryLibrary: google.maps.GeometryLibrary;

    let minKwp: number;
    let zipCode: string;
    let imgData: string;
    let lastCampaignId = campaign[campaign.length-1].campaign_id;

    filterValue.subscribe((value:any) =>{
      minKwp = value;
    })

    solarData.subscribe((value:any[]) => {
        data = value[1];
        buildings = value[0];
        elements = value;
    })
    location = new google.maps.LatLng(data[0].center.latitude, data[0].center.longitude)
    solarPotential = data[0].solarPotential;

    onMount(async () => {
    convertMapToImage()
    const loader = new Loader({
        apiKey: 'AIzaSyBP2gDNENS_7umt0jaHn3RtgseKS_8lQ_A',
        version: 'weekly', // You can specify the version of Google Maps API
      });

      const libraries = {
        maps: loader.importLibrary('maps'),
        geometry: loader.importLibrary('geometry')
      };

      const geocoder = new google.maps.Geocoder();
      const geocoderResponse = await geocoder.geocode({
        location: location,
      });
  
      const geocoderResult = geocoderResponse.results[0];
      geocoderResult.address_components.forEach((component) => {
        if(component.types.includes("postal_code")){
          zipCode = component.long_name
        }
      })

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

    async function convertMapToImage() {
    const content = document.getElementById('map');

    if (content) {
      const canvas = await html2canvas(content, { useCORS: true, allowTaint: false });
      imgData = canvas.toDataURL('image/jpeg');
    }
  }

  function downloadImage() {
    const link = document.createElement('a');
    link.href = imgData;
    link.download = generateFilename();
    link.click();
  }

  function generateFilename() {
    const now = new Date();
    const timestamp = now.getTime();
    return `google_map_${timestamp}.jpg`;
  }
    

</script>

<div class='lead-search'>

  
<LayoutGrid class='container'>
  <Cell span = {12}><div class='return-label'><a href='/lead-search'><Icon class='material-icons'>arrow_back_ios</Icon><h3 style="display: inline; margin:0; padding:0">Search Leads</h3></a></div></Cell>
  <Cell span={8} style='height:100%'>
    <div id='map'>
      <div bind:this={mapElement} class = 'map' style="position: relative; overflow:hidden;">
    </div>
    <div id="overlay" style="position: absolute; background-color: rgba(255, 255, 255, 1); padding: 10px; border-radius: 5px; z-index: 1000;">
        <div class="text-line">
          <div class = 'left-side-text'><Icon class='material-icons' style = 'color:rgba(50, 110, 198, 0.8)'>light_mode</Icon><p>Annual sunshine</p> </div>
          <div class="right-side-text"><p>{solarPotential.maxSunshineHoursPerYear.toFixed(2)}</p></div>
        </div>
        <div class="text-line">
          <div class="left-side-text"><Icon class='material-icons' style = 'color:rgba(50, 110, 198, 0.8)'>square_foot</Icon><p>Roof Area</p> </div>
          <div class="right-side-text"><p>{solarPotential.maxArrayAreaMeters2.toFixed(2)}</p></div>
        </div>
        <div class="text-line">
          <div class="left-side-text"><Icon class='material-icons' style = 'color:rgba(50, 110, 198, 0.8)'>solar_power</Icon><p>Max panel count</p> </div>
          <div class="right-side-text"><p>{solarPotential.maxArrayPanelsCount}</p></div>
        </div>
        <div class="text-line">
          <div class="left-side-text"><Icon class='material-icons' style = 'color:rgba(50, 110, 198, 0.8)'>co2</Icon><p>C02 savings</p> </div>
          <div class="right-side-text"><p>{solarPotential.maxSunshineHoursPerYear.toFixed(2)}</p></div></div>
      </div>
    </div>
  </Cell>
  
  <Cell spanDevices={{ desktop: 4, tablet: 8, phone: 4}}>
      {#if map}
      <Paper color="secondary" style='height:100%'>
        <RoofList 
            elements={elements} 
            bind:solarPotential 
            bind:location 
            solarData={data} 
            {map} 
            minKwp={minKwp} 
            zipCode={zipCode} 
            lastCampaignId={lastCampaignId} 
            actionPerformed={actionPerformed} 
            img_data={imgData} 
        />
      </Paper>
          
      {/if}
  </Cell>
  <Cell spanDevices={{ desktop: 4, tablet: 8, phone: 4}}>
    {#if geometryLibrary != undefined}
    <PanelBuilldingInsights {map} {geometryLibrary} {solarPotential}/>
    {/if}
  </Cell>
  <Cell spanDevices={{ desktop: 4, tablet: 8, phone: 4}}>
    {#if geometryLibrary != undefined}
    <Button  variant="raised" style='width:100%' on:click = {downloadImage}>
      <Label style='color:#fff'>Download Image of map</Label>
    </Button>
    
    {/if}
  </Cell>
</LayoutGrid>
</div>

<style>
  .return-label > * {
    color:rgba(0, 0, 0, 1);
    align-items: center;

  }

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

