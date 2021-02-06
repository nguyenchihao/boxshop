import axios from 'axios'
import queryString from 'query-string'
const axiosClient = axios.create({
  baseURL: '',
  paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async (config) => {
  const token = JSON.parse(localStorage.getItem('token'))
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
})

axiosClient.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  throw error;
});

export default axiosClient