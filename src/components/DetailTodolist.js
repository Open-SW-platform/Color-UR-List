import React, { useState } from 'react';
import { Alert, Modal, Text, ToastAndroid, View, ScrollView } from 'react-native';
import { viewStyles, modalStyles, textStyles } from '../styles'
import PickImage from './PickImage'; //세부사항 모달창 이미지 삽입 모듈
import IconButton from './IconButton';
import Memo from './Memo';
import TodolistInput from './TodolistInput';
import { images } from '../images';
import {Calendar,LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug','Sep.','Oct.','Nov.','Dec.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['SUN', 'MON','TUE','WED','THU','FRI','SAT'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';


const DetailTodolist = ({detailVisible,setDetailVisible}) => {
    const [dueDate, setDueDate] = useState("");
    return (
        <Modal // Task > 클릭시 띄우는 세부사항 모달
        animationType="slide"
        transparent={true}
        visible={detailVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setDetailVisible(!detailVisible);
        }}>

        <View style={modalStyles.modalView}>
          <View style={viewStyles.settingGroup}>
            <IconButton type={images.check} onPressOut={() => {setDetailVisible(!detailVisible);}} />
            <IconButton type={images.trash} onPressOut={() => alert('delete')} />
            <IconButton type={images.cancle} onPressOut={() => {setDetailVisible(!detailVisible);}} />
          </View>
          <TodolistInput />
          <ScrollView style={{ width: '100%', marginLeft: 20, marginRight: 8}}>
            <Text style={modalStyles.modalText}>Note</Text>
            <Memo />
            <PickImage/>
            <Text style={modalStyles.modalText}>Due date : {dueDate}</Text>
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
            'to select the due date, press longer',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );   
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          console.log('selected day', day);
          ToastAndroid.showWithGravity(
            'selected the due date',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
          setDueDate(day.dateString);
        }}
        markedDates={{
          [dueDate]: {selected: true, selectedColor: 'orange'}
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {console.log('month changed', month)}}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={false}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
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
        disableArrowLeft={false}
        // Disable right arrow. Default = false
        disableArrowRight={false}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={false}
        /** Replace default month and year title with custom one. the function receive a date as parameter. */
        //renderHeader={(date) => {/*Return JSX*/}}
        />
        </ScrollView>
        </View>
      </Modal>
  
    );
  
  }
  
  
  export default DetailTodolist;