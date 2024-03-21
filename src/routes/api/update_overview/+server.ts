import { json } from '@sveltejs/kit';
import { insertDataOverviewList } from '../../../lib/server/db/index.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }){
    const requestData = await request.json();
    console.log(insertDataOverviewList(requestData))

    return json(requestData)
}
