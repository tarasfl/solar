import Database from 'better-sqlite3';
import { Campaign, DetailedPackageView, LeadCampaign, OverviewList } from './types';

const db = new Database('./data/database.db');

export function getCampaign(): Campaign[] {
    const sql = 'SELECT * FROM Campaign';
    return db.prepare(sql).all() as Campaign[];
}

export function getLeadCampaign(): LeadCampaign[] {
    const sql = 'SELECT * FROM LeadCampaign';
    return db.prepare(sql).all() as LeadCampaign[];
}

export function getDetailedPackageViews(): DetailedPackageView[] {
    const sql = 'SELECT * FROM DetailedPackageView';
    return db.prepare(sql).all() as DetailedPackageView[];
}

export function getOverviewList(): OverviewList[] {
    const sql = 'SELECT * FROM OverviewList';
    return db.prepare(sql).all() as OverviewList[];
}

function insertData(table: string, data: any): number {
    const placeholders = Object.keys(data).map(() => '?').join(', ');
    const values = Object.values(data);

    try {
        const stmt = db.prepare(`INSERT INTO ${table} (${Object.keys(data).join(', ')}) VALUES (${placeholders})`);
        const result = stmt.run(values);
        return result.lastInsertRowid;
    } catch (error) {
        console.error(`Error inserting data into ${table} table:`, error);
        throw error;
    }
}

export function insertDataCampaign(data: Campaign): number {
    return insertData('Campaign', data);
}

export function insertDataLeadCampaign(data: LeadCampaign): number {
    return insertData('LeadCampaign', data);
}

export function insertDataDetailedPackageView(data: DetailedPackageView): number {
    return insertData('DetailedPackageView', data);
}

export function insertDataOverviewList(data: OverviewList): number {
    return insertData('OverviewList', data);
}
