import axios from 'axios';
const setupAxios = () => {
  axios.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${process.env.TOKEN}`;
        return config;
    },
    (err) => Promise.reject(err)
  );
};

export default setupAxios;