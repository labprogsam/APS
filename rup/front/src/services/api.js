import axios from 'axios';

const axiosApi = axios.create({
  baseURL: "http://localhost:3001/",
});

export const config = (params = {}) => {
  return {
    headers: {
      "Content-Type": "application/json"
    },
    params: {
      ...params
    }
  }
}

export default axiosApi;