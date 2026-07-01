import { getData, removeData, saveData } from "./localStorage";

const AUTH_KEY = "auth_session";

export const saveUserSession = async (session) => {
  await saveData(AUTH_KEY, session);
};

export const getUserSession = async () => {
  return await getData(AUTH_KEY);
};

export const getAuthToken = async () => {
  const session = await getUserSession();
  return session?.token || null;
};

export const removeUserSession = async () => {
  await removeData(AUTH_KEY);
};
