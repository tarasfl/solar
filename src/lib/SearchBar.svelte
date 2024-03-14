 <script lang='ts'>
    /* global google */

    import { onMount, } from 'svelte';
    import {redirect} from '@sveltejs/kit'
    import { createEventDispatcher } from 'svelte';
    
    // importing smui elements
    import Switch from '@smui/switch';
    import FormField from '@smui/form-field';
    import Segements from './Segements.svelte';
    import Button, { Label } from '@smui/button';
    import Slider from '@smui/slider';
    import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
    import { Icon } from '@smui/common';
    import '@material/web/textfield/filled-text-field';
    import type { MdFilledTextField } from '@material/web/textfield/filled-text-field';
    import '@material/web/icon/icon';
 
    import { searchBuildings} from '../routes/buildings'
    import {getBuildingInsight, loadingStatus, solarData, getBusinessInsights, filterValue} from '../routes/solar'
    import { goto } from '$app/navigation';

    const GOOGLE_API_KEY = 'AIzaSyBP2gDNENS_7umt0jaHn3RtgseKS_8lQ_A'
  
    export let location: google.maps.LatLng | undefined;
  
    export let placesLibrary: google.maps.PlacesLibrary;
    export let map: google.maps.Map;
    export let bounds: google.maps.LatLngBounds;
    export let initialValue = '';
    export let zoom = 15;
    export let value = 0;
    let checkedSolarSwitch = false;
    let checkedSearchAllBuildings = false;
    const dispatch = createEventDispatcher()
  
    let textFieldElement: MdFilledTextField;
    let service = new google.maps.places.PlacesService(map);

    // function for parsing Solar API data
    export async function parseData(){
      let data: any;
      if(checkedSolarSwitch && checkedSearchAllBuildings){
        filterValue.set(value)
        searchBuildings(bounds)
          .then(resp => {
            loadingStatus.set(true)
            getBuildingInsight(resp, GOOGLE_API_KEY, value).then((data) => {
              solarData.set(data)
            }).finally(
              () => {
                dispatch('status', { success: true });
                loadingStatus.set(false)
              }
            )
            
          })
          .catch(error => {
            console.error('Error searching buildings:', error);
          });
      }
      else if (checkedSolarSwitch && !checkedSearchAllBuildings){
        let request  = {bounds: bounds}
        loadingStatus.set(true);
        service.nearbySearch(request, callback);
      }
      else{
        console.log('solar api is not turned on')
      }
    }

    let fetchedData:any[] = []
    // function for callback nearby search
    function callback(results, status, pagination) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    fetchedData = fetchedData.concat(results)
    console.log(results[0].geometry.location.lat(),'   ', results[0].geometry.location.lng() )
    // Check if there are more results
    if (pagination.hasNextPage) {
      // Fetch next page using nextPageToken
      pagination.nextPage();
    }
  } else if (status == google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
    console.log('no more results')
  } else {
    console.log('no more results')
  }
  if (fetchedData.length >= 60 ){
      getBusinessInsights(fetchedData, GOOGLE_API_KEY, value).then((data) => {
              solarData.set(data)
            }).finally(
              () => {
                fetchedData = []
                dispatch('status', { success: true });
                loadingStatus.set(false)
                
              }
            )
  }
}
  
    onMount(async () => {
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

  <Accordion style='margin-top:5px;'>
    <Panel  variant="unelevated">
    <Header style = 'align-items: center; display:flex'>
      <Icon class='material-icons' style = 'color:rgba(50, 110, 198, 0.8)'>settings</Icon>
        Advanced Options
    </Header>
    <Content>
      <FormField style='width:100%'>
        <Switch icons={false} bind:checked={checkedSearchAllBuildings}/>
        <span slot="label">Search all buildings</span>
      </FormField>
  </Content>
  </Panel>
  </Accordion>
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
