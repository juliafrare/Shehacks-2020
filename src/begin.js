import React, { useEffect, useState, useRef, cloneElement } from "react";



import {Image} from 'react-native';

import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput as Inputzao
} from "react-native";


const Begin = props => {


return (
   
        <SafeAreaView>
            <>
            <View style={[styles.container]}>
                <Text>Consulte com profissionais qualificados 
                    sem sair de casa</Text>
            </View>
               
            
            </>
        </SafeAreaView>
   
);
};
export default Begin;

const styles = StyleSheet.create({
    container:{
        marginTop:50,
    },
});