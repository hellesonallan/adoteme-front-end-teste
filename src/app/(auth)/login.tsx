import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Senha:", senha);

    router.replace("/home");
  };

  const inputStyles = "w-full border border-black/5 bg-black/5 rounded-xl px-4 py-4 placeholder:text-black/50";

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Image
        source={require("../../../assets/logo.png")}
        className="w-64 mb-8"
        resizeMode="contain"
      />

      <Text className="text-3xl font-bold text-black mb-2">Bem-vindo de volta!</Text>
      <Text className="text-xl mb-6 text-black/50">Faça login na sua conta</Text>

      <TextInput
        className={`${inputStyles} mb-4`}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        className={`${inputStyles} mb-6`}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        className="bg-green rounded-xl px-4 py-4 w-full mb-4"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-bold text-xl">
          Entrar
        </Text>
      </TouchableOpacity>

      <Link href="/forgetpassword" className="text-green text-center font-bold py-4 w-full mb-4">
        Esqueceu sua senha?
      </Link>

      <View className="flex-row items-center mb-4">
        <View className="flex-1 h-px bg-black/5" />
          <Text className="mx-4 text-black/50 font-medium">ou</Text>
        <View className="flex-1 h-px bg-black/5" />
      </View>

      <TouchableOpacity className="border border-black/5 bg-black/5 rounded-xl px-4 py-4 w-full mb-4 flex-row items-center justify-center">
        <Image
          source={require("../../../assets/govbr-logo.png")}
          className="w-16 h-6 mr-3"
          resizeMode="contain"
        />
        <Text className="text-black font-bold text-base">Entrar com gov.br</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="text-black">Não tem uma conta? </Text>
          <Link href="/register" className="text-green font-bold">
            Cadastre-se
          </Link>
      </View>
    </View>
  );
}
