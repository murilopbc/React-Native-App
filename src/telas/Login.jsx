import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Header } from "../components/Header";


export function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log('Username:', username);
    console.log('Password:', password);
    // Por exemplo, você pode enviar uma solicitação para um servidor para autenticar o usuário
  };

  return (
    
    <View style={styles.container}>
        <Header titulo="Login" />
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
        title="Entrar"
        onPress={handleLogin}
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
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});


