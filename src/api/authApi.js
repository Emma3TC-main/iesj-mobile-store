import { apiClient } from "./apiClient";
import { mapUserFromApi } from "./mappers";

export const loginRequest = async (email, password) => {
  const { data } = await apiClient.post("/auth/login", { email, password });

  return {
    token: data.token,
    user: mapUserFromApi(data.usuario),
  };
};

export const registerRequest = async (name, email, password) => {
  const { data } = await apiClient.post("/auth/register", {
    nombre: name,
    email,
    password,
  });

  return mapUserFromApi(data);
};

export const meRequest = async () => {
  const { data } = await apiClient.get("/auth/me");
  return mapUserFromApi(data);
};
