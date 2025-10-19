// Run this in browser console to add test data
const testFeedback = {
  id: "test-1",
  name: "Suresh",
  email: "suresh@test.com",
  college: "vtu klb",
  semesterYear: "4th sem Mca",
  company: "Success Project",
  rating: 5,
  textReview: "it was good",
  photos: [], // Will be empty for now
  video: null,
  timestamp: new Date(),
  approved: true
};

localStorage.setItem('approvedFeedbacks', JSON.stringify([testFeedback]));
console.log('Test data added! Refresh the page.');