import React, { useState, useContext } from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import DayScreen from '../screens/DayScreen'
import WeekScreen from '../screens/WeekScreen'
import MonthScreen from '../screens/MonthScreen'
import TaskContext from '../contexts/Tasks';






const TabNavigator = createMaterialTopTabNavigator({
    Day: {
        screen: DayScreen,
    },
   
},

{
    tabBarOptions:{
        style:{
            backgroundColor: '#c1f0fb'
        },
        labelStyle:{
            fontSize: 15,
            fontWeight: 'bold'
        },
      
        activeTintColor: 'black'
    }
});


export default createAppContainer(TabNavigator);
