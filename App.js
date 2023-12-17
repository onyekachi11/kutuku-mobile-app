import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigations from "./navigation/AppNavigations";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View
          style={{
            flex: 1,
            // paddingHorizontal: 20,
            backgroundColor: "white",
          }}
        >
          <StatusBar barStyle={"dark-content"} backgroundColor="white" />
          <AppNavigations />
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
