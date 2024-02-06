import {styles} from './inicial';
import {View, Text} from 'react-native'

export function Inicial(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Senai Roberto Mange</Text>
            <Text style={styles.texto}>2DS</Text>
        </View>

    )
}