import {
  Text,
  View,
} from "react-native";

import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";
import { useFavorites } from "../../hooks/useFavorites";
import { useOrders } from "../../hooks/useOrders";

import CustomButton from "../../components/common/CustomButton";

import ScreenContainer from "../../components/layout/ScreenContainer";

import globalStyles from "../../styles/globalStyles";

import { formatCurrency } from "../../utils/currency";

export default function ProfileScreen({
  navigation,
}) {
  const { user, logout } =
    useAuth();

  const { cartItems, total } =
    useCart();

  const { favorites } =
    useFavorites();

  const { orders } = useOrders();

  return (
    <ScreenContainer>
      <Text style={globalStyles.title}>
        Mi Perfil
      </Text>

      <View style={globalStyles.card}>
        <Text>
          {user?.name}
        </Text>

        <Text>
          {user?.email}
        </Text>
      </View>

      <View style={globalStyles.card}>
        <Text>
          Productos:
          {cartItems.length}
        </Text>

        <Text>
          Total:
          {formatCurrency(total)}
        </Text>

        <Text>
          Favoritos:
          {favorites.length}
        </Text>

        <Text>
          Órdenes:
          {orders.length}
        </Text>
      </View>

      <CustomButton
        title="Ver órdenes"
        onPress={() =>
          navigation.navigate(
            "Orders"
          )
        }
      />

      <CustomButton
        title="Cerrar sesión"
        onPress={logout}
      />
    </ScreenContainer>
  );
}