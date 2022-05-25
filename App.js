import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('./images/ceng.png')}/>
      <Text style={styles.title}>COMPUTER ENGINEERS OF THE NEXT GENERATION</Text>
      <StatusBar style="auto" />
      <Button title="Solid" />

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
