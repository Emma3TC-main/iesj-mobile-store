import { SafeAreaView, ScrollView } from "react-native";

import globalStyles from "../../styles/globalStyles";

export default function ScreenContainer({ children, scrollable = false }) {
  if (scrollable) {
    return (
      <SafeAreaView style={globalStyles.safeContainer}>
        <ScrollView
          contentContainerStyle={globalStyles.container}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return <SafeAreaView style={globalStyles.container}>{children}</SafeAreaView>;
}
