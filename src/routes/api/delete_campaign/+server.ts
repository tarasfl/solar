import { json } from '@sveltejs/kit';
import { deleteCampaign } from '../../../lib/server/db/index.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }){
    const requestData = await request.json();
    console.log(deleteCampaign(requestData))

    return json(requestData)
}
