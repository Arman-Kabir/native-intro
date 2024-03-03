import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello World ! </Text> */}
      {/* <StatusBar style="auto" /> */}
      <View style={{ width: 200, height: 200, backgroundColor: 'red' }} />
      <View style={{ width: 200, height: 200, backgroundColor: 'blue' }} />
      <Text>Hello world</Text>
      <Text>Hello world2</Text>
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
});
