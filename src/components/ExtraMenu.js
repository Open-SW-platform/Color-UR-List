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


const ExtraMenu = ({ExtraVisible,setExtraVisible,DeleteMode,setDeleteMode,openTheme,selectAll,deselectAll,setVisibleMode}) => {
 
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
    <TouchableOpacity onPressOut={() => { setVisibleMode('Uncompleted'); }  }>
    <Text style={textStyles.moremenu}> View Uncompleted </Text>
    </TouchableOpacity>
</View>

<View style={textStyles.menu}>
    <TouchableOpacity onPressOut={() => { setVisibleMode('Completed'); }  }>
    <Text style={textStyles.moremenu}> View Completed </Text>
    </TouchableOpacity>
</View>

<View style={textStyles.menu}>
    <TouchableOpacity onPressOut={() => { setVisibleMode('ViewAll'); }  }>
    <Text style={textStyles.moremenu}> View All </Text>
    </TouchableOpacity>
</View>

<View style={textStyles.menu}>
    <TouchableOpacity onPressOut={() =>{ selectAll(); }}>
    <Text style={textStyles.moremenu}> Select All </Text>
    </TouchableOpacity>
</View>



<View style={textStyles.menu}>
    <TouchableOpacity onPressOut={() => { deselectAll();}}>
    <Text style={textStyles.moremenu}> Deselect All </Text>
    </TouchableOpacity>
</View>
</Container>
</Modal>

  );

}


export default ExtraMenu;
