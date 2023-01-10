import React from 'react';
import {  SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './android/app/src/components/home';
import Settings from './android/app/src/components/settings';

let Tab = createBottomTabNavigator(); 

export default function NAV(){

  return (
    <SafeAreaView>
        <View style={{height:'100%'}}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
          tabBarStyle: { position: 'absolute' },
          tabBarActiveBackgroundColor: 'orange',
          tabBarInactiveBackgroundColor: 'white',  
          headerTintColor:'orange',
          tabBarInactiveTintColor : 'black',
          tabBarActiveTintColor : 'black',
          headerShown:true,
          headerShadowVisible:true, 
          headerStyle:{backgroundColor:'black'}
        }}
        >
        <Tab.Screen name="My Haunting Thoughts" component={Home}
        options={{
          tabBarLabel : 'Thoughts',
          tabBarIcon : ()=>(<Text style={{fontSize:25}}>&#129409;</Text>)
        }}
        
        />
        <Tab.Screen name="Mental Settings" component={Settings}
        options={{
          tabBarLabel : 'Settings',
          tabBarIcon : ()=>(<Text style={{fontSize:25}}>&#9203;</Text>)
        }}/>
        </Tab.Navigator> 
        </NavigationContainer>
        </View>  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});
