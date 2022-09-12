import React from 'react';
import { StyleSheet, Image, Button, Text, View, Linking } from "react-native";
import styles from '../style'
import { useFonts, Raleway_400Regular, Raleway_500Medium} from '@expo-google-fonts/raleway';

const Home = () => {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={require('../images/ceng.png')}/>
      <Text style={{fontFamily:'Raleway_400Regular', fontSize: 60, textAlign: 'center', margin: 15}}>
        COMPUTER ENGINEERS OF THE NEXT GENERATION</Text>
      <Button style={styles.button} title="Our Website" onPress={() => Linking.openURL('https://www.cengclass.org/')}/>
      <Button style={styles.button} title="Donate" onPress={() => Linking.openURL('https://www.paypal.com/donate/?hosted_button_id=PNXZ5NTADBNS6')}/>
      <Button style={styles.button} title="Class Signup" onPress={() => Linking.openURL('https://www.cengclass.org/summer-classes/')}/>
      <Button style={styles.button} title="Volunteer Opportunities" onPress={() => Linking.openURL('https://www.cengclass.org/volunteer-opportunities/')}/>
    </View>
  );}


export default Home;