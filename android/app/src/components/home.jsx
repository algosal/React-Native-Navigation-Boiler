import React from 'react';
import {  SafeAreaView, StyleSheet, Text, View, ViewBase, } from 'react-native';


export default function Home(){

  return (
<View style={{backgroundColor:'black', height:'100%'}}>
    <SafeAreaView>
        <View><Text style={[styles.sectionTitle,{color:'orange'}]}>Home Text Goes Here</Text></View>      
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});
