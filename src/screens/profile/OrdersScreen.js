import { View, Text, FlatList } from "react-native";

import { useOrders } from "../../hooks/useOrders";

import ScreenContainer from "../../components/layout/ScreenContainer";

import globalStyles from "../../styles/globalStyles";

import { formatCurrency } from "../../utils/currency";
import { formatDate } from "../../utils/helpers";
import EmptyState from "../../components/common/EmptyState";

export default function OrdersScreen() {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <ScreenContainer>
        <EmptyState message="No tienes órdenes todavía" />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <Text style={globalStyles.title}>Mis Órdenes</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={globalStyles.card}>
            <Text>Orden #{item.id}</Text>

            <Text>{formatDate(item.date)}</Text>

            <Text>Estado: {item.status}</Text>

            <Text>{formatCurrency(item.total)}</Text>
          </View>
        )}
      />
    </ScreenContainer>
  );
}
