import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export function Usuario(nome, email, telefone){
    return(
        <View style={styles.container}>

            <View style={styles.containerDados}>
                <Text style={styles.texto}>{nome}</Text>
                <Text style={styles.texto}>{email}</Text>
                <Text style={styles.texto}>{telefone}</Text>
            </View>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>-</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5
    },
    containerDados: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
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
        color: '#000'
    },
    textoBotao: {
        color: "#fff",
        fontSize: 26
    }
})
