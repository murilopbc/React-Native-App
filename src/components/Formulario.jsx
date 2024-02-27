import { View, StyleSheet, Text} from "react-native"


export function Formulario(){
    return(
        <View style={styles.container}>
                <Text style={styles.texto}>Formulario</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        backgroundColor: '#fff'
    },

})

