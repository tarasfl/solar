<Accordion color="secondary" style="margin-top:5px">
  <Panel variant="unelevated">
    <Header style="align-items: center; display:flex">
      <Icon class="material-icons" style="color:rgba(50, 110, 198, 0.8)"
        >solar_power</Icon
      >
      Panel Data:
      <span slot="description"
        >Energy {panelConfig.panelsCount /
          (solarPotential.panelCapacityWatts / 1000)}kW</span
      >
    </Header>
    <Content>
      <div class="heading">
        <div style="display: flex; align-items: center;">
          <Icon class="material-icons" style="color:rgba(50, 110, 198, 0.8)"
            >solar_power</Icon
          >
          <p style="margin-left: 5px;">Panel count: </p>
        </div>
        <p>{panelConfig.panelsCount}</p>
      </div>
      <Slider
        style="width: 100%, margin:0"
        bind:value="{configId}"
        min="{0}"
        max="{solarPotential.solarPanelConfigs.length - 1}"
        input$aria-label="Continuous slider"
      />
    </Content>
  </Panel>
</Accordion>

<script lang="ts">
  import { type SolarPanelConfig, type SolarPotential } from '../routes/classes'

  import Slider from '@smui/slider'
  import { Icon } from '@smui/common'
  // import Paper, { Content} from '@smui/paper';
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion'

  import { normalize } from '../routes/visualize'

  export let geometryLibrary: google.maps.GeometryLibrary
  export let solarPotential: SolarPotential
  export let map: google.maps.Map
  let configId: number | undefined = solarPotential.solarPanelConfigs.length - 1
  $: if (configId > solarPotential.solarPanelConfigs.length - 1) {
    configId = solarPotential.solarPanelConfigs.length - 1
  }

  let panelConfig: SolarPanelConfig | undefined
  $: if (solarPotential && configId !== undefined) {
    panelConfig = solarPotential.solarPanelConfigs[configId]
  }
  export let solarPanels: google.maps.Polygon[] = []
  $: solarPanels.map((panel, i) =>
    panel.setMap(panelConfig && i < panelConfig.panelsCount ? map : null),
  )

  function showPanels(
    solarPotential: SolarPotential,
    solarPanels: google.maps.Polygon[],
  ) {
    solarPanels.forEach((panel) => {
      panel.setMap(null)
    })

    const palette = ['E8EAF6', '1A237E']

    const minEnergy = solarPotential.solarPanels.slice(-1)[0].yearlyEnergyDcKwh
    const maxEnergy = solarPotential.solarPanels[0].yearlyEnergyDcKwh
    solarPanels = solarPotential.solarPanels.map((panel) => {
      const [w, h] = [
        solarPotential.panelWidthMeters / 2,
        solarPotential.panelHeightMeters / 2,
      ]
      const points = [
        { x: +w, y: +h }, // top right
        { x: +w, y: -h }, // bottom right
        { x: -w, y: -h }, // bottom left
        { x: -w, y: +h }, // top left
        { x: +w, y: +h }, //  top right
      ]
      const orientation = panel.orientation == 'PORTRAIT' ? 90 : 0
      const azimuth =
        solarPotential.roofSegmentStats[panel.segmentIndex].azimuthDegrees
      const colorIndex = Math.round(
        normalize(panel.yearlyEnergyDcKwh, maxEnergy, minEnergy) * 255,
      )
      return new google.maps.Polygon({
        paths: points.map(({ x, y }) =>
          geometryLibrary.spherical.computeOffset(
            { lat: panel.center.latitude, lng: panel.center.longitude },
            Math.sqrt(x * x + y * y),
            Math.atan2(y, x) * (180 / Math.PI) + orientation + azimuth,
          ),
        ),
        strokeColor: '#B0BEC5',
        strokeOpacity: 0.9,
        strokeWeight: 1,
        fillColor: palette[colorIndex],
        fillOpacity: 0.9,
      })
    })

    return solarPanels
  }
  $: solarPanels = showPanels(solarPotential, solarPanels)
</script>

<style>
  .heading {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  div {
    height: 50px;
  }
</style>
