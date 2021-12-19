import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import AchievementScreen from './screens/AchievementScreen';
import 'react-native-gesture-handler';
import {TaskProvider} from './contexts/Tasks';
import CalendarScreen from './screens/CalendarScreen';

const TabNavigator = createBottomTabNavigator({ // TabNavigator로 App.js 통일

  Calendar:{
    screen: CalendarScreen,
  },

  'To Do': {
    screen: HomeScreen, //HomeScreen(메인화면)
  },
  
  Achievement: {
    screen: AchievementScreen, //AchievementScreen(달성화면)
  },
},
  {
    initialRouteName: 'To Do',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({horizontal, tintColor}) => {
       const {routeName} = navigation.state;
       let iconName;
        if (routeName === 'To Do') {
         iconName = 'checkbox-outline'; //아이콘 이미지파일
        } else if (routeName === 'Achievement') {
         iconName = 'podium-outline';
        }
        else if (routeName==='Calendar'){
          iconName ='calendar-outline'
        }
       return (
      
         <Ionicons //아이콘 스타일 설정
           name={iconName}
           size={horizontal ? 20 : 25}
           color={tintColor}
         />
        
        );
     },
   }),
  },
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <TaskProvider><AppContainer /></TaskProvider>;
  }
}
