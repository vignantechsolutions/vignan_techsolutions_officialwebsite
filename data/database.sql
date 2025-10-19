-- Feedbacks table with indexing and transaction support
CREATE TABLE feedbacks (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    college TEXT,
    company TEXT,
    semesterYear TEXT,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    textReview TEXT,
    mediaFolder TEXT,
    photoCount INTEGER DEFAULT 0,
    hasVideo BOOLEAN DEFAULT 0,
    approved BOOLEAN DEFAULT 0,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    approvedAt DATETIME,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Users table with unique constraints and indexing
CREATE TABLE users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    lastLogin DATETIME,
    isActive BOOLEAN DEFAULT 1
);

-- Indexes for feedbacks table
CREATE INDEX idx_feedbacks_approved_created ON feedbacks(approved, createdAt DESC);
CREATE INDEX idx_feedbacks_email ON feedbacks(email);
CREATE INDEX idx_feedbacks_rating ON feedbacks(rating);
CREATE INDEX idx_feedbacks_media ON feedbacks(mediaFolder) WHERE mediaFolder IS NOT NULL;

-- Indexes for users table  
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_active ON users(isActive);
CREATE INDEX idx_users_created ON users(createdAt);

-- Triggers for automatic timestamp updates
CREATE TRIGGER update_feedbacks_timestamp 
    AFTER UPDATE ON feedbacks
    BEGIN
        UPDATE feedbacks SET updatedAt = CURRENT_TIMESTAMP WHERE id = NEW.id;
    END;