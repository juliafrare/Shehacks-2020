import React, { useEffect, useState, useRef, cloneElement } from "react";

import {  Form } from 'react-native-autofocus';

import {Image, TextInput} from 'react-native';

import {
    CheckBox,
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import IconsFeather from 'react-native-vector-icons/Feather';

const Consulta = props => {
    async function goback(){
        props.navigation.navigate("Principal");  
    }
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
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
                    <Text style={styles.tituloInicioTxt}>Psicólogo</Text>
                    <Text style={styles.tituloInicioTxt2}>Por meio do DailyMind você pode marcar {"\n"}
                    consultar com psicólogos!</Text>
                </View>
                <View style={styles.containerPerfil}>
                    <Image
                                style={{width: 150, height: 150,alignSelf:"center"}}
                                source={require('../imgs/images.png')}
                    />
                    <Text style={styles.nomePsicologo}>Bruno Silva</Text>
                    <Text style={styles.nomeCidade}>São Paulo,Brasil</Text>
                   
                    <Text style={styles.especializacao}>Horários Disponíveis</Text>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Segunda 19/10, 17:00</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        value={isSelected2}
                        onValueChange={setSelection2}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Quarta 21/10, 10:00</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        value={isSelected3}
                        onValueChange={setSelection3}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Sábado 24/10, 11:00</Text>
                    </View>
                    <TouchableOpacity style={ styles.button2} onPress={() => props.navigation.navigate("Principal")}>
                            <Text style={styles.registerText}>Confirmar</Text>
                    </TouchableOpacity>
                </View>

                
                
            </View>
            
            </>

        </SafeAreaView>
   
    );
};

export default Consulta;

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        
    },

    checkbox: {
        alignSelf: "center",
    },

    nomePsicologo:{
        color:"#9DA6A9",
        textAlign: "center",
        fontSize: 22,
    },

    label: {
        margin: 8,
        color: "#888888",
    },

    button2:{
        height: 50,
        
        width: 200,
        alignSelf:"center",
	    marginTop: 10,
        // paddingLeft: 15,
        
        justifyContent: "center",
        alignItems: "center",
        borderColor: "transparent",
        borderRadius: 8,

        elevation: 3,
        backgroundColor: "#7B8D93",
    },
    nomeCidade:{
        color:"#9DA6A9",
        textAlign: "center",
        fontSize: 15,
    },

    especializacao:{
        marginTop:8,
        color: "#888888",
        textAlign: "center",
        fontSize: 20,
    },

    dados:{
        marginTop:8,
        color: "#888888",
        textAlign: "center",
        fontSize: 15,
    },

    container: {
        flex: 1,
        backgroundColor: "#b3dcf4",
        alignItems: "center",
        justifyContent: 'flex-start',
        top: 20,
        minHeight:"100%",
    },

    icone:{
        color: "#7b8d93",
        fontSize: 25,
    },

    tituloInicio: {
        top:50,
        marginBottom: "20%",
    },

    tituloInicioTxt: {
        color: "#7b8d93",
        fontSize: 50,
        textAlign: "center",
    },

    tituloInicioTxt2: {
        color: "#7b8d93",
        fontSize: 15,
        textAlign: "center",
        marginTop: 15,
    },

    containerPerfil:{
        backgroundColor: "#CFD8DC",
        minWidth: "80%",
        minHeight: "62%",
        alignContent: "center",
    },

    imagemPerfil:{
        width: 38,
        minHeight: 38,
        marginLeft: 40,
    }

    
   
});