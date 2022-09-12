import { StyleSheet, Button, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import styles from '../style'
import { useFonts, Raleway_400Regular, Raleway_700Bold} from '@expo-google-fonts/raleway';
//Run "npx react-native link" whenever adding new fonts

const AboutUs = () => {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }
    return (
        <View style={styles.container}>
          <Text style={{ fontFamily:'Raleway_400Regular', fontSize: 20, textAlign: 'center', margin: 5}}>
            <Text style={{fontFamily: 'Raleway_700Bold'}}>MISSION:</Text>
            <Text>&nbsp; Our mission is to&nbsp;</Text>
            <Text style={{fontFamily: 'Raleway_700Bold', color:'#9878c4'}}>INSPIRE&nbsp;</Text>
            <Text style={{fontFamily: 'Raleway_700Bold', color: '#529bfa'}}>underrepresented&nbsp;</Text>
            <Text>minorities to&nbsp;</Text>
            <Text style={{fontFamily: 'Raleway_700Bold', color: '#6fb26f'}}>EXPLORE&nbsp;</Text>
            <Text>and develop an interest in&nbsp;</Text>
            <Text style={{fontFamily: 'Raleway_700Bold', color: '#e2814e'}}>COMPUTER SCIENCE.</Text>
          </Text>
            <Text style = {{fontFamily:'Raleway_400Regular', fontSize: 75, textAlign: 'center' }}>Follow Our Socials!</Text>
            <TouchableOpacity 
              onPress={() => Linking.openURL('https://www.instagram.com/cengclass/')}>
              <Image style={styles.image} source={require('../images/instagram.png')}/>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => Linking.openURL('https://www.youtube.com/channel/UCJDqPoixQsgdETUtq9NzDYQ')}>
              <Image style={styles.wide} source={require('../images/youtube.png')} />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => Linking.openURL('https://www.facebook.com/people/Ceng-Class/100076102958246/')}>
              <Image style={styles.image} source={require('../images/facebook.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export default AboutUs;