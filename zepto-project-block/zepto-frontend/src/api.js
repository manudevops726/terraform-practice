import axios from 'axios';

const api = axios.create({
  baseURL: 'http://<YOUR_BACKEND_IP>:3001'  // 🔁 Replace with actual IP or domain
});

export default api;
