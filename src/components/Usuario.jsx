import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function Usuario({ nome, email, telefone, remover }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerDados}>
        <Text style={styles.texto}>{nome}</Text>
        <Text style={styles.texto}>{email}</Text>
        <Text style={styles.texto}>{telefone}</Text>
      </View>
      <TouchableOpacity style={styles.botao} onPress={remover}>
        <Text style={styles.textoBotao}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 5,
  },
  containerDados: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  botao: {
    width: 50,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "purple",
    marginStart: 10,
  },
  texto: {
    color: "#000",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 26,
  },
});
