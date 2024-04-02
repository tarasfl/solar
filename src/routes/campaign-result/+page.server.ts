import {getCampaign, getLeadCampaign} from '../../lib/server/db'
import { error } from '@sveltejs/kit';

export function load() {
    let campaign:any;
    let leads: any;
    try{
        campaign = getCampaign()
        leads = getLeadCampaign()
    }
    catch(e){
        throw error(500, 'Failed to load data from database');       
    }
        
    return{
        campaign: campaign,
        leads: leads
    }
}

