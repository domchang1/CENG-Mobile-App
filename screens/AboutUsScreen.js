import { StyleSheet, Button, Text, View, Image, Linking } from 'react-native';
import styles from '../style'
import { useFonts, Raleway_400Regular, Raleway_700Bold} from '@expo-google-fonts/raleway';
//Run "npx react-native link" whenever adding new fonts

const AboutUs = () => {
  let [fontsLoaded, error] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold
  });
    return (
        <View style={styles.container}>
          <Text style={{fontFamily:'Raleway_400Regular', fontSize: 30, textAlign: 'center', margin: 5}}>
            <Text style={{fontWeight: 'bold'}}>MISSION:</Text>
            <Text>&nbsp; Our mission is to&nbsp;</Text>
            <Text>INSPIRE&nbsp;</Text>
            <Text>underrepresented&nbsp;</Text>
            <Text>minorities to&nbsp;</Text>
            <Text>EXPLORE&nbsp;</Text>
            <Text>and develop an interest in&nbsp;</Text>
            <Text>COMPUTER SCIENCE.</Text>
          </Text>
            <Text style = {{fontFamily:'Raleway_400Regular', fontSize: 75, textAlign: 'center' }}>Follow Our Socials!</Text>
            <Image style={styles.image} source={require('../images/instagram.png')}/>
            <Image style={styles.wide} source={require('../images/youtube.png')} />
            <Image style={styles.image} source={require('../images/facebook.png')}/>
        </View>
    )
}

export default AboutUs;