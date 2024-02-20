import { StyleSheet, View} from 'react-native'
import { Header } from '../components/Header'
import { Botao} from '../components/Botao'

export function Inicial(){
    return(
        <View style={styles.container}>
            <Header
                titulo='Senai Roberto Mange'
                subtitulo='2DS'
            />
            <Botao text='Usuário'/>
            <Botao text='Sensores'/>
            <Botao text='Sobre'/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
})
