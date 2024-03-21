import Database from 'better-sqlite3';
import { Campaign, LeadCampaign } from './types';


export function getCampaign(): Campaign[]{
    const db = new Database('./data/database.db')

    const sql = 'select * from Campaign'

    const stmnt = db.prepare(sql)
    const rows = stmnt.all()
    return rows as Campaign[]
}

export function getLeadCampaign(): LeadCampaign[]{
    const db = new Database('./data/database.db')

    const sql = 'select * from LeadCampaign'

    const stmnt = db.prepare(sql)
    const rows = stmnt.all()
    return rows as LeadCampaign[]
}


export function insertDataCampaign(data): number {
    const db = new Database('./data/database.db')

    try {
        const stmt = db.prepare(`
            INSERT INTO Campaign 
            (zipcode, status, leads, kwp, panel_count) 
            VALUES (?, ?, ?, ?, ?)
        `);

        const result = stmt.run(
            data.zipcode,
            data.status,
            data.leads,
            data.kwp,
            data.panel_count
        );
        
        const lastInsertId = result.lastInsertRowid;

        db.close();

        return lastInsertId;
    } catch (error) {
        console.error('Error inserting data into LeadCampaign table:', error);
        db.close();
        throw error;
    }
}

export function insertDataLeadCampaign(data) {
    const db = new Database('./data/database.db')

    try {
        const stmt = db.prepare(`
            INSERT INTO Campaign 
            (address, roof_area, kwp, data_layer, prospect_name, email, phone, campaign_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const result = stmt.run(
            data.address,
            data.roof_area,
            data.kwp,
            data.data_layer,
            data.prospect_name,
            data.email,
            data.phone,
            data.campaign_id
        );
        const lastInsertId = result.lastID;

        db.close();

        return lastInsertId;
    } catch (error) {
        console.error('Error inserting data into LeadCampaign table:', error);
        db.close();
        throw error;
    }
}