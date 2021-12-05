import React, {useState} from 'react';
import { images } from '../images';
import {StyleSheet, Text, TextInput, View } from 'react-native';
import {theme} from '../theme';
import IconButton from './IconButton';
const TodolistInput = ({newTask, dueDate,item}) => {
  
    console.log(item);
    return (
        <View style= {styles.container}> 

        <IconButton type = {item.completed? images.checked :images.unchecked}/>
        <View style={{backgroundColor:'white'}}>
        <TextInput style={styles.textInput}> {item.text}</TextInput>
        <Text style={styles.textDueDate}> Due Date: {dueDate}</Text>
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
        height : 80,
    },
    textInput: {
        width: 200,
        height: 30,
        fontSize: 20,
        borderRadius: 10,
        color: 'black',
        backgroundColor : 'yellow',
        fontWeight : 'bold',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
    },
    textDueDate: {
        width: 140,
        fontSize: 13,
        borderRadius: 10,
        color: 'black',
        backgroundColor : 'orange',
        fontWeight : 'bold',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
    },
});

export default TodolistInput;