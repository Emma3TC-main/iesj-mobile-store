import { Text } from "react-native";

import { useFavorites } from "../../hooks/useFavorites";

import ProductList from "../../components/products/ProductList";

import ScreenContainer from "../../components/layout/ScreenContainer";

import EmptyState from "../../components/common/EmptyState";

import globalStyles from "../../styles/globalStyles";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <EmptyState message="No tienes favoritos" />;
  }

  return (
    <ScreenContainer>
      <Text style={globalStyles.title}>Mis Favoritos</Text>

      <ProductList products={favorites} navigation={navigation} />
    </ScreenContainer>
  );
}
