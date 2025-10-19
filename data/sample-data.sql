-- Sample users for testing
INSERT INTO users (id, name, email, password) VALUES 
('user1', 'John Doe', 'john@example.com', 'password123'),
('user2', 'Jane Smith', 'jane@example.com', 'password123'),
('admin1', 'Admin User', 'admin@vignan.com', 'admin123');

-- Sample feedbacks for testing
INSERT INTO feedbacks (id, name, email, college, company, rating, textReview, mediaFolder, photoCount, hasVideo, approved) VALUES 
('fb1', 'Arjun Patel', 'arjun@vtu.edu', 'VTU University', 'TCS', 5, 'Excellent AI project guidance. The mentorship was outstanding!', 'fb1', 2, 1, 1),
('fb2', 'Priya Sharma', 'priya@vit.edu', 'VIT University', 'Infosys', 5, 'Amazing full-stack development course. Got placed immediately!', 'fb2', 1, 0, 1),
('fb3', 'Rahul Kumar', 'rahul@srm.edu', 'SRM University', 'Wipro', 4, 'Good Java microservices training. Very practical approach.', 'fb3', 0, 1, 0);