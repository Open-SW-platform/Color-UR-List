import React from 'react';
import {StyleSheet, View,TextInput,Text} from 'react-native';
import {viewStyles} from '../styles'
import { theme } from '../theme';

const Goal = (themeColor) => {
    return (
        <View style={[viewStyles.goalView, {backgroundColor: theme.itemBackground, borderColor: themeColor.themeColor}]}/** 목표 작성부분*/>
          <Text style={{padding:10, margin:0, fontSize: 20 ,color: '#808080'}}>TODAY'S GOAL</Text>
        <TextInput
          style={{ paddingLeft: 10, fontSize: 20}} />
      </View>
    );
};

export default Goal;