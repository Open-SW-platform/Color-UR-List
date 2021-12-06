import React from 'react';
import { View, StatusBar } from 'react-native';
import {Container, barStyles, viewStyles} from '../styles'
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../theme';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import Today from '../components/Today';

export default function MonthScreen() {

  var TopBar;

  TopBar =
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