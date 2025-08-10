import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.242.110.46:3001'  // 🔁 Replace with actual IP or domain
});

export default api;
