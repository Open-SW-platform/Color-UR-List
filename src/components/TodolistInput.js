import React from 'react';
import { images } from '../images';
import {StyleSheet, TextInput,View } from 'react-native';
import {theme} from '../theme';
import IconButton from './IconButton';
const TodolistInput = ({newTask}) => {
    return (
        <View style= {styles.container}> 
        <IconButton type={images.todo}/>
        <View style={{backgroundColor:'white'}}>
        <TextInput style={styles.textInput}>To Do List</TextInput> 
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
        height : '10%',
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