import axios from "axios";
import { logout, refreshToken } from "./AuthService";

const API_BASE_URL = "https://localhost:7159/api"; // Change if deployed

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach access token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token refresh on 401 errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;
      try {
        await refreshToken();
        return api(error.config); // Retry the original request
      } catch {
        logout(); // If refresh fails, log out the user
      }
    }
    return Promise.reject(error);
  }
);

export default api;
