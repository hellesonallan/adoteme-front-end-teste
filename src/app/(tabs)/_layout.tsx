import { Stack } from "expo-router";
import { Image } from "react-native";
import { colors } from "../../styles/colors";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.white },
        headerTintColor: "#fff",
        headerTitle: () => (
          <Image
            source={require("../../../assets/logo.png")}
            style={{ width: 160, height: 40, resizeMode: "contain" }}
          />
        ),
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="home" />
    </Stack>
  );
}