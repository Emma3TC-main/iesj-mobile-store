import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const requestNotificationPermission = async () => {
  const current = await Notifications.getPermissionsAsync();
  let finalStatus = current.status;

  if (current.status !== "granted") {
    const requested = await Notifications.requestPermissionsAsync();
    finalStatus = requested.status;
  }

  return finalStatus === "granted";
};

export const scheduleOrderNotification = async (orderId) => {
  const granted = await requestNotificationPermission();

  if (!granted) {
    return false;
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Compra confirmada",
      body: `Tu orden #${orderId} fue registrada y pagada correctamente.`,
      data: { orderId },
    },
    trigger: { seconds: 2 },
  });

  return true;
};
