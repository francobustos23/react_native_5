import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image } from 'react-native';
//Screens 
import { KobeScreen } from "./screens/KobeScreen";
import { JordanScreen } from "./screens/JordanScreen";
import {  InfoMjScreen } from "./screens/InfoMjScreen";
import { InfoKbScreen } from "./screens/InfoKbScreen";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    
    
    return (    
        <HomeStackNavigator.Navigator
            initialRouteName='KobeScreen'
        >
            <HomeStackNavigator.Screen
                name="KobeScreen"
                component={KobeScreen}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="InfoKobe"
                component={InfoKbScreen}
                options={{
                    headerBackTitleVisible: false
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}

function MyStack2() {
    return (
    <HomeStackNavigator.Navigator
        initialRouteName='KobeScreen'
    >
        <HomeStackNavigator.Screen
        name="MjScreen"
        component={JordanScreen}
        options={{
            headerShown: false
        }}
        />
        <HomeStackNavigator.Screen
        name="InfoMj"
        component={InfoMjScreen}
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
                name="KB" 
                component={MyStack}
                options={{
                    tabBarLabel: 'Kobe',
                    tabBarIcon: () => (
                        <Image source={require('./img/logokb.png')} style={{width:20, height:20}}/>
                    ),
                    headerShown: false
                }}
                />
            <Tab.Screen 
                name="MJ" 
                component={MyStack2}
                options={{
                    tabBarLabel: 'Jordan',
                    tabBarIcon: () => (
                        <Image source={require('./img/logomj.png')} style={{width:20, height:20}}/>
                    ),
                    headerShown: false,
                    tabBarActiveTintColor: 'red'
                    // tabBarBadge:3
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