import React from 'react';
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
});
export default createAppContainer(TabNavigator);
