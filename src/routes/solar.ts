export async function findClosestBuilding(
    location: google.maps.LatLng,
    apiKey: string,
  ){
   console.log(location.lng())
   let f_1 = `https://solar.googleapis.com/v1/dataLayers:get?location.latitude=${location.lat()}&location.longitude=${location.lng()}&radiusMeters=100&view=FULL_LAYERS&pixelSizeMeters=0.5&key=${apiKey}`
   let f_2 = `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${location.lat()}&location.longitude=${location.lng()}&requiredQuality=HIGH&key=${apiKey}`
    return fetch(f_2).then(
      async (response) => {
        const content = await response.json();
        if (response.status != 200) {
          console.error('findClosestBuilding\n', content);
          throw content;
        }
        console.log('buildingInsightsResponse', content);
        return content;
      },
    );
  }
