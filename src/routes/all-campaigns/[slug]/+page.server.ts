import {getLeadCampaign} from '../../../lib/server/db'

export const load = (() => {
    const leads = getLeadCampaign()

    return{
        leads
    }
})