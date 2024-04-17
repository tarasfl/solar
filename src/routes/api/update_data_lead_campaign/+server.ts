import { json } from '@sveltejs/kit';
import { updateMailData, updatePhoneData } from '../../../lib/server/db/index.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const requestData = await request.json();
    
    const { building_id, new_email, new_phone } = requestData;
    new_email && updateMailData(building_id, new_email)
    new_phone && updatePhoneData(building_id, new_phone)

    return json(requestData)
}
