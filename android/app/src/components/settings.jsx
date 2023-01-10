import React from 'react';
import {  SafeAreaView, StyleSheet, Text, View, } from 'react-native';


export default function Settings(){

  return (
    <View style={[styles.mainView, {height:'100%'}]}>
    <SafeAreaView >
        <View><Text style={styles.sectionTitle}>Settings Go Here</Text></View>      
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color:'white'
  },
  mainView:{
    backgroundColor:'black',
  },
});
