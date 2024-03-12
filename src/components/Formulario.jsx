import { useState } from "react"
import { View, StyleSheet, TextInput, Text, TouchableOpacity} from "react-native"


export function Formulario({adicionar}){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    return(
        <View style={styles.container}>

            <View>
                <TextInput
                    style={styles.campo}
                    placeholder="Nome"
                    placeholderTextColor='black' 
                    keyboardType="default"
                    onChangeText={setNome}
                    value={nome}
                    
                    />

                    <TextInput
                    style={styles.campo}
                    placeholder="Email"
                    placeholderTextColor='black'
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                    
                    />

                    <TextInput
                    style={styles.campo}
                    placeholder="Telefone"
                    placeholderTextColor='black'
                    keyboardType="phone-pad"
                    onChangeText={setTelefone}
                    value={telefone}
                    
                    />
                
            </View>

                
                <TouchableOpacity
                 style={styles.botao}
                 onPress={() => adicionar(nome, email, telefone)}> 
                    <Text style={styles.texto}>+</Text>
                </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10

    },

    containerCampos: {
        flex: 1
    },

    campo: {
        height: 50,
        backgroundColor: '#fff',
        color: 'black',
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        width: 300
    },

    botao: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        height: 170,
        backgroundColor: 'purple',
        marginStart: 10,
        borderRadius: 5,
    },

    texto: {
        color: '#fff',
        fontSize: 26
    }

})

