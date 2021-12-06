import React from 'react';
import { View, StatusBar } from 'react-native';
import { Container, barStyles, viewStyles } from '../styles'
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../theme';
import Today from '../components/Today';
import { LineChart } from "react-native-chart-kit";

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


    var TopBar =
        <View style={viewStyles.settingView} >
            <Today />
        </View>

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar barStyle="light-content" style={barStyles.statusBar} />
                {TopBar}
                <LineChart
                    style={{ paddingTop: 20, flex: 1 }}
                    data={data}
                    width={400}
                    height={250}
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    bezier
                />
            </Container>
        </ThemeProvider>
    );
}

