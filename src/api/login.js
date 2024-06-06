import axios from 'axios';
import API_URL  from './configuration';

export const login = (data) => {
  console.log(data)
  return axios({
    method: 'POST',
    url: `${API_URL}/auth/login`,
    data:data,
  })
};