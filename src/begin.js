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


const Begin = props => {
    const [showPassword, setShowPassword] = useState(false);
    async function makelogin(){
        props.navigation.navigate("Principal");  
    }

    async function makecadastro(){
        props.navigation.navigate("Cadastro");  
    }

return (
   
        <SafeAreaView>
            <>
            <View style={[styles.container]}>
                <View style={[styles.tituloInicio]}>
                    <Text style={styles.tituloInicioTxt}>Bem vindo{"\n"} ao DailyMind!</Text>
                </View>
                <View  style={styles.imagem}>
                    <Image
                        style={styles.inicioLogin}
                        source={require('../imgs/login_11.png')}
                    />
                </View>

                <View style={styles.inputWhite}>
                            <TextInput 
                             style={{
                                marginLeft: 8,
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}
                
                                placeholder='Seu Nome'
                                keyboardType='default'
                            />
                </View>
                <View style={styles.inputWhite}>
                            <TextInput 
                             style={{
                                marginLeft: 8,
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}
                               
                                returnKeyType='done'
                                keyboardType='default'
                                placeholder='Senha'
                                keyboardType='default'
                                secureTextEntry={!showPassword}
                            />
                </View>
                <TouchableOpacity
                        style={styles.buttonWhite}
                        onPress={() => makelogin()}
                    >
                    <Text style={styles.tituloEntrarTxt}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                        style={styles.button}
                        onPress={() => makecadastro()}
                    >
                    <Text style={styles.tituloCadastroTxt}>Cadastre-se</Text>
                </TouchableOpacity>
                    
                    
            </View>
               
            
            </>
        </SafeAreaView>
   
);
};
export default Begin;

const styles = StyleSheet.create({

    buttonWhite: {
		height: 50,
        minWidth: "90%",
        marginBottom: 10,
        // paddingLeft: 15,
        justifyContent: "center",
        alignItems: "center",	
    },
    
    container: {
        flex: 1,
        backgroundColor: "#b3dcf4",
        alignItems: "center",
        justifyContent: 'flex-start',
        top: 20,
        minHeight:"100%",
    },

    tituloEntrarTxt: {
        color: "#7b8d93",
        fontSize: 30,
    },

    tituloCadastroTxt: {
        color: "#7b8d93",
        fontSize: 20,
    },

    tituloInicio: {
        top:50,
    },

    imagem: {
        top:100,
        marginBottom: 100,
        alignItems: "center",
    },

    tituloInicioTxt: {
        color: "#7b8d93",
        fontSize: 50,
        textAlign: "center",
    },

    inicioLogin: {
        width: 150,
        height: 150,
    },

    inputWhite: {
        
        height: 50,
        minWidth: "80%",
        marginBottom: "3%",
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderColor: "#D6E4EC",
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },

});