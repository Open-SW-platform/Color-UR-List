import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SafeAreaView} from 'react-native';
import AppNavigator from '../Navigator/AchieveNavigator';

export default function () {
  return (
      <>
        <SafeAreaView />
        <AppNavigator />
      </>
  );
}
