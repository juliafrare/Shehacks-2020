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

const Historico = props => {
    async function goback(){
        props.navigation.navigate("Principal");  
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
                    <Text style={styles.tituloInicioTxt}>Histórico</Text>
                </View>
                <View style={styles.classificacaoSentimento}>
                    <Text style={styles.txtSentimento}>Sua classificação nos últimos 7 dias é:</Text>
                    <View style={styles.classificacaoAmarela}>
                        <Image
                            style={styles.imagemCirculo}
                            source={require('../imgs/circulo.png')}
                        />
                        <Text style={styles.imagemCirculoTxt}>Amarelo</Text>
                    </View>
                    <Text style={styles.recomendacaoTxt}>Recomendações para a semana:</Text>
                    <Text style={styles.recomendacaoTxt1}>Não pegue pesado consigo mesmo e{"\n"} busque fazer algo que você gosta.</Text>
                </View>

                <View style={styles.classificacaoSentimento2}>
                         <Image
                            style={styles.imagemCalendario}
                            source={require('../imgs/calendario.png')}
                        />
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

    classificacaoSentimento:{
        backgroundColor: "#FFFFFF",
        minWidth: "90%",
        minHeight: 200,
        padding: 15,
    },

    classificacaoSentimento2:{
        backgroundColor: "#FFFFFF",
        minWidth: "90%",
        minHeight: 230,
        marginTop: 40,
        justifyContent: "center",
        alignContent: "center",
        paddingLeft:  50,
    },

    txtSentimento:{
        color: "#7b8d93",
        fontSize: 12,
    },

    tituloEntrarTxt: {
        color: "#7b8d93",
        fontSize: 30,
        
    },

    icone:{
        color: "#7b8d93",
        fontSize: 25,
    },

    tituloCadastroTxt: {
        color: "#7b8d93",
        fontSize: 20,
    },

    tituloInicio: {
        top:50,
        marginBottom: "20%",
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


    imagemCirculo: {
        width: 60,
        height: 60,
    },

    imagemCalendario:{
        width: 230,
        height: 220,
    },

    classificacaoAmarela:{
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 10,
        marginBottom: 10,
        
    },

    imagemCirculoTxt:{
        color: "#7b8d93",
        fontSize: 20,
        paddingTop: 15,
        paddingLeft: 10,
    },

    recomendacaoTxt:{
        color: "#7b8d93",
        fontSize: 18,
    },

    recomendacaoTxt1:{
        color: "#7b8d93",
        fontSize: 14,
    }

});