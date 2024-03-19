import { StyleSheet, StatusBar, View } from 'react-native';
import {Inicial} from './src/telas/Inicial'
import { Usuarios } from './src/telas/Usuarios';
import { Cadastro } from './src/telas/Cadastro';
import { Sobre } from './src/telas/Sobre';
import {Login} from './src/telas/Login'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
