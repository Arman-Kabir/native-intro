import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Text>Hello World ! </Text> */}
        {/* <StatusBar style="auto" /> */}
        {/* <View style={{ width: 200, height: 200, backgroundColor: 'red' }} /> */}
        {/* <View style={{ width: 200, height: 200, backgroundColor: 'blue' }} /> */}
        <Text style={{ fontWeight: "bold", fontSize: 28 }}>Hello world</Text>
        <Text style={{ color: 'red', textTransform: 'uppercase' }}>Hello world2</Text>
        <Image source={require('./assets/adaptive-icon.png')}
          style={{ height: 200, width: 200 }}
        />
        <Image source={{ uri: "https://picsum.photos/200/300" }}
          style={{ height: 200, width: 200 }}
        />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi quaerat deleniti nam rerum eos quo, expedita omnis architecto corrupti, repellendus unde doloremque obcaecati ut iusto itaque temporibus cupiditate, facilis voluptate. Error consectetur provident veritatis, perferendis eos, atque, reiciendis facilis minus architecto id nesciunt cupiditate beatae quidem dolore nihil rem!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi quaerat deleniti nam rerum eos quo, expedita omnis architecto corrupti, repellendus unde doloremque obcaecati ut iusto itaque temporibus cupiditate, facilis voluptate. Error consectetur provident veritatis, perferendis eos, atque, reiciendis facilis minus architecto id nesciunt cupiditate beatae quidem dolore nihil rem!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi quaerat deleniti nam rerum eos quo, expedita omnis architecto corrupti, repellendus unde doloremque obcaecati ut iusto itaque temporibus cupiditate, facilis voluptate. Error consectetur provident veritatis, perferendis eos, atque, reiciendis facilis minus architecto id nesciunt cupiditate beatae quidem dolore nihil rem!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi quaerat deleniti nam rerum eos quo, expedita omnis architecto corrupti, repellendus unde doloremque obcaecati ut iusto itaque temporibus cupiditate, facilis voluptate. Error consectetur provident veritatis, perferendis eos, atque, reiciendis facilis minus architecto id nesciunt cupiditate beatae quidem dolore nihil rem!
        </Text>
        <Text style={styles.textContainer}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi quaerat deleniti nam rerum eos quo, expedita omnis architecto corrupti, repellendus unde doloremque obcaecati ut iusto itaque temporibus cupiditate, facilis voluptate. Error consectetur provident veritatis, perferendis eos, atque, reiciendis facilis minus architecto id nesciunt cupiditate beatae quidem dolore nihil rem!
        </Text>
      </ScrollView>
    </View>
  );
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
