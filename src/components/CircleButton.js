import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const CircleButton = (props)=> {
    
  console.log(props.color);
 
        return (
            <TouchableOpacity 
            style={[styles.button,{backgroundColor: props.color } ]}
            onPress={props.onPress}> 
            </TouchableOpacity>
        );
    
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        marginBottom: 30,
        borderRadius: 35,
        
        

        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.2)',
                shadowOpacity: 1,
                shadowOffset: {height: 2, width: 2},
                shadowRadius: 2,
            },

            android: {
                elevation: 0,
                marginHorizontal: 30,
            },
        })
    },

});

export default CircleButton;