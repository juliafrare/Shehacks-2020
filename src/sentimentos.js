

import { Form } from 'react-native-autofocus';

import React, { useState } from "react";



import {
    CheckBox,
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Button,
} from "react-native";



import IconsFeather from 'react-native-vector-icons/Feather';

const Sentimentos = props => {
    async function makelogin(){
        props.navigation.navigate("Begin");  
    }

    async function marcarSentimentos(){
        props.navigation.navigate("Sentimentos");  
    }
    const [isSelected, setSelection] = useState(false);
return (
   
        <SafeAreaView>
            <>
            <View style={[styles.container]}>
                <View style={[styles.tituloInicio]}>
                    <Text style={styles.tituloInicioTxt}>Como você está se sentindo hoje?</Text>
                </View>
                <View style={styles.checkboxContainer}>
                 

                </View>
                
               
                
                            
            </View>
               
            
            </>
        </SafeAreaView>
   
);
};
export default Sentimentos;

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: "#b3dcf4",
        alignItems: "center",
        justifyContent: 'flex-start',
        top: 20,
        minHeight:"100%",
    },

    tituloInicio: {
        top:50,
        maxWidth: "80%",
    },

    tituloInicioTxt: {
        color: "#7b8d93",
        fontSize: 35,
        textAlign: "center",
    
    },

    
 
   



});