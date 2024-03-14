import sqlite3 from "sqlite3";

// '../routes/database.db'
export function writeDataToDB(){
    const db = new sqlite3.Database('./database.db');
    db.run("CREATE TABLE IF NOT EXISTS Campaign (campaign_id INTEGER PRIMARY KEY,zipcode TEXT,status TEXT,leads NUMERIC,kwp NUMERIC,panel_count NUMERIC);");
    db.run("CREATE TABLE LeadCampaign (building_id INTEGER PRIMARY KEY, address TEXT, roof_area TEXT, kwp TEXT, data_layer TEXT, prospect_name TEXT, email TEXT, phone TEXT, building TEX);");
    db.run("ALTER TABLE LeadCampaign ADD COLUMN IF NOT EXIST campaign_id INTEGER REFERENCES Campaign(campaign_id);")
    db.close()
  }