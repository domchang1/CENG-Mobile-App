import React, { useCallback } from 'react';
import { StyleSheet, Image, Button, Text, View, Linking } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from '../style'
import { useFonts, Raleway_400Regular, Raleway_500Medium} from '@expo-google-fonts/raleway';

const OpenURLButton = ({ url, children }) => { //https://reactnative.dev/docs/linking
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} />;
};

const Home = () => {
  let [fontsLoaded, error] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
  });
  return (
    <View style={styles.container}>
      <Image source={require('../images/ceng.png')}/>
      <Text style={{fontFamily:'Raleway_400Regular', fontSize: 60, textAlign: 'center', margin: 15}}>
        COMPUTER ENGINEERS OF THE NEXT GENERATION</Text>
      <StatusBar style="auto" />
      <OpenURLButton url={'https://www.cengclass.org/'}>Our Website</OpenURLButton>
    </View>
  );}


export default Home;