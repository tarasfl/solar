
 <script lang='ts'>
    /* global google */
  
    import '@material/web/textfield/filled-text-field';
    import type { MdFilledTextField } from '@material/web/textfield/filled-text-field';
    import '@material/web/icon/icon';
    import { onMount } from 'svelte';
    
    // importing smui elements
    import Switch from '@smui/switch';
    import FormField from '@smui/form-field';
    import Segements from './Segements.svelte';
    import Button, { Label } from '@smui/button';
    import Slider from '@smui/slider';
 
    import { searchBuildings} from '../routes/buildings'
    import {getBuildingInsight} from '../routes/solar'
  
    export let location: google.maps.LatLng | undefined;
  
    export let placesLibrary: google.maps.PlacesLibrary;
    export let map: google.maps.Map;
    export let bounds: google.maps.LatLngBounds;
    export let initialValue = '';
    export let zoom = 15;
    export let value = 0;
    export let checkedSolarSwitch = false;
  
    let textFieldElement: MdFilledTextField;

    // function fro parsing Solar API data
    export function parseData(){
      searchBuildings(bounds)
  .then(buildings => {
    getBuildingInsight(buildings, 'AIzaSyBP2gDNENS_7umt0jaHn3RtgseKS_8lQ_A')
  })
  .catch(error => {
    console.error('Error searching buildings:', error);
  });
    }
  
    onMount(async () => {
      // https://lit.dev/docs/components/shadow-dom/
      await textFieldElement.updateComplete;
      const inputElement = textFieldElement.renderRoot.querySelector('input') as HTMLInputElement;
      const autocomplete = new placesLibrary.Autocomplete(inputElement, {
        fields: ['formatted_address', 'geometry', 'name'],
      });
      autocomplete.addListener('place_changed', async () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) {
          textFieldElement.value = '';
          return;
        }
        if (place.geometry.viewport) {
          bounds = place.geometry.viewport
          map.setCenter(place.geometry.location);
          map.setZoom(zoom);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(zoom);
        }
  
        location = place.geometry.location;
        if (place.name) {
          textFieldElement.value = place.name;
        } else if (place.formatted_address) {
          textFieldElement.value = place.formatted_address;
        }
      });

    });
  </script>

<div class='search-bar'>

  <div class='search-element'>
    <Segements />
  </div>

  <div class='search-element'>

    <md-filled-text-field bind:this={textFieldElement} label="Search an address" value={initialValue}>
      <md-icon slot="leadingicon">search</md-icon>
    </md-filled-text-field>
  </div>

  <div class='search-element'>
    <FormField style='width:100%'>
      <Switch icons={false} bind:checked={checkedSolarSwitch}/>
      <span slot="label">Enable Solar API</span>
    </FormField>

  {#if checkedSolarSwitch}
    <Slider
    bind:value
    min={0}
    max={1000}
    step={10}
    input$aria-label="Continuous slider"
  />
  <pre class="status">Min kW Potential: {value}</pre>
  {/if}
    <Button  variant="raised" style='width:100%' on:click = {() => parseData()}>
      <Label style='color:#fff'>Search</Label>
    </Button>
  </div>

  </div>

  <style>

    md-filled-text-field {
      width: 100%;
    }
  
    .search-element {
      margin-top: 10px;
      width: 100%;
    }
  </style>
