import AsyncStorage from "@react-native-async-storage/async-storage";

const ORDERS_KEY = "orders";

export const saveOrders = async (orders) => {
  try {
    await AsyncStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async () => {
  try {
    const data = await AsyncStorage.getItem(ORDERS_KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);

    return [];
  }
};
