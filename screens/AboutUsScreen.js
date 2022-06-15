import { StyleSheet, Button, Text, View, Image, Linking } from 'react-native';
import styles from './style'

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

export default AboutUs;