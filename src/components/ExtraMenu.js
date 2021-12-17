import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from 'react-native';
import { viewStyles,textStyles } from '../styles'
import styled from 'styled-components/native';

const Container =styled.View`
background-color : white;
align-items : center;
width : 200px;
height : 200px;
margin-top : 12%;
margin-left : 51%;

`;

const HorizentalLine = styled.View`
  background-color: lightgray;
  height: 1px;
  align-self: stretch;
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

            <HorizentalLine />

            <View style={textStyles.menu}>
                <TouchableOpacity onPressOut={() => { setVisibleMode('Uncompleted'); setExtraVisible(false);}  }>
                <Text style={textStyles.moremenu}> View Uncompleted </Text>
                </TouchableOpacity>
            </View>

            <HorizentalLine />

            <View style={textStyles.menu}>
                <TouchableOpacity onPressOut={() => { setVisibleMode('Completed'); setExtraVisible(false);}  }>
                <Text style={textStyles.moremenu}> View Completed </Text>
                </TouchableOpacity>
            </View>

            <HorizentalLine />

            <View style={textStyles.menu}>
                <TouchableOpacity onPressOut={() => { setVisibleMode('ViewAll'); setExtraVisible(false);}  }>
                <Text style={textStyles.moremenu}> View All </Text>
                </TouchableOpacity>
            </View>

            <HorizentalLine />

            <View style={textStyles.menu}>
                <TouchableOpacity onPressOut={() =>{ selectAll(); setExtraVisible(false);}}>
                <Text style={textStyles.moremenu}> Select All </Text>
                </TouchableOpacity>
            </View>

            <HorizentalLine />

            <View style={textStyles.menu}>
                <TouchableOpacity onPressOut={() => { deselectAll(); setExtraVisible(false);}}>
                <Text style={textStyles.moremenu}> Deselect All </Text>
                </TouchableOpacity>
            </View>
        </Container>
    </Modal>

  );

}


export default ExtraMenu;
