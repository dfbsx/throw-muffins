import axios from 'axios';
import API_URL  from './configuration';

export const getAllPlans = (auth:string, aim:string) => {
  return axios({
    method: 'POST',
    url: `${API_URL}/workout/generate`,
    data: aim,
    headers: {
        'Authorization': `Bearer ${auth}`, 
        'Content-Type': 'application/json',
      },
  })
};