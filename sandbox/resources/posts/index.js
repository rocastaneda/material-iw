// Utils
import { Utils } from '../../../src';

export const getPosts = data => {
  return Utils.makeRequest('posts', data);
};
