

import { Form } from 'react-native-autofocus';

import React, { useState } from "react";



import {
    CheckBox,
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Button,
} from "react-native";



import IconsFeather from 'react-native-vector-icons/Feather';

const SintomasDepressao = props => {
    async function pronto(){
        props.navigation.navigate("Principal");  
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
                    <Text style={styles.tituloEntrarTxt}>Sintomas de Depressão</Text>
                </View>
                <View style={styles.checkboxContainer}>
                
                    <View style={styles.inputWhite}>
                        <TouchableHighlight
                                style={styles.buttonWhite}
                                onPress={() => console.log("button pressed")}
                                activeOpacity={0.6}
                                underlayColor="#00FF00"
                            >
                            <Text style={styles.tituloEntrarTxt}>Desânimo</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.inputWhite}>
                        <TouchableHighlight
                                style={styles.buttonWhite}
                                onPress={() => console.log("button pressed")}
                                activeOpacity={0.6}
                                underlayColor="#00FF00"
                            >
                            <Text style={styles.tituloEntrarTxt}>Desinteresse</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.inputWhite}>
                        <TouchableHighlight
                                style={styles.buttonWhite}
                                onPress={() => console.log("button pressed")}
                                activeOpacity={0.6}
                                underlayColor="#00FF00"
                            >
                            <Text style={styles.tituloEntrarTxt}>Cansaço</Text>
                        </TouchableHighlight>
                    </View>
                 

                </View>
                <View style={styles.checkboxContainer}>
                
                    <View style={styles.inputWhite}>
                        <TouchableHighlight
                                style={styles.buttonWhite}
                                onPress={() => console.log("button pressed")}
                                activeOpacity={0.6}
                                underlayColor="#00FF00"
                            >
                            <Text style={styles.tituloEntrarTxt}>Falta de concentração</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.inputWhite}>
                        <TouchableHighlight
                                style={styles.buttonWhite}
                                onPress={() => console.log("button pressed")}
                                activeOpacity={0.6}
                                underlayColor="#00FF00"
                            >
                            <Text style={styles.tituloEntrarTxt}>Auto-estima baixa</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.inputWhite}>
                        <TouchableHighlight
                                style={styles.buttonWhite}
                                onPress={() => console.log("button pressed")}
                                activeOpacity={0.6}
                                underlayColor="#00FF00"
                            >
                            <Text style={styles.tituloEntrarTxt}>Tristeza Constante</Text>
                        </TouchableHighlight>
                    </View>
                 

                </View>
                <View style={styles.checkboxContainer}>
                
                    <View style={styles.inputWhite}>
                        <TouchableHighlight
                                style={styles.buttonWhite}
                                onPress={() => console.log("button pressed")}
                                activeOpacity={0.6}
                                underlayColor="#00FF00"
                            >
                            <Text style={styles.tituloEntrarTxt}>etc</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.inputWhite}>
                        <TouchableHighlight
                                style={styles.buttonWhite}
                                onPress={() => console.log("button pressed")}
                                activeOpacity={0.6}
                                underlayColor="#00FF00"
                            >
                            <Text style={styles.tituloEntrarTxt}>etc</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.inputWhite}>
                        <TouchableHighlight
                                style={styles.buttonWhite}
                                onPress={() => console.log("button pressed")}
                                activeOpacity={0.6}
                                underlayColor="#00FF00"
                            >
                            <Text style={styles.tituloEntrarTxt}>etc</Text>
                        </TouchableHighlight>
                    </View>
                 

                </View>

                <TouchableOpacity
                        style={styles.buttonNext}
                        onPress={() => pronto()}
                    >
                    <Text style={styles.tituloCadastroTxt}>Pronto</Text>
                </TouchableOpacity>
                
               
                
                            
            </View>
               
            
            </>
        </SafeAreaView>
   
);
};
export default SintomasDepressao;

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: "#b3dcf4",
        alignItems: "center",
        justifyContent: 'flex-start',
        top: 20,
        minHeight:"100%",
    },

    checkboxContainer: {
        flexDirection: "row",
        backgroundColor: "#b3dcf4",
        //alignItems: "center",
        //justifyContent: "space-evenly",
        top: 70,
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

    tituloEntrarTxt: {
        color: "#7b8d93",
        textAlign: 'center',
        fontSize: 16,
    },

    buttonWhite: {
		height: 50,
        minWidth: "30%",
        marginBottom: 10,
        // paddingLeft: 15,
        justifyContent: "center",
        alignItems: "center",	
    },

    buttonNext: {
        top: "35%",
        height: 50,
        minWidth: "90%",
        marginBottom: 10,
        // paddingLeft: 15,
        justifyContent: "center",
        alignItems: "flex-end"	
    },

    inputWhite: {
        
        height: 100,
        width: 100,
        //minHeight: "60%",
        //minWidth: "30%",
        marginBottom: "0%",
        paddingLeft: 0,
        paddingRight: 0,
        borderWidth: 1,
        borderColor: "#D6E4EC",
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },



});