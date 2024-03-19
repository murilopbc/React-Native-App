import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Header } from "../components/Header";


export function Cadastro(){
    const [user, setUser] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const handleCadastro = () => {
    
    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log('User:', user);
    console.log('Username:', username);
    console.log('Password:', password);
    // Por exemplo, você pode enviar uma solicitação para um servidor para autenticar o usuário
  };

  return (
    <View style={styles.container}>
        <Header titulo = "Cadastro" />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={user}
        onChangeText={setUser}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Cadastrar"
        onPress={handleCadastro}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {

    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});
