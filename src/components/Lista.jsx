import { View, StyleSheet, Text, FlatList} from "react-native"

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
                    <>
                        <Text style={styles.item}>{item.nome}</Text>
                        <Text style={styles.item}>{item.email}</Text>
                        <Text style={styles.item}>{item.telefone}</Text>
                    </>
                    
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
    item: {
        color: '#fff'
    }

})

