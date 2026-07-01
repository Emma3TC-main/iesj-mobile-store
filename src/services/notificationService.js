import { Alert, Linking, Platform } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export const configureNotificationChannel = async () => {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("orders", {
      name: "Órdenes y compras",
      description: "Notificaciones de compras realizadas en iESJ Mobile Store",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#2563eb",
    });
  }
};

export const requestNotificationPermission = async () => {
  await configureNotificationChannel();

  const current = await Notifications.getPermissionsAsync();

  console.log("Permiso actual de notificaciones:", current);

  if (current.granted || current.status === "granted") {
    return true;
  }

  const requested = await Notifications.requestPermissionsAsync();

  console.log("Permiso solicitado de notificaciones:", requested);

  if (requested.granted || requested.status === "granted") {
    return true;
  }

  Alert.alert(
    "Notificaciones desactivadas",
    "La compra se realizó correctamente, pero las notificaciones están desactivadas. Actívalas desde los ajustes del sistema.",
    [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Abrir ajustes",
        onPress: () => Linking.openSettings(),
      },
    ],
  );

  return false;
};

export const scheduleOrderNotification = async (orderId) => {
  try {
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
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 2,
        channelId: "orders",
      },
    });

    return true;
  } catch (error) {
    console.warn("Error real al programar notificación:", error);
    return false;
  }
};
