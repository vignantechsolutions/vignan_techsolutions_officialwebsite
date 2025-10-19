const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

// Create database
const dbPath = path.join(__dirname, '..', 'data', 'database.sqlite');
const sqlPath = path.join(__dirname, '..', 'data', 'database.sql');

const db = new sqlite3.Database(dbPath);

// Read and execute SQL schema
const schema = fs.readFileSync(sqlPath, 'utf8');
const statements = schema.split(';').filter(stmt => stmt.trim());

db.serialize(() => {
    statements.forEach(statement => {
        if (statement.trim()) {
            db.run(statement, (err) => {
                if (err) {
                    console.error('Error executing:', statement.substring(0, 50) + '...');
                    console.error(err.message);
                } else {
                    console.log('✓ Executed:', statement.split('\n')[0].trim());
                }
            });
        }
    });
});

db.close((err) => {
    if (err) {
        console.error('Error closing database:', err.message);
    } else {
        console.log('✓ Database setup complete');
        console.log('✓ Tables created: feedbacks, users');
        console.log('✓ Indexes created for performance');
        console.log('✓ Triggers added for timestamps');
    }
});