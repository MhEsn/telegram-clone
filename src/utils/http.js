//mock only for axon test
import axios from 'axios';
import env from 'utils/env';

const http = {
  request: httpRequest,
  base: {
    api: env.servers.api.url,
  },
};

function httpRequest(base, url, data = {}, method = 'get') {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: localStorage.access_token
      ? `Bearer ${localStorage.access_token}`
      : null,
    AppId: 1,
  };

  return axios({
    url: url,
    method: method,
    baseURL: base,
    headers: headers,
    data: data,
    timeout: 20 * 1000,
  }).catch((error) => {
    if (error.response && error.response.status === 401) {
      return httpRequest(base, url, data, method);
    }

    return Promise.reject(error);
  });
}

export default http;
