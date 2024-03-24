import {getLeadCampaign} from '../../../lib/server/db'
import { error } from '@sveltejs/kit';

export function load() {
    let leads:any;
    try{
        leads = getLeadCampaign()
    }
    catch(e){
        throw error(500, 'Failed to load data from database');       
    }
        
    return{
        leads
    }
}