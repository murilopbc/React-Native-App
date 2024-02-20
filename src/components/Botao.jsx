import { StyleSheet, TouchableOpacity, Text } from "react-native"


export const Botao = ({text}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9da0a1',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 150,
        marginTop: 24,
        marginStart: 24,
        borderRadius: 12,
        borderColor: '#050505',
        borderWidth: 1
    },

    text: {
        color: '#fff',
        fontSize: 20
       
    }  
})