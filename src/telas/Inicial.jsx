import { StyleSheet, View, Text} from 'react-native'

export function Inicial(){
    return(
        <View style={styles.conteiner}>
            <Text style={styles.texto}>Senai Roberto Mange</Text>
            <Text style={styles.texto}>2DS</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "#080A0C"

    },
    texto: {
        color: '#fff',
        fontSize: 24
    }
    
})
