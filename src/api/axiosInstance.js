import axios from 'axios';
import cookie from 'js-cookie';
import { store } from '../store.js';
import { logout } from '../reducers/authReducer.js';

const baseURL = import.meta.env.VITE_API_URL;
const token = cookie.get('token');
const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      if (window.location.pathname === '/') {
        throw error;
      }
      store.dispatch(logout());
      window.location.href = '/';
      throw error;
    } else if (error.response && error.response.status === 403) {
      window.location.href = '/';
      store.dispatch(logout());
      throw error;
    } else if (error.request.status === 0) {
      window.location.href = '/';
      store.dispatch(logout());
      throw error;
    }
    store.dispatch(logout());
    throw error;
  }
);

export default axiosInstance;
