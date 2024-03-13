import {getCampaign} from '../../lib/server/db'
import { insertDataCampaign } from '../../lib/server/db';

//change
const dataToInsert = {
    zipcode: '12345',
    status: 'Active',
    leads: 100,
    kwp: 10,
    panel_count: 50
};

// try {
//     const insertResult = insertDataCampaign(dataToInsert);
//     console.log('Data inserted successfully:', insertResult);
// } catch (error) {
//     console.error('Failed to insert data:', error);
// }

export const load = (() => {
    const campaign = getCampaign()

    return{
        campaign
    }
})

