
import React, { useCallback } from 'react';
import { StyleSheet, Button, Text, View, Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import CodingAcademyScreen from "./screens/CodingAcademyScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import styles from './style'
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      const icons = {
        Home: 'home',
        Academy: 'play',
        About: 'people'
        
      };
      return (
        <Ionicons name={icons[route.name]}
          color={color}
          size={size} />
      );
    },
  })}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Academy" component={CodingAcademyScreen}/>
        <Tab.Screen name="About" component={AboutUsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


