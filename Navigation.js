import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
//Screens 
import { KobeScreen } from "./screens/KobeScreen";
import { JordanScreen } from "./screens/JordanScreen";
import {  InfoMjScreen } from "./screens/InfoMjScreen";
import { InfoKbScreen } from "./screens/InfoKbScreen";
import { HomeScreen } from "./screens/HomeScreen";

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
                name="KobeScreen"
                component={KobeScreen}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="JordanScreen"
                component={JordanScreen}
                options={{
                    headerShown: false
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}
function MyStack2() {
    return (
    <HomeStackNavigator.Navigator
        initialRouteName='KbScreen'
    >
        <HomeStackNavigator.Screen
        name="KbScreen"
        component={KobeScreen}
        options={{
            headerShown: false
        }}
        />
        <HomeStackNavigator.Screen
        name="InfoKb"
        component={InfoKbScreen}
        options={{
            headerBackTitleVisible: false
        }}
        />

    </HomeStackNavigator.Navigator>
    )
}

function MyStack3() {
    return (
    <HomeStackNavigator.Navigator
        initialRouteName='JordanScreen'
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
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Entypo name="home" size={24} color="black" />
                    ),
                    headerShown: false
                }}
                />
            <Tab.Screen 
                name="KB" 
                component={MyStack2}
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
                component={MyStack3}
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