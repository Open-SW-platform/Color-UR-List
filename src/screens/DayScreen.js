import React from 'react';
import { Text, View, StatusBar, ScrollView } from 'react-native';
import { Container, barStyles, viewStyles } from '../styles'
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../theme';
import { ProgressChart } from 'react-native-chart-kit';
import * as Progress from 'react-native-progress';


import Today from '../components/Today';

export default function DayScreen() {

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    data: [0.4]
  };

  var TopBar =
    <View style={viewStyles.settingView} >
      <Today />
    </View>

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" style={barStyles.statusBar} />
      {TopBar}
      <Container>
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
      </Container>
    </ThemeProvider>
  );
}

