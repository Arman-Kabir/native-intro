import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from "react-native";

function HomeScreen() {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

function DetailScreen() {
    return (
        <View>
            <Text>Detail Screen</Text>
        </View>
    )
}

export default function App() {
    return <View>
        <Text>helllo</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});