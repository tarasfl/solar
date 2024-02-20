
<script>
    import SearchBar from '$lib/SearchBar.svelte';
  
    import '@material/web/switch/switch'
    import { onMount } from 'svelte';
    import {Loader} from '@googlemaps/js-api-loader'; // importing google maps API
  
    let location;  // location
    let zipCode = "90571"; 
    let map; // elemenent for map initialising
    let mapElement; // HTML element for visualisation
  
    let geometryLibrary;
    let mapsLibrary;
    let placesLibrary;
  
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
  
      console.log(location)
  
      map = await loader.load();
  
      map = new google.maps.Map(mapElement, {
        center: location,
        zoom: 15,
      });
    });
  
  </script>
  
  <div class = 'container'>
  <div bind:this={mapElement} class = 'map'></div>

  <div class='search-bar'>
    <!-- <Segements /> -->
  <p>Add zipCode below</p>
  {#if placesLibrary && map}
          <SearchBar bind:location {placesLibrary} {map} initialValue={zipCode} />
  {/if}
  <br />
  <div class = 'solar-api-switch'>
  <label for = 'switch' >
    <md-switch selected></md-switch>
    enable Solar API
  </label>
</div>
</div>
</div>
  
   
  
  
  
  <style>
    .solar-api-switch {
      margin-top: 10px;
      width: 160px;
    }
    .search-bar {
      margin: 5px;
      width: 220px;
    }
    .map {
      height: auto;
      width: 100%;
    }

    .search-bar{
      padding-top: 10px;
    }
    .container {
      height: 520px;
      display: flex;
      justify-content: space-around;
    }
  </style>
  
  