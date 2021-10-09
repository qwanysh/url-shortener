import axios from './axiosInstance';

export const createShortening = async (shortening) => {
  const data = {'target_url': shortening.targetUrl};
  if (shortening.slug.length) {
    data.slug = shortening.slug;
  }
  const response = await axios.post('/shortenings/', data);
  return response.data;
};

export const getShortenings = async () => {
  const response = await axios.get('/shortenings/');
  return response.data.results;
};
