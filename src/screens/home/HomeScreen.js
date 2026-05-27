import {
  View,
  ScrollView,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import ScreenContainer from "../../components/layout/ScreenContainer";
import AppHeader from "../../components/layout/AppHeader";

import HeroBanner from "../../components/home/HeroBanner";
import QuickActionCard from "../../components/home/QuickActionCard";
import PromoBanner from "../../components/home/PromoBanner";
import GamingBanner from "../../components/home/GamingBanner";
import CategoryPill from "../../components/home/CategoryPill";
import SectionTitle from "../../components/home/SectionTitle";

import colors from "../../constants/colors";

export default function HomeScreen({
  navigation,
}) {
  return (
    <ScreenContainer scrollable>
      <AppHeader
        title="iESJ Mobile Store"
        subtitle="Tecnología premium y hardware gaming"
      />

      <HeroBanner navigation={navigation} />

      <SectionTitle
        title="Categorías"
        subtitle="Explora productos destacados"
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 24 }}
      >
        <CategoryPill
          label="Gaming"
          active
        />

        <CategoryPill label="Laptops" />

        <CategoryPill label="Monitores" />

        <CategoryPill label="Componentes" />

        <CategoryPill label="Audio" />
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          gap: 14,
          marginBottom: 24,
        }}
      >
        <QuickActionCard
          icon={
            <MaterialIcons
              name="computer"
              size={34}
              color={colors.primary}
            />
          }
          title="Laptops"
          description="Equipos modernos y alto rendimiento."
        />

        <QuickActionCard
          icon={
            <MaterialIcons
              name="memory"
              size={34}
              color={colors.primary}
            />
          }
          title="Componentes"
          description="Hardware gaming y profesional."
        />
      </View>

      <PromoBanner navigation={navigation} />

      <GamingBanner />
    </ScreenContainer>
  );
}