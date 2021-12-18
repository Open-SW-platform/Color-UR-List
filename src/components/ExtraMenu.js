import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from 'react-native';
import { viewStyles,textStyles } from '../styles'
import styled from 'styled-components/native';

import IconButton from "./IconButton";
import {images} from "../images";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';


const ExtraMenu = ({ExtraVisible,setExtraVisible,DeleteMode,setDeleteMode,openTheme,selectAll,deselectAll,setVisibleMode},) => {
    const hideMenu = () => setExtraVisible(false);

    const showMenu = () => setExtraVisible(true);


  return (
    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Menu
            visible={ExtraVisible}
            onRequestClose ={hideMenu}
            anchor={ <IconButton onPressOut={showMenu} type={images.dot}/>}
        >

            <MenuItem onPress={() => {setDeleteMode(!DeleteMode); setExtraVisible(false);}}>Delete</MenuItem>
            <MenuDivider />

            <MenuItem onPress={() => {setVisibleMode('Uncompleted'); setExtraVisible(false);}}>View Uncompleted</MenuItem>
            <MenuDivider />

            <MenuItem onPress={() => {setVisibleMode('Completed'); setExtraVisible(false);}}>View Completed</MenuItem>
            <MenuDivider />

            <MenuItem onPress={() => {setVisibleMode('ViewAll'); setExtraVisible(false);}}>View All</MenuItem>
            <MenuDivider />

            <MenuItem onPress={() => {selectAll(); setExtraVisible(false);}}>Select All</MenuItem>
            <MenuDivider />

            <MenuItem onPress={() => { deselectAll(); setExtraVisible(false);}}>Deselect</MenuItem>
            <MenuDivider />
        </Menu>
    </View>

  );

}



export default ExtraMenu;
