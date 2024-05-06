import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image } from 'react-native';
//Screens 
import { HomeScreen } from "./screens/HomeScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { StackScreen } from "./screens/StackScreen";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    
    
    return (    
        <HomeStackNavigator.Navigator
            initialRouteName='HomeScreen'
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    headerBackTitleVisible: false
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            tabBarActiveTintColor: 'purple'
         }}
         >
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    ),
                    headerShown: false
                }}
                />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: () => (
                        <Image source={require('./img/a.png')} style={{width:20, height:20}}/>
                    ),
                    tabBarBadge:3
                }}
                />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}