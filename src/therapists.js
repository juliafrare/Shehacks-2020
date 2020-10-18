import React, { useEffect, useState, useRef, cloneElement } from "react";

import {  Form } from 'react-native-autofocus';

import {Image, TextInput} from 'react-native';

import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

import IconsFeather from 'react-native-vector-icons/Feather';
const Therapists = props => {
    async function goback(){
        props.navigation.navigate("Principal");  
    }

    async function goprofile(){
        props.navigation.navigate("Perfil");  
    }


return (
   
        <SafeAreaView>
            <>
            <View style={[styles.container]}>
                <View style={[styles.tituloInicio]}>
                    <TouchableOpacity
                            style={styles.button}
                            onPress={() => goback()}
                        >
                         <IconsFeather style={styles.icone} name="arrow-left-circle"/>
                    </TouchableOpacity>
                    <Text style={styles.tituloInicioTxt}>Psicólogos</Text>
                </View>

                <TouchableOpacity
                        style={styles.inputWhite}
                        onPress={() => goprofile()}
                    >
                            <Text 
                             style={{
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}>
                                <Image
                                style={{width: 38, height: 38}}
                                source={require('../imgs/images.png')}
                            />
                            &nbsp;&nbsp;Nome</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={styles.inputWhite}
                        onPress={() => goprofile()}
                    >
                            <Text 
                             style={{
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}>
                                <Image
                                style={{width: 38, height: 38}}
                                source={require('../imgs/images.png')}
                            />
                            &nbsp;&nbsp;Nome</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={styles.inputWhite}
                        onPress={() => goprofile()}
                    >
                            <Text 
                             style={{
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}>
                                <Image
                                style={{width: 38, height: 38}}
                                source={require('../imgs/images.png')}
                            />
                            &nbsp;&nbsp;Nome</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={styles.inputWhite}
                        onPress={() => goprofile()}
                    >
                            <Text 
                             style={{
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}>
                                <Image
                                style={{width: 38, height: 38}}
                                source={require('../imgs/images.png')}
                            />
                            &nbsp;&nbsp;Nome</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={styles.inputWhite}
                        onPress={() => goprofile()}
                    >
                            <Text 
                             style={{
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}>
                                <Image
                                style={{width: 38, height: 38}}
                                source={require('../imgs/images.png')}
                            />
                            &nbsp;&nbsp;Nome</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={styles.inputWhite}
                        onPress={() => goprofile()}
                    >
                            <Text 
                             style={{
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}>
                                <Image
                                style={{width: 38, height: 38}}
                                source={require('../imgs/images.png')}
                            />
                            &nbsp;&nbsp;Nome</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={styles.inputWhite}
                        onPress={() => goprofile()}
                    >
                            <Text 
                             style={{
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}>
                                <Image
                                style={{width: 38, height: 38}}
                                source={require('../imgs/images.png')}
                            />
                            &nbsp;&nbsp;Nome</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={styles.inputWhite}
                        onPress={() => goprofile()}
                    >
                            <Text 
                             style={{
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}>
                                <Image
                                style={{width: 38, height: 38}}
                                source={require('../imgs/images.png')}
                            />
                            &nbsp;&nbsp;Nome</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={styles.inputWhite}
                        onPress={() => goprofile()}
                    >
                            <Text 
                             style={{
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}>
                                <Image
                                style={{width: 38, height: 38}}
                                source={require('../imgs/images.png')}
                            />
                            &nbsp;&nbsp;Nome</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={styles.inputWhite}
                        onPress={() => goprofile()}
                    >
                            <Text 
                             style={{
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}>
                                <Image
                                style={{width: 38, height: 38}}
                                source={require('../imgs/images.png')}
                            />
                            &nbsp;&nbsp;Nome</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={styles.inputWhite}
                        onPress={() => goprofile()}
                    >
                            <Text 
                             style={{
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}>
                                <Image
                                style={{width: 38, height: 38}}
                                source={require('../imgs/images.png')}
                            />
                            &nbsp;&nbsp;Nome</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={styles.inputWhite}
                        onPress={() => goprofile()}
                    >
                            <Text 
                             style={{
                                width: '80%',
                                height: '100%',
                                alignSelf: 'stretch',
                                flex: 1,
                                fontSize: 16,
                                
                            }}>
                                <Image
                                style={{width: 38, height: 38}}
                                source={require('../imgs/images.png')}
                            />
                            &nbsp;&nbsp;Nome</Text>
                </TouchableOpacity>
            </View>
            
            </>

        </SafeAreaView>
   
    );
};

export default Therapists;

const styles = StyleSheet.create({

    icone:{
        color: "#7b8d93",
        fontSize: 25,
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
        marginBottom: "30%",
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
        minWidth: "100%",
        marginBottom: "0%",
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderColor: "#D6E4EC",
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: "#cfd8dc",
        alignItems: "center",
        justifyContent: "center",
    },

});