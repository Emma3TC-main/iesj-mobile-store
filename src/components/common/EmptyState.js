import { View, Text } from "react-native";

export default function EmptyState({ message }) {
  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 40,
      }}
    >
      <Text>{message}</Text>
    </View>
  );
}
