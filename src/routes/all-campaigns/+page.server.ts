import { getCampaign } from '../../lib/server/db';
import { error } from '@sveltejs/kit';

export async function load() {
    try {
        const campaign = await getCampaign();
        return {
                campaign: campaign
        };
    } catch (e) {
        throw error(500, 'Failed to load data from database');
    }
}
