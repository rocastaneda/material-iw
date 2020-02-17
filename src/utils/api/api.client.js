// Dependencies
import axios from 'axios';

// Api Error
import ApiError from './api.error';

const throwApiError = data => {
  console.error('API: Error Ocurred', data); // eslint-disable-line no-console
  throw new ApiError(data);
};

const ClientHttpRequest = async config => {
  const api = axios.create({
    baseURL: config.baseURL,
    withCredentials: true,
    responseType: config.responseType || 'json',
    timeout: 45000,
  });

  api.interceptors.response.use(
    axiosConfig => axiosConfig,
    error => error.response
  );

  let urlWithSlash = config.service;

  if (urlWithSlash[0] !== '/') {
    urlWithSlash = `/${urlWithSlash}`;
  }

  const options = {
    url: urlWithSlash,
    method: 'POST',
  };

  if (config.data) {
    options.data = config.data;
  }

  const response = await api(options);

  if (response.status >= 200 && response.status < 300) {
    return response.data || {};
  }

  throwApiError(response.data);
  return null;
};

export default ClientHttpRequest;
