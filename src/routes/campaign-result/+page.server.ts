// import {getLeadCampaign} from '../../lib/server/db'
// import { insertDataCampaign, insertDataLeadCampaign } from '../../lib/server/db';

// //change
// const dataToInsert = {
//     zipcode: 9000,
//     status: 'ggg',
//     leads: 99,
//     kwp: 20000,
//     panel_count: 88
// };

// //(zipcode, status, leads, kwp, panel_count)

// function loadDataAndGetId(){
//     let insertResult;
//     try {
//         insertResult = insertDataCampaign(dataToInsert);
//         console.log('Data inserted successfully:', insertResult);
//     } catch (error) {
//         console.error('Failed to insert data:', error);
//     }
//     return insertResult.lastInsertRowid()
// }


// export const load = (() => {
//     const leadCampaign = getLeadCampaign()
//     const campaign_id = loadDataAndGetId()

//     return{
//         leadCampaign, 
//         campaign_id
//     }
// })

