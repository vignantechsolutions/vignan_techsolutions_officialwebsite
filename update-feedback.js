// Run this in browser console to update existing feedback data
const updatedFeedback = {
  id: "1729234567890",
  name: "Rahul Kumar",
  email: "tsuresh8055@gmail.com",
  college: "VIT University",
  semesterYear: "Final Year",
  company: "Software Engineer",
  rating: 5,
  textReview: "Professional-grade enterprise project. The scalable architecture knowledge is invaluable in my career.",
  photos: [],
  video: null,
  timestamp: new Date("2024-10-18"),
  approved: true
};

// Update localStorage
localStorage.setItem('approvedFeedbacks', JSON.stringify([updatedFeedback]));
console.log('Feedback updated successfully!');