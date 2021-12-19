import React, { useState, useContext } from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import DayScreen from '../screens/DayScreen'
import WeekScreen from '../screens/WeekScreen'
import MonthScreen from '../screens/MonthScreen'

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
            backgroundColor: '#f9ceee'
        },
        labelStyle:{
            fontSize: 15,
            fontWeight: 'bold'
        },
        activeTintColor: 'black'
    }
});
export default createAppContainer(TabNavigator);
