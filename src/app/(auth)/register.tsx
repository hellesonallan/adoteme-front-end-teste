import { SafeAreaView, ScrollView, View, Text, Switch, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";
import { colors } from "../../styles/colors";

export default function CadastroScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpfOuCnpj, setCpfOuCnpj] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleRegister = () => {
    if (!nome || !email || !cpfOuCnpj || !telefone || !endereco || !senha || !confirmarSenha) {
      alert("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("CPF ou CNPJ:", cpfOuCnpj);
    console.log("Telefone:", telefone);
    console.log("Endereço:", endereco);
    console.log("Senha:", senha);

    router.replace("/home");
  };

  const [isOng, setIsOng] = useState(false);

  const toggleSwitch = () => setIsOng(previous => !previous);

  const inputStyles = "w-full border border-black/5 bg-black/5 rounded-xl px-4 py-4 placeholder:text-black/50";

  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center">
          <Image
            source={require("../../../assets/logo.png")}
            className="w-64 mb-8"
            resizeMode="contain"
          />

          <Text className="text-3xl font-bold text-black mb-2">Crie sua conta</Text>
          <Text className="text-xl text-black/50 mb-6">Preencha os dados abaixo</Text>

          <View className="flex-row items-center justify-between w-full mb-6">
            <Text className="text-black font-bold text-xl">Sou ONG</Text>
            <Switch
              value={isOng}
              onValueChange={toggleSwitch}
              thumbColor={isOng ? colors.white : colors.white}
              trackColor={{ true: colors.green }}
            />
          </View>

          <TextInput
            className={`${inputStyles} mb-4`}
            placeholder={isOng ? "Nome da ONG" : "Nome completo"}
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            className={`${inputStyles} mb-4`}
            placeholder={isOng ? "E-mail da instituição" : "E-mail"}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            className={`${inputStyles} mb-4`}
            placeholder={isOng ? "CNPJ" : "CPF"}
            value={cpfOuCnpj}
            onChangeText={setCpfOuCnpj}
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
            <Text className="text-black">Já tem uma conta? </Text>
            <Link href="/login" className="text-green font-bold">
              Entrar
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
