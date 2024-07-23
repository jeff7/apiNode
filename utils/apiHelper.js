const axios = require("axios");

exports.makeApiRequest = async (url, method, data) => {
  try {
    const response = await axios({ url, method, data });
    return response.data;
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
};
