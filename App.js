import "react-native-gesture-handler";
import React from "react";

import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";



import { StyleSheet, SafeAreaView } from "react-native";



import Begin from './src/begin';

const Stack = createStackNavigator();

function App() {
 
    return (
      <NavigationContainer>
       
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            gestureEnabled: true,
          }}
        >

          <Stack.Screen name='Begin' component={Begin} />
         
          
        </Stack.Navigator>
        <StatusBar style="light"  />
      </NavigationContainer>
    );
  }


export default App;