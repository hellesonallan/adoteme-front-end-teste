import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";

export default function CadastroScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleRegister = () => {
    if (!nome || !email || !cpf || !telefone || !endereco || !senha || !confirmarSenha) {
      alert("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("CPF:", cpf);
    console.log("Telefone:", telefone);
    console.log("Endereço:", endereco);
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

      <Text className="text-3xl font-bold text-black mb-2">Crie sua conta</Text>
      <Text className="text-xl text-black/50 mb-6">Selecione o tipo de cadastro</Text>

      <TextInput
        className={`${inputStyles} mb-4`}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        className={`${inputStyles} mb-4`}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        className={`${inputStyles} mb-4`}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />

      <TextInput
        className={`${inputStyles} mb-4`}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <TextInput
        className={`${inputStyles} mb-4`}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <TextInput
        className={`${inputStyles} mb-4`}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TextInput
        className={`${inputStyles} mb-8`}
        placeholder="Confirmar senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />

      <TouchableOpacity
        className="bg-green rounded-xl px-4 py-4 w-full mb-4"
        onPress={handleRegister}
      >
        <Text className="text-white text-center font-bold text-xl">
          Cadastrar
        </Text>
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="text-black">Já tem uma conta? </Text>
        <Link href="/login" className="text-green font-bold">
          Entrar
        </Link>
      </View>
    </View>
  );
}
