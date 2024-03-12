import { View, StyleSheet, FlatList} from "react-native"
import { Usuario } from "./Usuario"

export function Lista({colecao, remover}){


    return(
        <View>

            <FlatList
                data={colecao}
                keyExtractor= {(item) => item.codigo}
                renderItem={({item}) => (
                    <Usuario
                        nome={item.nome}
                        email={item.email}
                        telefone={item.telefone}
                        remover={() => remover (item.codigo)}
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
