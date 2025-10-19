const sqlite3 = require('sqlite3').verbose()
const path = require('path')

let db: any = null

export async function getDatabase() {
  if (!db) {
    const dbPath = path.join(process.cwd(), 'data', 'database.sqlite')
    db = new sqlite3.Database(dbPath)
    
    // Promisify database methods
    db.runAsync = (sql: string, params: any[] = []) => {
      return new Promise((resolve, reject) => {
        db.run(sql, params, function(err: any) {
          if (err) reject(err)
          else resolve({ lastID: this.lastID, changes: this.changes })
        })
      })
    }
    
    db.getAsync = (sql: string, params: any[] = []) => {
      return new Promise((resolve, reject) => {
        db.get(sql, params, (err: any, row: any) => {
          if (err) reject(err)
          else resolve(row)
        })
      })
    }
    
    db.allAsync = (sql: string, params: any[] = []) => {
      return new Promise((resolve, reject) => {
        db.all(sql, params, (err: any, rows: any) => {
          if (err) reject(err)
          else resolve(rows)
        })
      })
    }

    // Create tables
    await db.runAsync(`
      CREATE TABLE IF NOT EXISTS feedbacks (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        college TEXT,
        company TEXT,
        semesterYear TEXT,
        rating INTEGER NOT NULL,
        textReview TEXT,
        mediaFolder TEXT,
        photoCount INTEGER DEFAULT 0,
        hasVideo BOOLEAN DEFAULT 0,
        approved BOOLEAN DEFAULT 0,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        approvedAt DATETIME
      )
    `)
    
    await db.runAsync(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        isActive BOOLEAN DEFAULT 1
      )
    `)
    
    await db.runAsync(`
      CREATE TABLE IF NOT EXISTS contacts (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    await db.runAsync(`
      CREATE TABLE IF NOT EXISTS project_inquiries (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        projectType TEXT NOT NULL,
        description TEXT,
        budget TEXT,
        timeline TEXT,
        replied BOOLEAN DEFAULT 0,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    await db.runAsync(`CREATE INDEX IF NOT EXISTS idx_feedbacks_approved_created ON feedbacks(approved, createdAt)`)
    await db.runAsync(`CREATE INDEX IF NOT EXISTS idx_feedbacks_email ON feedbacks(email)`)
    await db.runAsync(`CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)`)
    await db.runAsync(`CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(createdAt)`)
    await db.runAsync(`CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email)`)
    await db.runAsync(`CREATE INDEX IF NOT EXISTS idx_project_inquiries_created ON project_inquiries(createdAt)`)
    await db.runAsync(`CREATE INDEX IF NOT EXISTS idx_project_inquiries_replied ON project_inquiries(replied)`)
  }
  
  return {
    run: db.runAsync,
    get: db.getAsync,
    all: db.allAsync
  }
}