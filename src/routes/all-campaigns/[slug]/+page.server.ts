import {getLeadCampaign} from '../../../lib/server/db'
import { error } from '@sveltejs/kit';

export async function load() {
    try {
        const lead_campaign = await getLeadCampaign();
        return {
                leads: lead_campaign
        };
    } catch (e) {
        throw error(500, 'Failed to load data from database');
    }
}
