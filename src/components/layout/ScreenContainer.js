import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import globalStyles from "../../styles/globalStyles";

export default function ScreenContainer({
  children,
  scrollable = false,
  style,
  contentContainerStyle,
}) {
  if (scrollable) {
    return (
      <SafeAreaView style={[globalStyles.safeContainer, style]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            globalStyles.scrollContent,
            contentContainerStyle,
          ]}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[globalStyles.container, style]}>
      {children}
    </SafeAreaView>
  );
}
