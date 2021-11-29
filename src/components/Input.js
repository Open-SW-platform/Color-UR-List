import React from 'react';
import {StyleSheet, TextInput, Dimensions} from 'react-native';
import { viewStyles } from '../styles';
import {theme} from '../theme';

const Input = ({value, onChangeText, onSubmitEditing}) => {
    return (
        <TextInput style = {inputStyle.textInput}
            placeholder = "My Todo List"
            placeholderTextColor = {theme.main}
            maxLength={20}
            value={value} 
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}>
        </TextInput>
    );
};

const inputStyle = StyleSheet.create({
    textInput: {
        fontSize: 25,
        height: 30,
        marginTop: 10,
        marginLeft: 3,
        paddingLeft: 15,
        paddingTop: 2,
        borderRadius: 10,
        backgroundColor: theme.itemBackground,
        color: theme.text,
    },
});

export default Input;