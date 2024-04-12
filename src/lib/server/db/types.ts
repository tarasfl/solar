export interface LeadCampaign {
    building_id: number;
    address: string;
    roof_area: string;
    kwp: string;
    data_layer: string;
    prospect_name: string;
    email: string;
    phone: string;
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

export interface DetailedPackageView {
    address: string;
    business_name: string;
    owner_of_the_building: string;
    email: string;
    phone: string;
    id: number;
    campaign_id: number;
    image_id: number;
}

export interface OverviewList {
    search_area: string;
    min_kWp_capacity: number;
    number_of_roofs: number;
    id: number;
}