import { getData, removeData, saveData } from "./localStorage";

const AUTH_KEY = "auth_user";

export const saveUserSession = async (user) => {
  await saveData(AUTH_KEY, user);
};

export const getUserSession = async () => {
  return await getData(AUTH_KEY);
};

export const removeUserSession = async () => {
  await removeData(AUTH_KEY);
};
