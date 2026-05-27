import { SafeAreaView, ScrollView } from "react-native";

import globalStyles from "../../styles/globalStyles";

export default function ScreenContainer({
  children,
  scrollable = false,
}) {
  if (scrollable) {
    return (
      <SafeAreaView style={globalStyles.safeContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={globalStyles.scrollContent}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      {children}
    </SafeAreaView>
  );
}