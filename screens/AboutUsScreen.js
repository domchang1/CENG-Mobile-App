import { StyleSheet, Button, Text, View, Image, Linking } from 'react-native';


const AboutUs = () => {
    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Follow Our Socials!</Text>
            <Image style={styles.image} source={require('../images/instagram.png')}/>
            <Image style={styles.wide} source={require('../images/youtube.png')} />
            <Image style={styles.image} source={require('../images/facebook.png')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 64,
      textAlign: 'center',
    //   fontFamily: 'sans-serif' figure out fonts!!!
    
    },
    image: {
        width: 71,
        height: 71,
        marginTop: 25,
    },
    wide: {
        width: 71,
        height: 50,
        marginTop: 25,
    }
  });
export default AboutUs;