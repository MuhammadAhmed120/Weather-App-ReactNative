import { useState, useEffect } from "react";
import { Image, SafeAreaView, Text, View, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles.js";
import Icon from 'react-native-vector-icons/FontAwesome5.js';

function Home({ navigation }) {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = () => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Karachi&units=metric&appid=37434a874990ad1a3f76deafb415a8b5`
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setWeatherData(data);
                console.log(data)
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
            });
    };

    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <SafeAreaView style={styles.body}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 3, backgroundColor: 'pink' }}>
                    <Image source={require('../../images/clouds.jpg')} style={styles.image} />
                </View>
                <View style={styles.homeCon}>
                    {/* <Image style={styles.umbrella} source={require('../../images/umbrella.jpg')} /> */}
                    <Image style={styles.umbrella} source={require('../../images/design.png')} />
                    <Text style={styles.homeWeather}>
                        {weatherData && weatherData.weather[0].description}
                    </Text>
                    <Text style={styles.app_name}>
                        Weather App
                    </Text>
                    <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={() => navigation.navigate("Main")}>
                        <Icon name="arrow-right" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;