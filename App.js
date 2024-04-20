import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, ActivityIndicator, ImageBackground, Image, Pressable, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useState } from 'react';

const RowView = ({ label, value }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <View>
                <Text style={{ fontFamily: 'Inter-Regular', color: '#303030', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' }}>
                    {label}
                </Text>
            </View>
            <View>
                <Text style={{ fontFamily: 'Inter-Bold', color: '#303030', fontSize: 20, letterSpacing: 2 }}>
                    {value}
                </Text>
            </View>
        </View>
    )
}

export default function App() {
    let [fontsLoaded] = useFonts({
        "Inter-Regular": Inter_400Regular,
        "Inter-Bold": Inter_700Bold
    });

    const [showMore, setShowMore] = useState(false);

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
            {/* Parent view */}
            <View style={{ flex: 1, justifyContent: 'space-between', marginTop: 32, paddingHorizontal: 26 }}>
                {/* Upper portion */}
                {
                    !showMore && (
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: 'Inter-Regular', fontSize: 12, color: '#fff' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum laudantium explicabo delectus nisi reiciendis sed nesciunt nulla id, ipsa harum suscipit ab, animi vero? </Text>
                                <Text style={{ fontFamily: 'Inter-Bold', color: '#fff', fontSize: 12, marginTop: 8 }}>Ada lovelace</Text>
                            </View>
                            <Image source={require('./assets/refresh.png')}></Image>
                        </View>
                    )}

                {/* Bottom portion */}
                <View style={{ marginBottom: 36, alignItems: 'flex-start' }}>
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
                        <Text style={{ color: 'white', letterSpacing: 3, fontFamily: 'Inter-Bold', fontSize: 15 }}>In LonDOn, UK</Text>
                    </View>

                    {/* button */}
                    <TouchableOpacity onPress={() => { setShowMore(!showMore) }} style={{ flexDirection: 'row', height: 40, width: 115, backgroundColor: '#fff', borderRadius: 30, marginTop: 50, justifyContent: 'space-between', paddingLeft: 16, paddingRight: 4, alignItems: 'center' }}>
                        
                        <Text style={{ fontFamily: "Inter-Bold", fontSize: 12, color: "#000", letterSpacing: 3 }}>
                            {showMore ? 'LESS' : 'MORE'}
                        </Text>

                        <Image source={showMore ? require('./assets/arrow-up.png') : require('./assets/arrow-down.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Expanded view */}
            {
                showMore && (
                    <View style={{ backgroundColor: '#fff', opacity: .8, paddingVertical: 48, paddingHorizontal: 26 }}>
                        <RowView label={"current TImezone"} value={"Europe/London"}></RowView>
                        <RowView label={"Day of the year"} value={"290"}></RowView>
                        <RowView label={"Day of the week"} value={"5"}></RowView>
                        <RowView label={"week number"} value={"42"}></RowView>
                    </View>
                )}
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