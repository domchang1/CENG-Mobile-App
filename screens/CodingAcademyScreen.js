import { Text, View, Pressable, Linking, ScrollView, StyleSheet} from 'react-native';
import styles from '../style'
import { useFonts, Raleway_400Regular, Raleway_700Bold} from '@expo-google-fonts/raleway';

const CodingAcademy = () => {
    let [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Raleway_700Bold
      });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.blueback}>
                    <Text style={{ fontFamily:'Raleway_700Bold', fontSize: 30, color: 'white', textAlign: 'center', margin: 5}}>Online Coding Academy</Text>
                </View>
                <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.cengclass.org/beginning-scratch/')}>
                    <Text style={styles.text}>Beginner Scratch Lessons</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.cengclass.org/intermediate-scratch/')}>
                    <Text style={styles.text}>Intermediate Scratch Lessons</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.cengclass.org/advanced-scratch/')}>
                    <Text style={styles.text}>Advanced Scratch Lessons</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.cengclass.org/beginner-javascript/')}>
                    <Text style={styles.text}>Beginner Javascript Lessons</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.cengclass.org/intermediate-javascript/')}>
                    <Text style={styles.text}>Intermediate Javascript Lessons</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.cengclass.org/advanced-javascript/')}>
                    <Text style={styles.text}>Advanced Javascript Lessons</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.cengclass.org/advanced-javascript/')}>
                    <Text style={styles.text}>Advanced Javascript Lessons</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.cengclass.org/beginner-python/')}>
                    <Text style={styles.text}>Beginner Python Lessons</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.cengclass.org/intermediate-python/')}>
                    <Text style={styles.text}>Intermediate Python Lessons</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.cengclass.org/advanced-python/')}>
                    <Text style={styles.text}>Advanced Python Lessons</Text>
                </Pressable>
            </View>
            <View style={{marginTop: 25, backgroundColor:'#fff',borderBottomColor: 'black', borderBottomWidth: 1,}}/>
            <View style={styles.container2}>
                <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.cengclass.org/academia-de-codificacion-en-linea-espanol/')}>
                    <Text style={{color: 'rgba(105,160,215)', textDecorationLine: 'underline'}}>Academia De Codificación En Línea - Español</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default CodingAcademy;