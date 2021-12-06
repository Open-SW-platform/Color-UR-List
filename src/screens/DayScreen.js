import React from 'react';
import { View, StatusBar } from 'react-native';
import {Container, barStyles, viewStyles} from '../styles'
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../theme';


import Today from '../components/Today';

export default function DayScreen() {

  var TopBar =
  <View style={viewStyles.settingView} >
    <Today />
  </View>

    return (
      <ThemeProvider theme= {theme}>
      <Container>
        <StatusBar barStyle="light-content" style={barStyles.statusBar} />
        {TopBar}
      </Container>
      </ThemeProvider>
    );
}

