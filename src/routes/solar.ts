
import { writable } from 'svelte/store';

// variable for showing fetching status 
export const loadingStatus = writable<boolean>(false);
export const solarData = writable()
export const filterValue = writable()

// capacity per each solar panel
// function for sleep between each request
function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// export function for requesting Solar API data
export async function getBuildingInsight(
    elementsArray: any[],
    apiKey: string
) {
    let data: any;
    let elements = elementsArray[0]
    let buildingInsightsData: any[] = [];
    let buildingData: any[] = [];

    loadingStatus.set(true);

    // handling request limit quota
    for (let i = 0; i < elements.length; i++) {
        await sleep(1000);
        try {
            // fetching data
            data = await makeRequestBuildingInsight(elements[i].latitude, elements[i].longitude, apiKey) 
            if(data){
              buildingInsightsData.push(data) 
              buildingData.push(elementsArray[1][i])
            }
            
        }catch (error) {
            console.error('Error writing data to list:', error);
        }

    };
    return [buildingData, buildingInsightsData]
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
