const axios = require('axios');
const USER_SERVICE_URL = process.env.USER_SERVICE_URL;

// Fetch user profile by ID from User Profile Service
exports.getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${USER_SERVICE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user profile');
  }
};
