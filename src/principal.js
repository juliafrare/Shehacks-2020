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

const Principal = props => {
    async function makelogin(){
        props.navigation.navigate("Begin");  
    }

    async function marcarSentimentos(){
        props.navigation.navigate("Sentimentos"); 
    }

    async function therapistspage(){
        props.navigation.navigate("Therapists");  
    }

    async function navigateHistorico(){
        props.navigation.navigate("Historico");  
    }

    async function navigateCvv(){
        props.navigation.navigate("Cvv");  
    }

    
return (
   
        <SafeAreaView>
            <>
            <View style={[styles.container]}>
                <View style={[styles.tituloInicio]}>
                    <Text style={styles.tituloInicioTxt}>Olá, Ana!</Text>
                    <Text style={styles.tituloInicio2Txt}>Como você está se sentindo hoje?</Text>
                    
                </View>
                <View style={styles.botoes}>
                    
                    <TouchableOpacity
                            style={styles.button}
                            onPress={() => marcarSentimentos()}
                        >
                        <IconsFeather style={styles.icone} name="plus-circle"/>
                        <Text style={styles.tituloEntrarTxt}>Sentimentos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            style={styles.button}
                            onPress={() => makelogin()}
                        >
                        <IconsFeather style={styles.icone} name="plus-circle"/>
                        <Text style={styles.tituloEntrarTxt}>Sintomas</Text>
                    </TouchableOpacity>
                </View>

               <View style={styles.viewCinza}>
                    <TouchableOpacity
                            style={styles.button2}
                            onPress={() => navigateHistorico()}
                        >
                        <Text style={styles.tituloBotao}>Histórico</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            style={styles.button2}
                            onPress={() => makelogin()}
                        >
                        <Text style={styles.tituloBotao}>Próximas consultas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            style={styles.button2}
                            onPress={() => therapistspage()}
                        >
                        <Text style={styles.tituloBotao}>Procurar psicólogos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            style={styles.button2}
                            onPress={() => navigateCvv()}
                        >
                        <Text style={styles.tituloBotao}>Falar com o CVV</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                            style={styles.button2}
                            onPress={() => makelogin()}
                        >
                        <Text style={styles.tituloBotao}>Configurações</Text>
                    </TouchableOpacity>

                    <View style={styles.viewLembrete}>
                        <Text style={styles.viewLembreteTxt1}>Lembrete: </Text>
                        <Text style={styles.viewLembreteTxt2}>Você tem uma consulta com Bruno Silva no dia{"\n"}
                            20/10, às 14:00 </Text>
                    </View>
               </View>
                
                    
                    
            </View>
               
            
            </>
        </SafeAreaView>
   
);
};
export default Principal;

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
        maxWidth: "90%",
    },

    tituloInicioTxt: {
        color: "#7b8d93",
        fontSize: 40,
        textAlign: "center",
    },

    tituloInicio2Txt: {
        color: "#7b8d93",
        fontSize: 30,
        textAlign: "center",
        top:25,
    },

    button: {
		height: 50,
        minWidth: "90%",
        marginBottom: 10,
        // paddingLeft: 15,
        justifyContent: "center",
        alignItems: "center",	
        flexDirection: 'row',
    },

    button2: {
        minWidth: "90%",
        // paddingLeft: 15,
        justifyContent: "center",
        alignItems: "center",	
        marginBottom: 2,
    },

    tituloEntrarTxt: {
        color: "#7b8d93",
        fontSize: 30,
    },

    tituloBotao:{
        color: "#7b8d93",
        fontSize: 25,
    },

    icone: {
        color: "#7b8d93",
        fontSize: 40,
        marginRight: 10,
    },

    botoes:{
        marginTop:100,
    },

    viewCinza:{
        paddingTop: 15,
        marginTop:30,
        minWidth:"100%",
        minHeight: 500,
        backgroundColor: "#AEC9D8",
    },

    viewLembrete:{
        marginTop:10,
        maxWidth:"100%",
        minHeight: 65,
        backgroundColor: "#5E6568",
        alignItems: "center",	
        flexDirection: 'row',
        paddingLeft: 10,
    },

    viewLembreteTxt1:{
        color: "#FFFFFF",
        fontSize: 20,
    },

    viewLembreteTxt2:{
        color: "#FFFFFF",
        fontSize: 10,
    }

   
});