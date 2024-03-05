import { View, StyleSheet, FlatList} from "react-native"
import { Usuario } from "./Usuario"

export function Lista(){

    const listaUsuarios = [
        {
            codigo: '1',
            nome: "João",
            email: "joao@gmail.com",
            telefone: "(19) 1234-5678"
        },
        {
            codigo: '2',
            nome: "Maria",
            email: "maria@gmail.com",
            telefone: "(19) 4324-9812"
        },
        {
            codigo: '3',
            nome: "Murilo",
            email: "murilo@gmail.com",
            telefone: "(19) 5674-6789"
        },

    ]

    return(
        <View>

            <FlatList
                data={listaUsuarios}
                keyExtractor={(item) => {item.codigo}}
                renderItem={({item}) => (
                    <Usuario
                        nome={item.nome}
                        email={item.email}
                        telefone={item.telefone}
                    />  
                )}
            />
                
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        backgroundColor: '#fff',
        paddingTop: 24
    },

})
