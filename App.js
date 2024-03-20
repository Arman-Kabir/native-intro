import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {
    let [fontsLoaded] = useFonts({
        "Inter-Regular": Inter_400Regular,
        "Inter-Bold": Inter_700Bold
    });

    if (!fontsLoaded) {
        return (
            <ActivityIndicator />
        )
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: "Inter-Regular" }}>A good app</Text>
            <Text style={{fontFamily:"Inter-Bold"}}>A good app bold</Text>
            <StatusBar style="auto"></StatusBar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundCOlor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});