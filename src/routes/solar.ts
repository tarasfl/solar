
import { writable } from 'svelte/store';

// variable for showing fetching status 
export const loadingStatus = writable<boolean>(false);

// capacity per each solar panel
let PANEL_CAPACITY = 250
// function for sleep between each request
function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// export function for requesting Solar API data
export async function getBuildingInsight(
    elements: any,
    apiKey: string
) {
    let data: any;
    let buildingInsightsData: any[];
    buildingInsightsData = []

    loadingStatus.set(true);

    // handling request limit quota
    for (let i = 0; i < elements.length; i++) {
        await sleep(1000);
        try {
            // fetching data
            data = await makeRequestBuildingInsight(elements[i].latitude, elements[i].longitude, apiKey) 
            buildingInsightsData.push(data) 
        }catch (error) {
            console.error('Error writing data to list:', error);
        }

    };
    return buildingInsightsData;
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
          throw content;
        }
        console.log('buildingInsightsResponse', content);
        return content;
      },
    );
  }
