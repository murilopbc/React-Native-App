import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export function Usuario(){
    return(
        <View style={styles.container}>

            <View style={styles.containerDados}>
                <Text style={styles.texto}>{}</Text>
                <Text style={styles.texto}>{}</Text>
                <Text style={styles.texto}>{}</Text>
            </View>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.texto}>-</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    containerDados: {
        flex: 1,
        backgroundColor: '#590d22',
       

    },
    botao: {
        width: 60,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#590d22',
        marginStart: 10

    },
    texto: {
        color: '#fff'

    }

})