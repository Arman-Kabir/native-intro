import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={{ fontWeight: "bold", color: "white", fontSize: 28, backgroundColor: "blue", padding: 20 }}>Hello World</Text> */}
      
      <View style={[ styles.box, styles.box1]} />
      <View style={[ styles.box, styles.box2]} />
      <View style={[ styles.box, styles.box3]} />
      <View />
    </View>
  )
};



const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 300,
    padding:20
  },
  box:{
    height:150,
    width:150
  },
  box1:{   
    backgroundColor:"yellow"
  },
  box2:{
    backgroundColor:"green"
  },
  box3:{
    backgroundColor:"orange",
    width:300
  }
});
