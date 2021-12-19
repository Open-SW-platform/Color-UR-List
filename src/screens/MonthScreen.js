import React, { useState, useContext } from 'react';
import { Text, View, StatusBar, ScrollView } from 'react-native';
import { Container, barStyles, viewStyles } from '../styles'
import { ThemeProvider } from 'styled-components/native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import Today from '../components/Today';
import { ContributionGraph } from "react-native-chart-kit";
import * as Progress from 'react-native-progress';
import TaskContext from '../contexts/Tasks';
import Svg, { Line } from 'react-native-svg';


export default function MonthScreen() {

    const { tasks,themeColor } = useContext(TaskContext);
    

    const totalStudy = Object.values(tasks).filter(item => item.category == 0).length
    const completedStudy = Object.values(tasks).filter(item => ((item.category == 0) && (item.completed == true))).length
    const completedPercentageStudy = Math.floor((completedStudy * 100) / (totalStudy))

    const totalWork = Object.values(tasks).filter(item => item.category == 1).length
    const completedWork = Object.values(tasks).filter(item => ((item.category === 1) && (item.completed == true))).length
    const completedPercentageWork = Math.floor((completedWork * 100) / (totalWork))

    const totalExercise = Object.values(tasks).filter(item => item.category == 3).length
    const completedExercise = Object.values(tasks).filter(item => ((item.category === 3) && (item.completed == true))).length
    const completedPercentageExercise = Math.floor((completedExercise * 100) / (totalExercise))

    const totalAssginment = Object.values(tasks).filter(item => item.category == 2).length
    const completedAssginment = Object.values(tasks).filter(item => ((item.category == 2) && (item.completed == true))).length
    const completedPercentageAssginment = Math.floor((completedAssginment * 100) / (totalAssginment))

    const total = totalStudy + totalWork + totalExercise + totalAssginment
    const completed = completedStudy + completedWork + completedExercise + completedAssginment
    const completedPercentage = Math.floor((completed * 100) / (total));

   

    const chartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        color: (opacity = 1) => `rgba(87, 87, 87, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const commitsData = [
        { date: "2017-01-02", count: 1 },
        { date: "2017-01-03", count: 2 },
        { date: "2017-01-04", count: 3 },
        { date: "2017-01-05", count: 4 },
        { date: "2017-01-06", count: 5 },
        { date: "2017-01-30", count: 2 },
        { date: "2017-01-31", count: 3 },
        { date: "2017-03-01", count: 2 },
        { date: "2017-04-02", count: 4 },
        { date: "2017-03-05", count: 2 },
        { date: "2017-02-30", count: 4 }
    ];

    var TopBar =
        <View style={viewStyles.settingView} >
            <Today />
            <Text>                            </Text>
        </View>

    return (
        <>
            <StatusBar barStyle="light-content" style={barStyles.statusBar} />
            {TopBar}
            <Container>
                <ContributionGraph
                    style={{ paddingLeft: 20, paddingTop: 20, flex: 1, position: 'absolute', zIndex: 0 }}
                    values={commitsData}
                    endDate={new Date("2017-04-01")}
                    numDays={105}
                    width={400}
                    height={300}
                    chartConfig={chartConfig}
                />
                <Svg height="1000" width="1000" style={{ position: 'absolute', zIndex: 3 }}>
                    <Line x1="0" y1="290" x2="1000" y2="290" stroke="#e0e0e0" strokeWidth="2" />
                </Svg>

                <Svg height="1000" width="1000" style={{ position: 'absolute', zIndex: 3 }}>
                    <Line x1="0" y1="380" x2="1000" y2="380" stroke="#e0e0e0" strokeWidth="2" />
                </Svg>

                <Container style={{ marginTop: 310 }}>
                    <View style={{ flexDirection: 'row' }} >
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 20, textAlign: 'center' }}>Total task</Text>
                            <Text style={{ fontSize: 30, textAlign: 'center' }}>{total}</Text>
                        </View>
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 20, textAlign: 'center' }}>Completed</Text>
                            <Text style={{ fontSize: 30, textAlign: 'center' }}>{completed}</Text>
                        </View>
                        <View style={{ marginHorizontal: 25 }}>
                            <Text style={{ fontSize: 20, textAlign: 'center' }}>Rate</Text>
                            <Text style={{ fontSize: 30, textAlign: 'center' }}>{completedPercentage}%</Text>
                        </View>
                    </View>

                    <ScrollView width={350} style={{ marginTop: 50 }} >
                        <Text style={{ fontSize: 20, paddingLeft: 10, color: 'black' }}>Study</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Progress.Bar progress={completedPercentageStudy / 100} width={270} height={10} color={themeColor} style={{ margin: 10 }} />
                            <Text style={{ fontSize: 20, margin: 5, color: 'black' }}> {completedPercentageStudy}% </Text>
                        </View>

                        <Text style={{ fontSize: 20, paddingLeft: 10, paddingTop: 10, color: 'black' }}>Work</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Progress.Bar progress={completedPercentageWork / 100} width={270} height={10} color={themeColor} style={{ margin: 10 }} />
                            <Text style={{ fontSize: 20, margin: 5, color: 'black' }}> {completedPercentageWork}% </Text>
                        </View>

                        <Text style={{ fontSize: 20, paddingLeft: 10, paddingTop: 10, color: 'black' }}>Exercise</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Progress.Bar progress={completedPercentageExercise / 100} width={270} height={10} color={themeColor} style={{ margin: 10 }} />
                            <Text style={{ fontSize: 20, margin: 5, color: 'black' }}> {completedPercentageExercise}% </Text>
                        </View>

                        <Text style={{ fontSize: 20, paddingLeft: 10, paddingTop: 10, color: 'black' }}>Assignment</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Progress.Bar progress={completedPercentageAssginment / 100} width={270} height={10} color={themeColor} style={{ margin: 10 }} />
                            <Text style={{ fontSize: 20, margin: 5, color: 'black' }}> {completedPercentageAssginment}% </Text>
                        </View>
                    </ScrollView>
                </Container>
            </Container>
        </>
    );
}



//아래는 기존에 임시로 있던 캘린더뷰 필요시 히트맵과 합칠 수 있다면 좋을 듯

/*
LocaleConfig.locales['fr'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug','Sep.','Oct.','Nov.','Dec.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['SUN', 'MON','TUE','WED','THU','FRI','SAT'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';



class MonthScreen extends React.Component {
    onDayPress={  };

    render() {
        return (
            <View style={{ paddingTop: 50, flex: 1 }}>
                <CalendarList
  // Callback which gets executed when visible months change in scroll view. Default = undefined
  onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
  // Max amount of months allowed to scroll to the past. Default = 50
  pastScrollRange={50}
  // Max amount of months allowed to scroll to the future. Default = 50
  futureScrollRange={50}
  // Enable or disable scrolling of calendar list
  scrollEnabled={true}
  // Enable or disable vertical scroll indicator. Default = false
  showScrollIndicator={true}

/>
                <Calendar
        // Initially visible month. Default = Date()
        current={Date()}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={undefined}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={undefined}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
            console.log('selected day', day);
            ToastAndroid.showWithGravity(
              day.dateString,
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {console.log('selected day', day)}}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {console.log('month changed', month)}}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => direction === "left" ? (
            <AntDesign name="left" size={20} color="#50cebb" />
            ) : (
            <AntDesign name="right" size={20} color="#50cebb" />
            )
        }
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={true}
        // Disable right arrow. Default = false
        disableArrowRight={true}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        /** Replace default month and year title with custom one. the function receive a date as parameter. */
        //renderHeader={(date) => {/*Return JSX*/}}
/*  />
</View>
  );
}
} */