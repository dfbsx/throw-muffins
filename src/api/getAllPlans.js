import axios from 'axios';
import API_URL  from './configuration';

export const getAllPlans = (auth) => {
  return axios({
    method: 'GET',
    url: `${API_URL}/workout/all`,
    headers: {
        'Authorization': `Bearer ${auth}`, 
        'Content-Type': 'application/json',
      },
  })
};