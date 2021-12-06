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
<<<<<<< Updated upstream
        <StatusBar barStyle="light-content" style={barStyles.statusBar} />
        {TopBar}
=======
        <ProgressChart
          style={{ paddingTop: 20, flex: 1 }}
          data={data}
          width={400}
          height={250}
          strokeWidth={10}
          radius={100}
          chartConfig={chartConfig}
          hideLegend={true}
        />

        
        <Container>
          <ScrollView width={300}>
            <Text style={{ padding: 10, color: 'white' }}>Study</Text>
            <Progress.Bar progress={0.3} width={250} /> 
            <Text style={{ padding: 10, color: 'white' }}> 30% </Text>

            <Text style={{ padding: 10, color: 'white' }}>Work</Text>
            <Progress.Bar progress={0.3} width={250} />
            <Text style={{ padding: 10, color: 'white' }}> 30% </Text>

            <Text style={{ padding: 10, color: 'white' }}>Exercise</Text>
            <Progress.Bar progress={0.3} width={250} />
            <Text style={{ padding: 10, color: 'white' }}> 30% </Text>

            <Text style={{ padding: 10, color: 'white' }}>Assginment</Text>
            <Progress.Bar progress={0.3} width={250} />
            <Text style={{ padding: 10, color: 'white' }}> 30% </Text>
          </ScrollView>
        </Container>

>>>>>>> Stashed changes
      </Container>
      </ThemeProvider>
    );
}

