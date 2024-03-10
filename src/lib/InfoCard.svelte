<script lang="ts">
    import {
    type SolarPanelConfig,
    type SolarPotential
  } from '../routes/classes';
    export let solarPanels: google.maps.Polygon[] = [];

    import {normalize} from '../routes/visualize'
    import SearchBar from './SearchBar.svelte';

    export let geometryLibrary: google.maps.GeometryLibrary;
    export let location: {lat: number, lng:number} | undefined | google.maps.LatLng;
    export let solarPotential: SolarPotential;
    export let map: google.maps.Map;


    console.log(solarPanels)
    
    function showPanels(solarPotential: SolarPotential, solarPanels: google.maps.Polygon[]){
        console.log(solarPanels)
        solarPanels.forEach((panel) => {
  panel.setMap(map);
});
        
    const palette = ['E8EAF6', '1A237E'];

    const minEnergy = solarPotential.solarPanels.slice(-1)[0].yearlyEnergyDcKwh;
    const maxEnergy = solarPotential.solarPanels[0].yearlyEnergyDcKwh;
    solarPanels = solarPotential.solarPanels.map((panel) => {
      const [w, h] = [solarPotential.panelWidthMeters / 2, solarPotential.panelHeightMeters / 2];
      const points = [
        { x: +w, y: +h }, // top right
        { x: +w, y: -h }, // bottom right
        { x: -w, y: -h }, // bottom left
        { x: -w, y: +h }, // top left
        { x: +w, y: +h }, //  top right
      ];
      const orientation = panel.orientation == 'PORTRAIT' ? 90 : 0;
      const azimuth = solarPotential.roofSegmentStats[panel.segmentIndex].azimuthDegrees;
      const colorIndex = Math.round(normalize(panel.yearlyEnergyDcKwh, maxEnergy, minEnergy) * 255);
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
      });
    });

    solarPanels.forEach((panel) => {
  panel.setMap(map);
});
return solarPanels    
}
    $: solarPanels = showPanels(solarPotential, solarPanels)

   

    console.log(solarPanels)
</script>