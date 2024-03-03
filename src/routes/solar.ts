
// function for sleep between each request
function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// export function for requesting Solar API data
export async function getBuildingInsight(
    elements: any,
    apiKey: string
) {
    // handling request limit quota
    for (let i = 0; i < elements.length; i++) {
        await sleep(1000);
        makeRequestBuildingInsight(elements[i].latitude, elements[i].longitude, apiKey)  
    };
    
}

// fetching and parsing data from Solar API
async function makeRequestBuildingInsight(
    lat: number,
    lon: number,
    apiKey: string
  ){
   let fetchURL = `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lon}&requiredQuality=HIGH&key=${apiKey}`
    return fetch(fetchURL).then(
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
