import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';
import fs from 'fs';

const DB_PATH = process.env.DB_PATH || path.join(__dirname, '../../database/skillswap.db');

export let db: Database<sqlite3.Database, sqlite3.Statement>;

export async function initializeDatabase() {
  // Ensure database directory exists
  const dbDir = path.dirname(DB_PATH);
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }

  db = await open({
    filename: DB_PATH,
    driver: sqlite3.Database
  });

  // Users table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      location TEXT,
      profile_photo TEXT,
      availability TEXT,
      is_public INTEGER DEFAULT 1,
      role TEXT DEFAULT 'user',
      is_banned INTEGER DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Skills table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS skills (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      category TEXT,
      is_offered INTEGER DEFAULT 1,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id)
    );
  `);

  // Swaps table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS swaps (
      id TEXT PRIMARY KEY,
      requester_id TEXT NOT NULL,
      provider_id TEXT NOT NULL,
      skill_id TEXT NOT NULL,
      status TEXT DEFAULT 'pending',
      message TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(requester_id) REFERENCES users(id),
      FOREIGN KEY(provider_id) REFERENCES users(id),
      FOREIGN KEY(skill_id) REFERENCES skills(id)
    );
  `);

  // Ratings table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS ratings (
      id TEXT PRIMARY KEY,
      swap_id TEXT NOT NULL,
      rater_id TEXT NOT NULL,
      rated_id TEXT NOT NULL,
      rating INTEGER NOT NULL,
      comment TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(swap_id) REFERENCES swaps(id),
      FOREIGN KEY(rater_id) REFERENCES users(id),
      FOREIGN KEY(rated_id) REFERENCES users(id)
    );
  `);

  // Announcements table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS announcements (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      message TEXT NOT NULL,
      type TEXT DEFAULT 'info',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);
} 