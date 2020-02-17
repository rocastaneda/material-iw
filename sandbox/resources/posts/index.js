// Utils
import { makeRequest } from '../../../src';

export const getPosts = data => {
  return makeRequest('https://jsonplaceholder.typicode.com', 'posts', data);
};
