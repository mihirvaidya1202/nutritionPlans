const axios = require('axios');

exports.get = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('HTTP GET Error:', error);
    throw error;
  }
};
