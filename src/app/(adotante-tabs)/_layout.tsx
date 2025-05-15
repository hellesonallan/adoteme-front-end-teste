import { View, Text, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter, usePathname } from "expo-router";

export default function RootLayout() {
  const router = useRouter();
  const path = usePathname();

  const tabs = [
    { name: "Home", route: "/home" },
  ];

  return (
    <View className="flex-1 bg-white">
      <View className="bg-white py-3 border-b border-gray-200 items-center justify-center">
        <Image
          source={require("../../../assets/logo.png")}
          className="w-50 h-10"
          resizeMode="contain"
        />
      </View>

      <View className="flex-1">
        <Stack screenOptions={{ headerShown: false }} />
      </View>

      <View className="flex-row justify-around bg-white py-3 border-t border-gray-200">
        {tabs.map((tab) => {
          const isActive = path === tab.route;
          return (
            <TouchableOpacity
              key={tab.route}
              onPress={() => router.push(tab.route)}
              className={`px-5 py-2 border-b-2 ${
                isActive ? "border-green-500" : "border-transparent"
              }`}
            >
              <Text
                className={`text-base font-medium ${
                  isActive ? "text-green-500" : "text-black"
                }`}
              >
                {tab.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
