import React from 'react';
import {StyleSheet, View,TextInput} from 'react-native';
import {viewStyles} from '../styles'

const Goal = () => {
    return (
        <View style={viewStyles.goalView}/** 목표 작성부분*/>
        <TextInput
          style={{ padding: 10, fontSize: 20 }}
          placeholder="TODAY'S GOAL" />
      </View>
    );
};

export default Goal;