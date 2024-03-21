import {getCampaign} from '../../lib/server/db'

export const load = (() => {
    const campaign = getCampaign()

    return{
        campaign
    }
})

