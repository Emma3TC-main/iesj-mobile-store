import { useMemo, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Location from "expo-location";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustomButton from "../../components/common/CustomButton";
import ScreenContainer from "../../components/layout/ScreenContainer";
import {
  requestNotificationPermission,
  scheduleOrderNotification,
} from "../../services/notificationService";
import colors from "../../constants/colors";
import theme from "../../constants/theme";

const STORE_REFERENCE = {
  name: "iESJ Store - Lima Centro",
  latitude: -12.0464,
  longitude: -77.0428,
};

const toRadians = (value) => (value * Math.PI) / 180;

const calculateDistanceKm = (from, to) => {
  const R = 6371;
  const dLat = toRadians(to.latitude - from.latitude);
  const dLon = toRadians(to.longitude - from.longitude);
  const lat1 = toRadians(from.latitude);
  const lat2 = toRadians(to.latitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

export default function NativeFeaturesScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannerEnabled, setScannerEnabled] = useState(false);
  const [locationInfo, setLocationInfo] = useState(null);

  const cameraGranted = permission?.granted;

  const distanceLabel = useMemo(() => {
    if (!locationInfo) return "Aún no calculado";
    return `${locationInfo.distanceKm.toFixed(2)} km de ${STORE_REFERENCE.name}`;
  }, [locationInfo]);

  const handleCamera = async () => {
    const result = cameraGranted ? permission : await requestPermission();

    if (!result?.granted) {
      Alert.alert(
        "Permiso requerido",
        "Activa la cámara para usar el escáner de productos.",
      );
      return;
    }

    setScannerEnabled((current) => !current);
  };

  const handleGetLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permiso requerido",
        "Activa la ubicación para calcular la tienda cercana.",
      );
      return;
    }

    const current = await Location.getCurrentPositionAsync({});
    const userCoords = {
      latitude: current.coords.latitude,
      longitude: current.coords.longitude,
    };

    setLocationInfo({
      ...userCoords,
      distanceKm: calculateDistanceKm(userCoords, STORE_REFERENCE),
    });
  };

  const handleNotification = async () => {
    const granted = await requestNotificationPermission();

    if (!granted) {
      Alert.alert(
        "Permiso requerido",
        "Activa las notificaciones para recibir alertas de pedido.",
      );
      return;
    }

    await scheduleOrderNotification("DEMO");
    Alert.alert(
      "Notificación programada",
      "Recibirás una alerta de prueba en segundos.",
    );
  };

  return (
    <ScreenContainer
      scrollable
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      <View style={styles.header}>
        <Text style={styles.title}>Funciones nativas</Text>
        <Text style={styles.subtitle}>
          Cámara, GPS y notificaciones integradas con Expo
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTitleRow}>
          <MaterialCommunityIcons
            name="barcode-scan"
            size={24}
            color={colors.primaryLight}
          />
          <Text style={styles.cardTitle}>Escáner de producto</Text>
        </View>
        <Text style={styles.cardText}>
          Usa la cámara para preparar un flujo de lectura de código de producto
          o QR promocional.
        </Text>
        <CustomButton
          title={scannerEnabled ? "Ocultar cámara" : "Activar cámara"}
          onPress={handleCamera}
        />
        {scannerEnabled && (
          <View style={styles.cameraBox}>
            <CameraView style={styles.camera} facing="back" />
          </View>
        )}
      </View>

      <View style={styles.card}>
        <View style={styles.cardTitleRow}>
          <MaterialCommunityIcons
            name="map-marker-radius"
            size={24}
            color={colors.primaryLight}
          />
          <Text style={styles.cardTitle}>Tienda cercana por GPS</Text>
        </View>
        <Text style={styles.cardText}>{distanceLabel}</Text>
        {locationInfo && (
          <Text style={styles.metaText}>
            Lat: {locationInfo.latitude.toFixed(5)} | Lon:{" "}
            {locationInfo.longitude.toFixed(5)}
          </Text>
        )}
        <CustomButton
          title="Calcular ubicación"
          onPress={handleGetLocation}
          variant="secondary"
        />
      </View>

      <View style={styles.card}>
        <View style={styles.cardTitleRow}>
          <MaterialCommunityIcons
            name="bell-ring-outline"
            size={24}
            color={colors.primaryLight}
          />
          <Text style={styles.cardTitle}>Notificación de pedido</Text>
        </View>
        <Text style={styles.cardText}>
          Programa una alerta local para confirmar compras o avisar cambios de
          estado.
        </Text>
        <CustomButton
          title="Enviar notificación demo"
          onPress={handleNotification}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface || "#0f172a",
  },
  glowBlue: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: colors.glowBlue,
    top: -40,
    right: -40,
  },
  glowPurple: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: colors.glowPurple,
    bottom: 80,
    left: -60,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    paddingTop: 24,
    paddingBottom: 16,
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "800",
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: 4,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 16,
    ...theme.shadow,
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  cardTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "800",
  },
  cardText: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
  },
  metaText: {
    color: colors.textMuted,
    marginTop: 8,
    fontSize: 12,
  },
  cameraBox: {
    marginTop: 14,
    overflow: "hidden",
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    height: 220,
  },
  camera: {
    flex: 1,
  },
});
