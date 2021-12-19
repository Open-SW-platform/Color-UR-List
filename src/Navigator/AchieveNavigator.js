import React, { useState, useContext } from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import DayScreen from '../screens/DayScreen'
import WeekScreen from '../screens/WeekScreen'
import MonthScreen from '../screens/MonthScreen'
import {ThemeContext} from '../contexts/Tasks';

function getColor() {
    //const {themeColor,setThemeColor} = useContext(ThemeContext);
    //console.log(themeColor);
    
    let themeColor='#c1f0fb'
    console.log(themeColor);
    return themeColor;
}



const TabNavigator = createMaterialTopTabNavigator({
    Day: {
        screen: DayScreen,
    },
    Week: {
        screen: WeekScreen,
    },
    Month: {
        screen: MonthScreen,
    },
},

{
    tabBarOptions:{
        style:{
            backgroundColor: getColor()
        },
        labelStyle:{
            fontSize: 15,
            fontWeight: 'bold'
        },
      
        activeTintColor: 'black'
    }
});


export default createAppContainer(TabNavigator);
