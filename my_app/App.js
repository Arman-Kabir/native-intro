import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, SafeAreaView } from 'react-native';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      {/* <Text style={{ fontWeight: "bold", color: "white", fontSize: 28, backgroundColor: "blue", padding: 20 }}>Hello World</Text> */}
  

      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />


    </SafeAreaView>

  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection:'row',
    // justifyContent:'space-between'
    alignItems:'center'
  },
  box: {
    height:100,
    width:100,
    // backgroundColor: 'red',
  },
  box1: {

    backgroundColor: "yellow"
  },
  box2: {

    backgroundColor: "green"
  },
  box3: {

    backgroundColor: "orange",
  }
});
