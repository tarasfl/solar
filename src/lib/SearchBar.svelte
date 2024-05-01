<div class="search-bar">
  <div class="search-element">
    <Segements bind:selected />
  </div>

  <div class="search-element">
    <md-filled-text-field
      bind:this="{textFieldElement}"
      label="Search an address"
      value="{initialValue}"
    >
      <md-icon slot="leadingicon">search</md-icon>
    </md-filled-text-field>
  </div>

  <div class="search-element">
    <FormField style="width:100%">
      <Switch icons="{false}" bind:checked="{checkedSolarSwitch}" />
      <span slot="label">Enable Solar API</span>
    </FormField>

    {#if checkedSolarSwitch}
      <Slider
        bind:value
        min="{0}"
        max="{1000}"
        step="{10}"
        input$aria-label="Continuous slider"
      />
      <pre class="status">Min kW Potential: {value}</pre>
    {/if}
    <Button
      variant="raised"
      style="width:100%; background-color: #007bff;"
      on:click="{() => parseData()}"
    >
      <Label style="color:#fff">Search</Label>
    </Button>
  </div>
</div>

<script lang="ts">
  /* global google */

  import { onMount } from 'svelte'
  import { redirect } from '@sveltejs/kit'
  import { createEventDispatcher } from 'svelte'
  // importing smui elements
  import Switch from '@smui/switch'
  import FormField from '@smui/form-field'
  import Segements from './Segements.svelte'
  import Button, { Label } from '@smui/button'
  import Slider from '@smui/slider'
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion'
  import { Icon } from '@smui/common'
  import '@material/web/textfield/filled-text-field'
  import type { MdFilledTextField } from '@material/web/textfield/filled-text-field'
  import '@material/web/icon/icon'

  import { writable } from 'svelte/store'

  import { searchBuildings } from '../routes/buildings'
  import {
    loadingStatus,
    solarData,
    getBusinessInsights,
    filterValue,
    locationName,
  } from '../routes/solar'

  export let selected: string

  export let googleApiKey: string

  export let location: google.maps.LatLng | undefined

  export let placesLibrary: google.maps.PlacesLibrary
  export let map: google.maps.Map
  export let bounds: google.maps.LatLngBounds
  export let initialValue = ''
  export let zoom = 15
  export let value = 0
  let checkedSolarSwitch = false
  let checkedSearchAllBuildings = false
  const dispatch = createEventDispatcher()

  let textFieldElement: MdFilledTextField
  let service = new google.maps.places.PlacesService(map)

  // function for parsing Solar API data
  export async function parseData() {
    if (checkedSolarSwitch && !checkedSearchAllBuildings) {
      filterValue.set(value)
      let request = { bounds: bounds }
      loadingStatus.set(true)
      service.nearbySearch(request, callback)
    } else {
      console.log('solar api is not turned on')
    }
  }

  let fetchedData: any[] = []
  // function for callback nearby search
  function callback(results, status, pagination) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      fetchedData = fetchedData.concat(results)
      if (selected == 'Individual') {
        //fetchedData = fetchedData[0]
        getBusinessInsights(fetchedData, googleApiKey, value)
          .then((data) => {
            console.log(data)
            data = [[data[0][0]], [data[1][0]]]
            console.log(data)
            solarData.set(data)
          })
          .finally(() => {
            fetchedData = []
            dispatch('status', { success: true })
            loadingStatus.set(false)
          })
      } else {
        // Check if there are more results
        if (pagination.hasNextPage) {
          pagination.nextPage()
        } else {
          getBusinessInsights(fetchedData, googleApiKey, value)
            .then((data) => {
              solarData.set(data)
            })
            .finally(() => {
              fetchedData = []
              dispatch('status', { success: true })
              loadingStatus.set(false)
            })
        }
      }
    }
  }

  onMount(async () => {
    await textFieldElement.updateComplete
    const inputElement = textFieldElement.renderRoot.querySelector(
      'input',
    ) as HTMLInputElement
    const autocomplete = new placesLibrary.Autocomplete(inputElement, {
      fields: ['formatted_address', 'geometry', 'name'],
    })
    autocomplete.addListener('place_changed', async () => {
      const place = autocomplete.getPlace()
      if (!place.geometry || !place.geometry.location) {
        textFieldElement.value = ''
        return
      }
      if (place.geometry.viewport) {
        bounds = place.geometry.viewport
        map.setCenter(place.geometry.location)
        map.setZoom(zoom)
      } else {
        map.setCenter(place.geometry.location)
        map.setZoom(zoom)
      }
      locationName.set(place.name)
      location = place.geometry.location
      if (place.formatted_address) {
        textFieldElement.value = place.formatted_address
      }
    })
  })
</script>

<style>
  md-filled-text-field {
    border: none;
    width: 100%;
    padding: 12px 0px;
  }

  .search-element {
    margin-top: 10px;
    width: 100%;
  }
</style>
