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
import Principal from './src/principal';
import Sentimentos from './src/sentimentos';
import Therapists from './src/therapists';
import Cadastro from './src/cadastro';
import Historico from './src/historico';
import Cvv from './src/cvv.js';

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
          <Stack.Screen name='Cadastro' component={Cadastro} />
          <Stack.Screen name='Principal' component={Principal} />
          <Stack.Screen name='Sentimentos' component={Sentimentos} />
          <Stack.Screen name='Therapists' component={Therapists} />
          <Stack.Screen name='Historico' component={Historico} />
          <Stack.Screen name='Cvv' component={Cvv} />

        </Stack.Navigator>
        <StatusBar style="light"  />
      </NavigationContainer>
    );
  }


export default App;