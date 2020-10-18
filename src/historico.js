import React, { useEffect, useState, useRef, cloneElement } from "react";

import { Form } from 'react-native-autofocus';

import {Image, TextInput} from 'react-native';

import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";


import IconsFeather from 'react-native-vector-icons/Feather';

const Historico = props => {
   
    async function makelogin(){
        props.navigation.navigate("Principal");  
    }


return (
   
        <SafeAreaView>
            <>
            <View style={[styles.container]}>
                <View style={styles.tituloInicio}>
                    
                        <Text style={styles.tituloInicioTxt}>Histórico</Text>
                   
                    
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={() => therapistspage()}
                        >
                        <IconsFeather style={styles.icone} name="plus-circle"/>
                        </TouchableOpacity>

                    
                </View>
                
                
                    
                    
            </View>
               
            
            </>
        </SafeAreaView>
   
);
};
export default Historico;

const styles = StyleSheet.create({

    
    container: {
        flex: 1,
        backgroundColor: "#b3dcf4",
        alignItems: "center",
        justifyContent: 'flex-start',
        top: 20,
        minHeight:"100%",
    },


    tituloInicioTxt: {
        
        color: "#7b8d93",
        fontSize: 30,
        top: 30,
    },

    tituloInicioTxt: {
        display: "flex",
        color: "#7b8d93",
        fontSize: 30,
        top: 30,
        
        
    },
    

    tituloCadastroTxt: {
        color: "#7b8d93",
        fontSize: 20,
    },

    icone:{
        marginRight: 50,
    }
   

});