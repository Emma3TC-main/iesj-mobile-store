import axios from "axios";
import { getAuthToken, removeUserSession } from "../services/authStorage";

const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://10.0.2.2:8080/api";

let unauthorizedHandler = null;

export const registerUnauthorizedHandler = (handler) => {
  unauthorizedHandler = handler;

  return () => {
    if (unauthorizedHandler === handler) {
      unauthorizedHandler = null;
    }
  };
};

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 20000,
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
      unauthorizedHandler?.();
    }

    const validationErrors = error?.response?.data?.errors || {};
    const firstValidationError = Object.values(validationErrors)[0];
    const apiMessage =
      error?.response?.data?.message ||
      firstValidationError ||
      error?.message ||
      "No se pudo conectar con el servidor";

    return Promise.reject(new Error(String(apiMessage)));
  },
);
