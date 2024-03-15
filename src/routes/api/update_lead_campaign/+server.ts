import { json } from '@sveltejs/kit';
import { insertDataLeadCampaign } from '../../../lib/server/db/index.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const requestData = await request.json();
    insertDataLeadCampaign(requestData)

    return json(requestData)
}
