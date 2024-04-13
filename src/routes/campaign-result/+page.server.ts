import {getCampaign, getLeadCampaign} from '../../lib/server/db'
import { error } from '@sveltejs/kit';
import { GOOGLEMAPSAPIKEY } from '$env/static/private';


export async function load() {
    let campaign:any;
    let leads: any;
    const googleMapsApiKey = GOOGLEMAPSAPIKEY
    try{
        campaign = await getCampaign()
        leads =  await getLeadCampaign()
    }
    catch(e){
        throw error(500, 'Failed to load data from database');       
    }
    return{
        campaign: campaign,
        leads: leads,
        googleMapsApiKey: googleMapsApiKey
    }
}

