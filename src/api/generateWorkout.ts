import axios from 'axios';
import API_URL  from './configuration';

export const generateWorkout = (auth:string, aim:string) => {
  console.log("auth",auth)
  console.log("aim",aim)
  return axios({
    method: 'POST',
    url: `${API_URL}/workout/generate`,
    data: {bodypart:aim},
    headers: {
        'Authorization': `Bearer ${auth}`, 
        'Content-Type': 'application/json',
      },
  })
};