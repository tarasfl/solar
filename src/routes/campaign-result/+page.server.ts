import {getLeadCampaign} from '../../lib/server/db'
import { insertDataLeadCampaign } from '../../lib/server/db';

//change
const dataToInsert = {
    address: '123 Main St',
    roof_area: '100 sqft',
    kwp: '5',
    data_layer: 'Layer 1',
    prospect_name: 'John Doeee',
    email: 'john@example.com',
    phone: '123-456-7890',
    campaign_id: 1
};

// try {
//     const insertResult = insertDataLeadCampaign(dataToInsert);
//     console.log('Data inserted successfully:', insertResult);
// } catch (error) {
//     console.error('Failed to insert data:', error);
// }

export const load = (() => {
    const leadCampaign = getLeadCampaign()

    return{
        leadCampaign
    }
})

