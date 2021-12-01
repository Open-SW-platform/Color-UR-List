import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {theme} from '../theme';

const Memo = () => {
    return (
        <TextInput 
        style = {inputStyle.textInput}
        placeholder= "Comment"
        multiline={true} />  
    );
};

const inputStyle = StyleSheet.create({
    textInput: {
        fontSize: 15,
        width: 370,
        height: 80,
        marginTop: 10,
        marginLeft: 3,
        paddingLeft: 15,
        paddingTop: 2,
        borderRadius: 10,
        backgroundColor:'#e3e3e3',
        color: 'black',
      
    },
});

export default Memo;