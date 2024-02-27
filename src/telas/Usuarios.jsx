import { View, StyleSheet } from "react-native"
import {Header} from '../components/Header'
import { Formulario } from "../components/Formulario"
import { Lista } from "../components/Lista"


export function Usuarios(){
    return(
        <View style={styles.container}>

        <Header titulo='Usuários'/>
        <Formulario/>
        <Lista/>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080a0C'
    },

})