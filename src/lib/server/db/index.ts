import pg from 'pg';
const { Pool } = pg;
import { Campaign, DetailedPackageView, LeadCampaign, OverviewList } from './types';

const pool = new Pool({
    user: 'postgres',
    password: "eU'2;s3dl1",
    host: '202.61.254.173',
    database: 'solar_db',
    port: 5432,
});

export async function getCampaign(): Promise<Campaign[]> {
    const sql = 'SELECT * FROM campaign';
    const client = await pool.connect();
    try {
        const result = await client.query(sql);
        return result.rows as Campaign[];
    } finally {
        client.release();
    }
}

export async function getLeadCampaign(): Promise<LeadCampaign[]> {
    const sql = 'SELECT * FROM lead_campaign';
    const client = await pool.connect();
    try {
        const result = await client.query(sql);
        return result.rows as LeadCampaign[];
    } finally {
        client.release();
    }
}

export async function insertDataCampaign(data: Campaign) {
    const sql = `INSERT INTO campaign (zipcode, status, leads, kwp, panel_count) 
                 VALUES ($1, $2, $3, $4, $5) RETURNING campaign_id`;
    const values = [
        data.zipcode,
        data.status,
        data.leads,
        data.kwp,
        data.panel_count
    ];

    const client = await pool.connect();
    try {
        const result = await client.query(sql, values);
        return result.rows[0].campaign_id;
    } finally {
        client.release();
    }
}


export async function insertDataLeadCampaign(data: LeadCampaign): Promise<number> {
    const sql = `INSERT INTO lead_campaign (building_id, address, roof_area, kwp, data_layer, 
                 prospect_name, email, phone, building, campaign_id, img_data, panel_count) 
                 VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING building_id`;
    const values = [
        data.address,
        data.roof_area,
        data.kwp,
        data.data_layer,
        data.prospect_name,
        data.email,
        data.phone,
        data.building,
        data.campaign_id,
        data.img_data,
        data.panel_count
    ];
    const client = await pool.connect();
    try {
        const result = await client.query(sql, values);
        return result.rows[0].building_id;
    } finally {
        client.release();
    }
}

export async function deleteCampaign(campaignId: number) {
    const client = await pool.connect();
    try {
        await client.query('DELETE FROM "LeadCampaign" WHERE campaign_id = $1', [campaignId]);
        await client.query('DELETE FROM "Campaign" WHERE campaign_id = $1', [campaignId]);
    } finally {
        client.release();
    }
}
