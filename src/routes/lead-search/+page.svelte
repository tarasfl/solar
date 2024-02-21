
<script lang="ts">

  //  importing components
    import SearchBar from '../../lib/SearchBar.svelte';

    // imorting smui elements 
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import '@material/web/switch/switch'

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

  <LayoutGrid>
    <Cell span={9}>
      <div bind:this={mapElement} class = 'map'></div> 
    </Cell>
    <Cell span={3}>
        {#if placesLibrary && map}
            <SearchBar bind:location {placesLibrary} {map} initialValue={zipCode} />
        {/if}
    </Cell>
  </LayoutGrid>
  
  <style>

    .map {
      min-height: 420px;
      width: 100%;
    }


  </style>
  
  