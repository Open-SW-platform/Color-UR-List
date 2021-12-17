import React from 'react';
import { Text, View, StatusBar, ScrollView } from 'react-native';
import { Container, barStyles, viewStyles } from '../styles'
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../theme';
import Today from '../components/Today';
import { LineChart } from "react-native-chart-kit";
import * as Progress from 'react-native-progress';


export default function WeekScreen() {

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
        labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        datasets: [
            {
                data: [0, 4, 2, 8, 9, 4, 2],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
    };

    var studyProgress = 1;
    var studyProgressPercentage = 100;
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
            {TopBar}<Container>
                <LineChart
                    style={{ paddingTop: 20, flex: 1 }}
                    data={data}
                    width={400}
                    height={250}
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    verticalLabelRotation={0}
                    bezier
                />
                <Container>
                    <ScrollView width={350}>
                        <Text style={{ fontSize: 20, paddingLeft: 10, color: 'black' }}>Study</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Progress.Bar progress={studyProgress} width={270} height={10} style={{ margin: 10 }} />
                            <Text style={{ fontSize: 20, margin: 5, color: 'black' }}> {studyProgressPercentage}% </Text>
                        </View>

                        <Text style={{ fontSize: 20, paddingLeft: 10, paddingTop: 10, color: 'black' }}>Work</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Progress.Bar progress={workProgress} width={270} height={10} style={{ margin: 10 }} />
                            <Text style={{ fontSize: 20, margin: 5, color: 'black' }}> {workProgressPercentage}% </Text>
                        </View>

                        <Text style={{ fontSize: 20, paddingLeft: 10, paddingTop: 10, color: 'black' }}>Exercise</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Progress.Bar progress={exerciseProgress} width={270} height={10} style={{ margin: 10 }} />
                            <Text style={{ fontSize: 20, margin: 5, color: 'black' }}> {exerciseProgressPercentage}% </Text>
                        </View>

                        <Text style={{ fontSize: 20, paddingLeft: 10, paddingTop: 10, color: 'black' }}>Assignment</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Progress.Bar progress={assignmentProgress} width={270} height={10} style={{ margin: 10 }} />
                            <Text style={{ fontSize: 20, margin: 5, color: 'black' }}> {assignmentProgressPercentage}% </Text>
                        </View>
                    </ScrollView>
                </Container>
            </Container>
        </ThemeProvider>
    );
}

