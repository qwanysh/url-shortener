import {v4} from 'uuid';
import axios from './axiosInstance';

export const createShortening = async ({authorId, slug, targetUrl}) => {
  const data = {'target_url': targetUrl};
  if (slug.length) {
    data.slug = slug;
  }
  if (authorId) {
    data['author_id'] = authorId;
  }
  const response = await axios.post('/shortenings/', data);
  return response.data;
};

export const getShortenings = async (page, authorId = null) => {
  let url = `/shortenings/?page=${page}`;
  if (authorId) {
    url = `${url}&author_id=${authorId}`;
  }
  const response = await axios.get(url);
  const data = response.data;
  return [data.results, !!data.previous, !!data.next];
};

export const generateUUID = () => {
  return v4();
};

export const getAuthorIdFromLocalStorage = () => {
  let authorId = localStorage.getItem('authorId');
  if (authorId == null) {
    authorId = generateUUID();
    localStorage.setItem('authorId', authorId);
  }
  return authorId;
};
