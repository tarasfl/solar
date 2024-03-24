import {getCampaign} from '../../lib/server/db'
import { error } from '@sveltejs/kit';

export function load() {
    let campaign:any;
    try{
        campaign = getCampaign()
    }
    catch(e){
        throw error(500, 'Failed to load data from database');       
    }
        
    return{
        campaign: campaign
    }
}
