import axios from "axios";
import { getAuthToken, removeUserSession } from "../services/authStorage";

const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://10.0.2.2:8080/api";

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(async (config) => {
  const token = await getAuthToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      await removeUserSession();
    }

    const apiMessage =
      error?.response?.data?.message ||
      Object.values(error?.response?.data?.errors || {})?.[0] ||
      error?.message ||
      "No se pudo conectar con el servidor";

    return Promise.reject(new Error(apiMessage));
  },
);
