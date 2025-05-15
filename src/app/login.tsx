// app/login.tsx
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Senha:", senha);
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-4xl font-bold">Bem-vindo de volta!</Text>

      <Text className="text-2xl mb-8 color-gray-200">Faça login na sua conta</Text>

      <TextInput
        className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4"
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-6"
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        className="bg-blue-600 rounded-xl px-4 py-3 w-full"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-medium">Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
