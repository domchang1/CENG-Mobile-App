import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { StyleSheet, Button, Text, View, Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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

const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('./images/ceng.png')}/>
      <Text style={styles.title}>COMPUTER ENGINEERS OF THE NEXT GENERATION</Text>
      <StatusBar style="auto" />
      <OpenURLButton url={'https://www.cengclass.org/'}>Our Website</OpenURLButton>

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
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
  }
});
