import React from 'react';
import {StyleSheet, TextInput,View,Text} from 'react-native';
import {theme} from '../theme';
import CircleButton from './CircleButton'
const TodolistInput = () => {
    return (
        <View style= {styles.container}> 
        <CircleButton/>
        <View style={{backgroundColor:'orange'}}>
        <TextInput 
        style = {styles.textInput}
        placeholder= "To do list"
        multiline={false} />  
        <Text>카테고리 드롭다운 자리</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        borderBottomWidth : 2,
        borderBottomColor: '#e3e3e3',
        width : '100%',
        height : '20%',
        
       
    },
    textInput: {
        width: 100,
        fontSize: 20,
        borderRadius: 10,
        color: 'black',
        backgroundColor : 'yellow',
        fontWeight : 'bold',
        marginTop: 10,
        marginBottom: 10,
        
       
      
    },
});

export default TodolistInput;