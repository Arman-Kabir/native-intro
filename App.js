import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, ActivityIndicator, ImageBackground, Image } from 'react-native';
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
        <ImageBackground
            source={require('./assets/light-bg.png')}
            style={{ flex: 1 }}
        >
            <View style={{ flex: 1, justifyContent: 'space-between', marginTop: 32, paddingHorizontal: 26 }}>
                {/* Upper portion */}
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontFamily: 'Inter-Regular', fontSize: 12, color: '#fff' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum laudantium explicabo delectus nisi reiciendis sed nesciunt nulla id, ipsa harum suscipit ab, animi vero? </Text>
                        <Text style={{ fontFamily: 'Inter-Bold', color: '#fff', fontSize: 12, marginTop: 8 }}>Ada lovelace</Text>
                    </View>
                    <Image source={require('./assets/refresh.png')}></Image>
                </View>
                {/* Bottom portion */}
                <View style={{ marginBottom: 36 }}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={require('./assets/sun.png')}></Image>
                        <Text style={{ fontFamily: 'Inter-Regular', fontSize: 15, color: 'white', marginLeft: 8, letterSpacing: 5 }}>Good Morning</Text>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text>
                            <Text style={{ fontSize: 100, color: '#fff', fontFamily: 'Inter-Bold' }}>11.30</Text>
                            <Text style={{ color: 'white', fontFamily: 'Inter-Regular' }}>BST</Text>
                        </Text>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={{ color: 'white', letterSpacing: 3, fontFamily: 'Inter-Bold',fontSize:15 }}>In LonDOn, UK</Text>
                    </View>
                </View>
            </View>
        </ImageBackground >

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