import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from 'react-native';
import { viewStyles,textStyles } from '../styles'
import styled from 'styled-components/native';

const Container =styled.View`
background-color : white;
align-items : center;
width : 160;
height : 160;
margin-top : 13%;
margin-left : 63%;

`;


const ExtraMenu = ({ExtraVisible,setExtraVisible,DeleteMode,setDeleteMode,openTheme}) => {
 
  return (
    <Modal 
        animationType="slide"
        transparent={true}
        visible={ExtraVisible}
        onRequestClose ={()=>{setExtraVisible(!ExtraVisible);}}
        >
        <Container >
    <View >
    <TouchableOpacity onPress={() => {setDeleteMode(!DeleteMode); setExtraVisible(false);}}>
    <Text style={textStyles.moremenu}> Delete </Text>
    </TouchableOpacity>
</View>


<View style={textStyles.menu}>
    <TouchableOpacity onPressOut={() => { console.log('View Uncompleted'); }  }>
    <Text style={textStyles.moremenu}> View Uncompleted </Text>
    </TouchableOpacity>
</View>



<View style={textStyles.menu}>
    <TouchableOpacity onPressOut={() =>{ console.log('select All'); }}>
    <Text style={textStyles.moremenu}> Select All </Text>
    </TouchableOpacity>
</View>



<View style={textStyles.menu}>
    <TouchableOpacity onPressOut={() => { console.log('Deselect All'); }}>
    <Text style={textStyles.moremenu}> Deselect All </Text>
    </TouchableOpacity>
</View>
</Container>
</Modal>

  );

}


export default ExtraMenu;
