import React, {useState, useContext} from 'react';
import { Text, View, StatusBar, ScrollView } from 'react-native';
import { textStyles, Container, barStyles, viewStyles } from '../styles'
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../theme';
import { ProgressChart } from 'react-native-chart-kit';
import * as Progress from 'react-native-progress';
import Today from '../components/Today';
import TaskContext from '../contexts/Tasks';

export default function DayScreen() {

  const [themeColor, setThemeColor] = useState('#f9ceee');

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const { tasks } = useContext(TaskContext);

  const totalStudy = Object.values(tasks).filter(item => item.category === 0).length
  const completedStudy = Object.values(tasks).filter(item => ((item.category === 0) && (item.completed === true))).length
  const completedPercentageStudy = Math.floor((completedStudy * 100) / (totalStudy))

  const totalWork = Object.values(tasks).filter(item => item.category === 1).length
  const completedWork = Object.values(tasks).filter(item => ((item.category === 1) && (item.completed === true))).length
  const completedPercentageWork = Math.floor((completedWork * 100) / (totalWork))

  const totalExercise = Object.values(tasks).filter(item => item.category === 3).length
  const completedExercise = Object.values(tasks).filter(item => ((item.category === 3) && (item.completed === true))).length
  const completedPercentageExercise = Math.floor((completedExercise * 100) / (totalExercise))

  const totalAssginment = Object.values(tasks).filter(item => item.category === 2).length
  const completedAssginment = Object.values(tasks).filter(item => ((item.category === 2) && (item.completed === true))).length
  const completedPercentageAssginment = Math.floor((completedAssginment * 100) / (totalAssginment))

  const total = totalStudy + totalWork + totalExercise + totalAssginment
  const completed = completedStudy + completedWork + completedExercise + completedAssginment
  const completedPercentage = Math.floor((completed * 100) / (total));

  var progressChartData = {
    data: [completedPercentage / 100]
  };

  var TopBar =
    <View style={viewStyles.settingView} >
      <Today />
      <Text>                            </Text>
    </View>

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" style={barStyles.statusBar} />
      {TopBar}
      <Container>
        <Text style={{ fontSize: 30, position: 'absolute', zIndex: 2, marginTop: 90, textAlign:'center'}}> Do {completed} tasks {"\n"} today </Text>
        <Text style={{ fontSize: 20, position: 'absolute', zIndex: 2, marginTop: 160, textAlign:'center'}}> Your goal is to {"\n"} complete {total} tasks </Text>
        <ProgressChart
          style={{ paddingTop: 20, flex: 1, position: 'absolute', zIndex: 1 }}
          data={progressChartData}
          width={400}
          height={250}
          strokeWidth={20}
          radius={100}
          chartConfig={chartConfig}
          hideLegend={true}
        />



        <Container style={{marginTop: 400}}>
          <ScrollView width={350} >
            <Text style={{ fontSize: 20, paddingLeft: 15, color: 'black' }}>Study</Text>
            <View style={{ flexDirection: 'row' }} >
              <Progress.Bar progress={completedPercentageStudy / 100} width={270} height={10} color= {themeColor} style={{ margin: 15 }} />
              <Text style={{ fontSize: 20, margin: 5, color: 'black' }}> {completedStudy}/{totalStudy} </Text>
            </View>

            <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 10, color: 'black' }}>Work</Text>
            <View style={{ flexDirection: 'row' }} >
              <Progress.Bar progress={completedPercentageWork / 100} width={270} height={10} color= {themeColor} style={{ margin: 15 }} />
              <Text style={{ fontSize: 20, margin: 5, color: 'black' }}> {completedWork}/{totalWork} </Text>
            </View>

            <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 10, color: 'black' }}>Exercise</Text>
            <View style={{ flexDirection: 'row' }} >
              <Progress.Bar progress={completedPercentageExercise / 100} width={270} height={10} color= {themeColor} style={{ margin : 15 }} />
              <Text style={{ fontSize: 20, margin: 5, color: 'black' }}> {completedExercise}/{totalWork} </Text>
            </View>

            <Text style={{ fontSize: 20, paddingLeft: 15, paddingTop: 10, color: 'black' }}>Assignment</Text>
            <View style={{ flexDirection: 'row' }} >
              <Progress.Bar progress={completedPercentageAssginment / 100} width={270} height={10} color= {themeColor} style={{ margin: 15 }} />
              <Text style={{ fontSize: 20, margin: 5, color: 'black' }}> {completedAssginment}/{totalAssginment} </Text>
            </View>
          </ScrollView>
        </Container>
      </Container>
    </ThemeProvider>
  );
}

