import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView,Button } from 'react-native';

export default function App() {
  const [name,setName] = useState("saa");
  return (
    <View style={styles.container}>
      <Header title="screen 1" />
      <Header title="screen 2" />
      <Header title="screen 3" />
      <Header title="screen 4" />
      <Header title="screen 5" />
      <Text>{name}</Text>
      <Button title='Change it to full name' onPress={()=>{setName("arman Kabir")}}></Button>
    </View>
  );
};
function Header(props){
  const {title} = props;
  return (
    <View style={{backgroundColor:'red',marginVertical:20,height:60,alignItems:"center",justifyContent:'center',padding:10}}>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer:{
    width:200,
    backgroundColor:"red"
  }
});
