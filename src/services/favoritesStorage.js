import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "favorites";

export const saveFavorites = async (favorites) => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.log(error);
  }
};

export const getFavorites = async () => {
  try {
    const data = await AsyncStorage.getItem(FAVORITES_KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);

    return [];
  }
};
