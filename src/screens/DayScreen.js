import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { images } from '../images';
import IconButton from '../components/IconButton';
import {viewStyles, textStyles, barStyles} from '../styles'



export default function DayScreen() {
    return (
        <View style={viewStyles.settingBar}>
            <Text>  8.30 Monday </Text>
            <IconButton type={images.dropDown} />
        </View>

    );
}


