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

  var data = 0.7 // 이 부분은 전체 링
  var progressChartData = {
    data: [data]
  };

  var studyProgress = 1; // 이 부분은 study progress bar
  var studyProgressPercentage = 100; // 이 부분은 study progress bar 옆의 % text
  var workProgress = 0.5;
  var workProgressPercentage = 40;
  var exerciseProgress = 0.5;
  var exerciseProgressPercentage = 40;
  var assignmentProgress = 0.5;
  var assignmentProgressPercentage = 40;

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
          data={progressChartData}
          width={400}
          height={250}
          strokeWidth={20}
          radius={100}
          chartConfig={chartConfig}
          hideLegend={true}
        />
        <Container>
        <ScrollView width={350}>
            <Text style={{ fontSize: 20, paddingLeft: 10, color: 'white' }}>Study</Text>
            <View style={{ flexDirection: 'row' }} >
              <Progress.Bar progress={studyProgress} width={270} height={10} style={{ margin: 10 }} />
              <Text style={{ fontSize: 20, margin: 5, color: 'white' }}> {studyProgressPercentage}% </Text>
            </View>

            <Text style={{ fontSize: 20, paddingLeft: 10, paddingTop: 10, color: 'white' }}>Work</Text>
            <View style={{ flexDirection: 'row' }} >
              <Progress.Bar progress={workProgress} width={270} height={10} style={{ margin: 10 }} />
              <Text style={{ fontSize: 20, margin: 5, color: 'white' }}> {workProgressPercentage}% </Text>
            </View>

            <Text style={{ fontSize: 20, paddingLeft: 10, paddingTop: 10, color: 'white' }}>Exercise</Text>
            <View style={{ flexDirection: 'row' }} >
              <Progress.Bar progress={exerciseProgress} width={270} height={10} style={{ margin: 10 }} />
              <Text style={{ fontSize: 20, margin: 5, color: 'white' }}> {exerciseProgressPercentage}% </Text>
            </View>

            <Text style={{ fontSize: 20, paddingLeft: 10, paddingTop: 10, color: 'white' }}>Assignment</Text>
            <View style={{ flexDirection: 'row' }} >
              <Progress.Bar progress={assignmentProgress} width={270} height={10} style={{ margin: 10 }} />
              <Text style={{ fontSize: 20, margin: 5, color: 'white' }}> {assignmentProgressPercentage}% </Text>
            </View>
          </ScrollView>
        </Container>
      </Container>
    </ThemeProvider>
  );
}

