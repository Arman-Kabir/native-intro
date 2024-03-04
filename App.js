import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={{ fontWeight: "bold", color: "white", fontSize: 28, backgroundColor: "blue", padding: 20 }}>Hello World</Text> */}
      
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View />
    </View>
  )
};



const styles = StyleSheet.create({
  container: {
    // flex:1,
    height: 200,
    width: 300,
    padding:20
    // backgroundColor: "red"
  },
  box1:{
    height:50,
    width:50,
    backgroundColor:"yellow",
    padding:20
  },
  box2:{
    height:50,
    width:50,
    backgroundColor:"green",
    padding:20
  },
  box3:{
    height:50,
    width:50,
    backgroundColor:"orange",
    padding:20
  }
});
