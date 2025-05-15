import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../styles/colors"; // ajuste o caminho conforme necessário

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  const pets = [
    {
      id: 1,
      nome: "Bolt",
      idade: "2 anos",
      porte: "Médio",
      local: "Recife - PE",
      imagem: {uri: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    },
    {
      id: 2,
      nome: "Luna",
      idade: "1 ano",
      porte: "Pequeno",
      local: "Olinda - PE",
      imagem: {uri: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <Text className="text-3xl font-bold text-green mt-4">adote.me</Text>

      <Text className="text-xl text-black mt-2 mb-4">Encontre seu novo melhor amigo 🐶</Text>

      {/* Campo de busca */}
      <View className="flex-row items-center bg-black/5 rounded-xl px-4 py-3 mb-4">
        <FontAwesome name="search" size={20} color={colors.black} />
        <TextInput
          className="ml-3 flex-1 text-black"
          placeholder="Buscar por nome, raça..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Filtros (esboço) */}
      <View className="flex-row gap-3 mb-4">
        <TouchableOpacity className="bg-green px-3 py-2 rounded-full">
          <Text className="text-white font-medium text-sm">Cachorros</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-black/5 px-3 py-2 rounded-full">
          <Text className="text-black font-medium text-sm">Gatos</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-black/5 px-3 py-2 rounded-full">
          <Text className="text-black font-medium text-sm">Pequeno porte</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de pets */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {pets.map((pet) => (
          <View key={pet.id} className="bg-black/5 rounded-xl mb-4 p-4 flex-row items-center">
            <Image source={pet.imagem} className="w-24 h-24 rounded-xl mr-4" resizeMode="cover" />
            <View className="flex-1">
              <Text className="text-lg font-bold text-black">{pet.nome}</Text>
              <Text className="text-black/70">{pet.idade}</Text>
              <Text className="text-black/70">{pet.porte}</Text>
              <Text className="text-black/70">{pet.local}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
