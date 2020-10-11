import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './homeScreen';
import QuizMainScreen from './quizMainScreen';
import QuizSecondScreen from './quizSecondScreen';
import QuestionScreen from './questionScreen';
import QuizLevelScreen from './quizLevelScreen';
import InfoMainScreen from './infoScreen';
import InfoSecondScreen from './infoSecondScreen';
import InfoDetailScreen from './infoDetailScreen';
import {Image, View} from 'react-native';

//import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const HomeStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff" inactiveColor="#fff" barStyle={{ backgroundColor: '#fff' }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          
          tabBarIcon: ({color}) => (
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: '#fff',
                borderRadius :100,
                position: 'absolute',
                top: -30,
                
              }}>
              <Image
                style={{width: 80, height: 80}}
                source={require('../assets/images/bery_logo.png')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      
      //   options={{
      //     title: 'Overview',
      //     headerLeft: () => (
      //       <MaterialCommunityIcons.Button
      //         name="ios-menu"
      //         size={25}
      //         backgroundColor="#009387"
      //         onPress={() => navigation.openDrawer()}
      //       />
      //     ),
      //   }}
    />
    <HomeStack.Screen name="QuizMain" component={QuizMainScreen} />
    <HomeStack.Screen name="QuizLevel" component={QuizLevelScreen} />
    <HomeStack.Screen name="QuizSecond" component={QuizSecondScreen} />
    <HomeStack.Screen name="InfoSecond" component={InfoSecondScreen} />
    <HomeStack.Screen name="Question" component={QuestionScreen} />
    <HomeStack.Screen name="InfoMain" component={InfoMainScreen} />
    <HomeStack.Screen name="InfoDetail" component={InfoDetailScreen} />
  </HomeStack.Navigator>
);
{
  /* <MaterialIcons name="home" color={color} size={30} /> */
}
