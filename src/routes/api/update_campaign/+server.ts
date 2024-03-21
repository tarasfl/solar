import { json } from '@sveltejs/kit';
import { insertDataCampaign } from '../../../lib/server/db/index.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }){
    const requestData = await request.json();
    console.log(insertDataCampaign(requestData))

    return json(requestData)
}
