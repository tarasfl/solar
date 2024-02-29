
<script lang="ts">

    //  importing components
    import SearchBar from '../../lib/SearchBar.svelte';

    // imorting smui elements 
    import LayoutGrid, { Cell, InnerGrid } from '@smui/layout-grid';
    import Paper, { Title, Subtitle, Content } from '@smui/paper';

    import { onMount } from 'svelte';
    import {Loader} from '@googlemaps/js-api-loader'; // importing google maps API
  
    let location: google.maps.LatLng | undefined;  // location
    let zipCode = "90571"; // zipCode of default Location
    let map: google.maps.Map; // elemenent for map initialising
    let mapElement: HTMLElement; // HTML element for visualisation
  
    let geometryLibrary: google.maps.GeometryLibrary;
    let mapsLibrary: google.maps.MapsLibrary;
    let placesLibrary: google.maps.PlacesLibrary;
  
    onMount(async () => {
      const loader = new Loader({
        apiKey: 'AIzaSyBP2gDNENS_7umt0jaHn3RtgseKS_8lQ_A',
        version: 'weekly', // You can specify the version of Google Maps API
      });
  
      // loading google maps libraries
      const libraries = {
        geometry: loader.importLibrary('geometry'),
        maps: loader.importLibrary('maps'),
        places: loader.importLibrary('places'),
      };
      geometryLibrary = await libraries.geometry;
      mapsLibrary = await libraries.maps;
      placesLibrary = await libraries.places;
  
       // Get the address information for the default location.
      const geocoder = new google.maps.Geocoder();
      const geocoderResponse = await geocoder.geocode({
        address: zipCode,
      });
  
      const geocoderResult = geocoderResponse.results[0];  // recieving results
      location = geocoderResult.geometry.location; // writing location
  
      // map = await loader.load();
  
      map = new mapsLibrary.Map(mapElement, {
        center: location,
        zoom: 15,
      });
    });
  
  </script>
    <h3 class='page-title'>Lead Search</h3>
  <div class='lead-search'>

  <LayoutGrid class='container'>
    <Cell span={8} style='height:100%'>
      
        <div bind:this={mapElement} class = 'map'></div>
    </Cell>
    <Cell spanDevices={{ desktop: 4, tablet: 8, phone: 4}}>
        {#if placesLibrary && map}
        <Paper color="secondary" style='height:100%'>
          <SearchBar bind:location {placesLibrary} {map} initialValue={zipCode} />
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
  
  