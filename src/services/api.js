import axios from 'axios';

const API_URL = 'https://your-api-url.com';

export const getResources = async () => {
  const response = await axios.get(`${API_URL}/resources`);
  return response.data;
};

// Additional API functions can go here
