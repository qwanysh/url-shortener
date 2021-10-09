import axios from './axiosInstance';

export const createShortening = async (target_url) => {
  const response = await axios.post('/shortenings/', {target_url});
  return response.data;
};

export const getShortenings = async () => {
  const response = await axios.get('/shortenings/');
  return response.data.results;
};
