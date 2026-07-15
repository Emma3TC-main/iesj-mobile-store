import { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustomButton from "../../components/common/CustomButton";
import InputField from "../../components/common/InputField";
import ScreenContainer from "../../components/layout/ScreenContainer";
import colors from "../../constants/colors";
import theme from "../../constants/theme";
import { useAdminProducts } from "../../hooks/useAdminProducts";

const initialForm = (product) => ({
  id: product?.id,
  name: product?.name || "",
  description: product?.description || "",
  price: product?.price != null ? String(product.price) : "",
  stock: product?.stock != null ? String(product.stock) : "",
  image: product?.image || "",
  barcode: product?.barcode || "",
  active: product?.active ?? true,
});

export default function AdminProductFormScreen({ route, navigation }) {
  const originalProduct = route.params?.product;
  const [form, setForm] = useState(() => initialForm(originalProduct));
  const [scannerVisible, setScannerVisible] = useState(false);
  const [scannerLocked, setScannerLocked] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const { saveProduct, saving } = useAdminProducts();

  const setField = (field, value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const validate = () => {
    if (!form.name.trim()) return "El nombre es obligatorio.";
    if (!Number.isFinite(Number(form.price)) || Number(form.price) <= 0)
      return "El precio debe ser mayor que cero.";
    if (!Number.isInteger(Number(form.stock)) || Number(form.stock) < 0)
      return "El stock debe ser un número entero no negativo.";
    return "";
  };

  const handleSave = async () => {
    const validationMessage = validate();
    if (validationMessage) {
      Alert.alert("Revisa el formulario", validationMessage);
      return;
    }

    try {
      await saveProduct(form);
      Alert.alert(
        "Producto guardado",
        originalProduct
          ? "Los cambios fueron actualizados."
          : "El producto fue creado.",
        [{ text: "Aceptar", onPress: () => navigation.goBack() }],
      );
    } catch (error) {
      Alert.alert("No se pudo guardar", error.message);
    }
  };

  const openScanner = async () => {
    if (!permission?.granted) {
      const requested = await requestPermission();
      if (!requested.granted) {
        Alert.alert(
          "Permiso requerido",
          "Activa la cámara para escanear el código.",
        );
        return;
      }
    }
    setScannerLocked(false);
    setScannerVisible(true);
  };

  return (
    <ScreenContainer style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>
          {originalProduct ? "Editar producto" : "Nuevo producto"}
        </Text>
        <Text style={styles.subtitle}>
          Los cambios se guardan en PostgreSQL mediante los endpoints protegidos
          de administración.
        </Text>

        <InputField
          label="Nombre"
          placeholder="Ej. SSD NVMe 2 TB"
          value={form.name}
          onChangeText={(value) => setField("name", value)}
          icon="cube-outline"
          maxLength={100}
        />
        <InputField
          label="Descripción"
          placeholder="Características principales"
          value={form.description}
          onChangeText={(value) => setField("description", value)}
          icon="text-long"
          multiline
        />
        <View style={styles.row}>
          <View style={styles.half}>
            <InputField
              label="Precio (S/)"
              placeholder="0.00"
              value={form.price}
              onChangeText={(value) => setField("price", value)}
              icon="cash"
              keyboardType="decimal-pad"
            />
          </View>
          <View style={styles.half}>
            <InputField
              label="Stock"
              placeholder="0"
              value={form.stock}
              onChangeText={(value) => setField("stock", value)}
              icon="counter"
              keyboardType="number-pad"
            />
          </View>
        </View>
        <InputField
          label="URL de imagen"
          placeholder="https://..."
          value={form.image}
          onChangeText={(value) => setField("image", value)}
          icon="image-outline"
          autoCapitalize="none"
        />
        <InputField
          label="Código de barras"
          placeholder="EAN-13, EAN-8, QR o Code 128"
          value={form.barcode}
          onChangeText={(value) => setField("barcode", value)}
          icon="barcode-scan"
          autoCapitalize="none"
        />

        <CustomButton
          title="Escanear con la cámara"
          onPress={openScanner}
          variant="secondary"
        />

        <View style={styles.switchCard}>
          <View>
            <Text style={styles.switchTitle}>Producto activo</Text>
            <Text style={styles.switchHint}>
              Visible para los clientes en el catálogo.
            </Text>
          </View>
          <Switch
            value={form.active}
            onValueChange={(value) => setField("active", value)}
            trackColor={{ false: colors.borderLight, true: colors.primaryDark }}
            thumbColor={form.active ? colors.primaryLight : colors.textMuted}
          />
        </View>

        <CustomButton
          title={originalProduct ? "Guardar cambios" : "Crear producto"}
          onPress={handleSave}
          loading={saving}
        />
      </ScrollView>

      <Modal
        visible={scannerVisible}
        animationType="slide"
        onRequestClose={() => setScannerVisible(false)}
      >
        <View style={styles.scannerContainer}>
          <CameraView
            style={StyleSheet.absoluteFill}
            facing="back"
            barcodeScannerSettings={{
              barcodeTypes: ["ean13", "ean8", "qr", "code128"],
            }}
            onBarcodeScanned={
              scannerLocked
                ? undefined
                : ({ data }) => {
                    setScannerLocked(true);
                    setField("barcode", data);
                    setScannerVisible(false);
                  }
            }
          />
          <View style={styles.scannerOverlay}>
            <View style={styles.scannerFrame} />
            <Text style={styles.scannerText}>
              Alinea el código dentro del marco
            </Text>
            <Pressable
              style={styles.closeScanner}
              onPress={() => setScannerVisible(false)}
            >
              <MaterialCommunityIcons
                name="close"
                size={25}
                color={colors.white}
              />
              <Text style={styles.closeText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  content: { padding: 20, paddingBottom: 45 },
  title: { color: colors.white, fontSize: 28, fontWeight: "900" },
  subtitle: {
    color: colors.textSecondary,
    lineHeight: 20,
    marginTop: 6,
    marginBottom: 24,
  },
  row: { flexDirection: "row", gap: 12 },
  half: { flex: 1 },
  switchCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.md,
    padding: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  switchTitle: { color: colors.white, fontWeight: "800" },
  switchHint: { color: colors.textMuted, fontSize: 11, marginTop: 3 },
  scannerContainer: { flex: 1, backgroundColor: colors.black },
  scannerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.24)",
  },
  scannerFrame: {
    width: "78%",
    height: 210,
    borderWidth: 3,
    borderColor: colors.primaryLight,
    borderRadius: 20,
  },
  scannerText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "800",
    marginTop: 18,
  },
  closeScanner: {
    position: "absolute",
    top: 55,
    right: 22,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(15,23,42,0.8)",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  closeText: { color: colors.white, fontWeight: "800" },
});
