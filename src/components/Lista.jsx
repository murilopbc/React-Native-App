import { View, StyleSheet, Text} from "react-native"


export function Lista(){
    return(
        <View style={styles.container}>
                <Text style={styles.texto}>Lista</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        backgroundColor: '#fff'
    },

})

