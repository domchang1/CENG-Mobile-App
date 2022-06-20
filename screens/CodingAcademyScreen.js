import { StyleSheet, Button, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import styles from '../style'
import { useFonts, Raleway_400Regular, Raleway_700Bold} from '@expo-google-fonts/raleway';

const CodingAcademy = () => {
    let [fontsLoaded, error] = useFonts({
        Raleway_400Regular,
        Raleway_700Bold
      });
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily:'Raleway_700Bold', fontSize: 30, textAlign: 'center', margin: 5}}>CENG Online Coding Academy</Text>
            <Button style={styles.button} title="Beginner Scratch Lessons" onPress={() => Linking.openURL('https://www.cengclass.org/blank-page/')}/>
            <Button style={styles.button} title="Intermediate Scratch Lessons" onPress={() => Linking.openURL('https://www.cengclass.org/intermediate-scratch-lessons/')}/>
            <Button style={styles.button} title="Advanced Scratch Lessons" onPress={() => Linking.openURL('https://www.cengclass.org/advanced-scratch/')}/>
            <Button style={styles.button} title="Beginner Javascript Lessons" onPress={() => Linking.openURL('https://www.cengclass.org/beginner-java-script/')}/>
            <Button style={styles.button} title="Intermediate Javascript Lessons" onPress={() => Linking.openURL('https://www.cengclass.org/intermediate-java-script/')}/>
            <Button style={styles.button} title="Beginner Python Lessons" onPress={() => Linking.openURL('https://www.cengclass.org/beginner-python/')}/>
            <Button style={styles.button} title="Intermediate Python Lessons" onPress={() => Linking.openURL('https://www.cengclass.org/intermediate-python/')}/>
            <Button style={styles.button} title="Advanced Python Lessons" onPress={() => Linking.openURL('https://www.cengclass.org/advanced-python/')}/>
            <Button style={styles.button} title="Academia De Codificación En Línea - Español" onPress={() => Linking.openURL('https://www.cengclass.org/academia-de-codificacion-en-linea-espanol/')}/>
            
        </View>
        
    )
}

export default CodingAcademy;