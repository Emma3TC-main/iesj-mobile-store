import { View, Text } from "react-native";

import ScreenContainer from "../../components/layout/ScreenContainer";
import AppHeader from "../../components/layout/AppHeader";
import CustomButton from "../../components/common/CustomButton";

import globalStyles from "../../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  return (
    <ScreenContainer scrollable>
      <AppHeader
        title="iESJ Mobile Store"
        subtitle="Hardware premium y tecnología"
      />

      <View style={globalStyles.card}>
        <Text style={globalStyles.text}>
          Explora componentes modernos, periféricos y hardware gaming.
        </Text>

        <CustomButton
          title="Explorar catálogo"
          onPress={() => navigation.navigate("Catalogo")}
        />
      </View>

      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Promoción</Text>

        <Text style={globalStyles.text}>
          Hasta 25% de descuento en SSD NVMe
        </Text>
      </View>
    </ScreenContainer>
  );
}
