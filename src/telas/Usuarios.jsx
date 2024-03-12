import { View, StyleSheet } from "react-native";
import { Header } from "../components/Header";
import { Formulario } from "../components/Formulario";
import { Lista } from "../components/Lista";
import { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

export function Usuarios() {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const adicionarUsuario = (nome, email, telefone) => {
    let novoUsuario = {
      codigo: uuid(),
      nome: nome,
      email: email,
      telefone: telefone,
    };

    setListaUsuarios([...listaUsuarios, novoUsuario]);
  };

  const removerUsuario = (codigo) => {
    setListaUsuarios(
      listaUsuarios.filter((usuario) => usuario.codigo !== codigo)
    );
  };

  return (
    <View style={styles.container}>
      <Header titulo="Usuários" />
      <Formulario adicionar={adicionarUsuario} />
      <Lista colecao={listaUsuarios} remover={removerUsuario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080a0C",
  },
});
