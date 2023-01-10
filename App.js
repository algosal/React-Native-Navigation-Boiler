import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NAV from './AppNav';

let Tab = createBottomTabNavigator();

export default function App() {

  return (
    <SafeAreaView>
      <View style={{ height: '100%' }}>
       <NAV />
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
