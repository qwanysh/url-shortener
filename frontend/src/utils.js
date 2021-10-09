import axios from './axiosInstance';

export const createShortening = async (target_url) => {
  const response = await axios.post('/shortenings/', {target_url});
  return response.data;
};
