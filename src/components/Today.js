import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {images} from '../images'
import  {IconButton} from './IconButton'

const Today = () => {

    let today = new Date(); 

    const week = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    let time = {
     
      month: today.getMonth() + 1, // 현재 월
      day: today.getDate(), // 현재 날짜 (일)
      dayOfWeek : week[today.getDay()], // 현재 요일
      
    };

    let date = `${time.month}.${time.day} `;

    return <View style={viewStyles.container}>
      <Text style={viewStyles.dateView}>{date}</Text><Text styles={viewStyles.dayView}></Text>
      <Text style={viewStyles.dayView}>{time.dayOfWeek}</Text>
      
      </View>;
}

//<IconButton /> 삽입오류존재.
 const viewStyles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent:'flex-start',
    flexDirection : 'row',
  
  },
  dateView: { //날짜 뷰 -> 두꺼운 글씨
    flex: 0.22,
    fontSize : 25,
    backgroundColor: 'yellow',
    fontWeight : "900",
    marginLeft :10,
  
  },
  dayView: { //요일 뷰 -> 얇고 가는 글씨
    flex: 0.5,
    backgroundColor:  'pink',
    fontSize : 25,
    fontWeight : "100",
    paddingLeft : "3%",
  },
})


export default Today;