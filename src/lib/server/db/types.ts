export interface LeadCampaign {
    building_id: number;
    address: string;
    roof_area: string;
    kwp: string;
    data_layer: string;
    prospect_name: string;
    email: string;
    phone_number: string;
    campaign_id: number;
    img_data: string;
    panel_count: number;
}

export interface Campaign {
    campaign_id: number;
    zipcode: string;
    status: string;
    leads: number;
    kwp: number;
    panel_count: number;
}