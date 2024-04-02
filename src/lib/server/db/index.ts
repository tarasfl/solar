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

export async function insertDataCampaign(data: Campaign): Promise<number> {
    const sql = `INSERT INTO "Campaign" (${Object.keys(data).join(', ')}) VALUES (${Object.keys(data).map((_, index) => '$' + (index + 1)).join(', ')}) RETURNING campaign_id`;
    const values = Object.values(data);
    const client = await pool.connect();
    try {
        const result = await client.query(sql, values);
        return result.rows[0].campaign_id;
    } finally {
        client.release();
    }
}

export async function insertDataLeadCampaign(data: LeadCampaign): Promise<number> {
    const sql = `INSERT INTO "LeadCampaign" (${Object.keys(data).join(', ')}) VALUES (${Object.keys(data).map((_, index) => '$' + (index + 1)).join(', ')}) RETURNING building_id`;
    const values = Object.values(data);
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
