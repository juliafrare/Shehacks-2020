import React, { useEffect, useState, useRef, cloneElement } from "react";

import { Form } from 'react-native-autofocus';

import {Image, Linking, Button, Alert} from 'react-native';

import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

const URL1 = "https://www.cvv.org.br/ligue-188/";
const URL2 = "https://www.cvv.org.br/chat/";
const URL3 = "https://www.cvv.org.br/e-mail/";

const OpenURLButton = ({ url, children }) => {
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

const CVV = props => {
    async function makelogin(){
        props.navigation.navigate("Principal");  
    }
    async function gotolink(url){
        const supported = await Linking.canOpenURL(url);
    }

return (
   
        <SafeAreaView>
            <>
            <View style={[styles.container]}>
                <View style={[styles.tituloInicio]}>
                    <Text style={styles.tituloInicioTxt}>Centro de Valorização à Vida</Text>
                </View>
                <View  style={styles.imagem}>
                    <Text style={{minWidth: "80%", paddingLeft: 10, paddingRight: 10, paddingBottom: 10}}>Você pode conversar com um voluntário do CVV ligando para 188 de todo o território nacional, 24 horas todos os dias de forma gratuita.{"\n"}{"\n"}

Como em qualquer outra forma de contato com o CVV, você é atendido por um voluntário, com respeito, anonimato, que guardará estrito sigilo sobre tudo que for dito e de forma gratuita.{"\n"}{"\n"}

Os voluntários são treinados para conversar com todas as pessoas que procuram ajuda e apoio emocional.{"\n"}{"\n"}

Se você preferir escrever, pode utilizar o atendimento por chat e email disponível nos ícones abaixo.</Text>
                </View>

                <View style={styles.inputWhite}>
                    <TouchableOpacity
                            style={styles.buttonWhite}
                            onPress={() => makelogin()}
                        >
                        <Text style={styles.tituloEntrarTxt}>188</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputWhite}>
                    <TouchableOpacity
                            style={styles.buttonWhite}
                            onPress={() => makelogin()}
                        >
                        <Text style={styles.tituloEntrarTxt}>Chat</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputWhite}>
                    <TouchableOpacity
                            style={styles.buttonWhite}
                            onPress={() => makelogin()}
                        >
                        <Text style={styles.tituloEntrarTxt}>Email</Text>
                    </TouchableOpacity>
                </View>
                    
                    
            </View>
               
            
            </>
        </SafeAreaView>
   
);
};
export default CVV;

const styles = StyleSheet.create({

    buttonWhite: {
		height: 50,
        minWidth: "30%",
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
        top:70,
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
        minWidth: "30%",
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