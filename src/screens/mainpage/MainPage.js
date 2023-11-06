import { useState, useEffect, useRef } from "react";
import { Image, Text, View, TouchableOpacity, ScrollView, RefreshControl, SafeAreaView, TextInput } from "react-native";
import styles from "./styles.js";
import Icon from 'react-native-vector-icons/FontAwesome6';
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import LinearGradient from 'react-native-linear-gradient';

function MainPage({ navigation }) {
    const [weatherData, setWeatherData] = useState(false);
    const [cityName, setCityName] = useState("")
    const [refreshing, setRefreshing] = useState(false);

    const fetchWeatherData = () => {
        console.log('cityName --->', cityName)
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName.length === 0 ? 'Karachi' : `${cityName}`}&units=metric&appid=37434a874990ad1a3f76deafb415a8b5`
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
                // console.error("Error fetching weather data:", error);
            });
    };

    function onRefresh() {
        setRefreshing(true)
        fetchWeatherData()
        setTimeout(() => {
            setRefreshing(false)
        }, 1000);
    }

    useEffect(() => {
        fetchWeatherData();
    }, [cityName]);

    function padZero(number) {
        return number.toString().padStart(2, '0');
    }

    function convertTime(timestamp) {
        const timestampMillis = timestamp * 1000;

        const date = new Date(timestampMillis);

        const hours = date.getHours();
        const minutes = date.getMinutes();

        const formattedHours = padZero(hours);
        const formattedMinutes = padZero(minutes);

        return `${formattedHours}:${formattedMinutes} ${formattedHours >= 12 ? 'PM' : 'AM'}`;
    }

    // console.log("navigation ----> ", Geolocation)

    return (
        <SafeAreaView
            style={styles.body}
        >
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={() => navigation.navigate("Home")}>
                        <Icon name="less-than" size={14} color="#fff" />
                    </TouchableOpacity>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#9399a2', fontSize: 16, fontFamily: 'Poppins-Regular' }}>
                            Air Conditions
                        </Text>
                    </View>
                </View>

                <View style={styles.homeCon}>
                    <View style={styles.searchCon}>
                        <Image source={require('../../images/search.png')} style={styles.searchImg} />
                        <View style={styles.line}></View>
                        <TextInput
                            style={styles.input}
                            placeholder="Search City"
                            onChangeText={(text) => setCityName(text)}
                        />
                    </View>
                    <View style={styles.weatherDetCon}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <ShimmerPlaceholder
                                LinearGradient={LinearGradient}
                                width={150}
                                height={50}
                                style={{ borderRadius: 15, }}
                                visible={weatherData}
                            >
                                <Text style={styles.weatherDesc}>{weatherData && weatherData.weather[0].description}</Text>
                            </ShimmerPlaceholder>
                            <ShimmerPlaceholder
                                LinearGradient={LinearGradient}
                                width={90}
                                isReversed
                                height={20}
                                style={{ marginTop: 10 }}
                                visible={weatherData}
                            >
                                <Text style={styles.cityName}>{weatherData && weatherData.name}, {weatherData && weatherData.sys.country}</Text>
                            </ShimmerPlaceholder>
                        </View>
                        <Image style={styles.weatherImg} source={require("../../images/umbrella.png")} />
                        <ShimmerPlaceholder
                            LinearGradient={LinearGradient}
                            style={{ borderRadius: 15 }}
                            height={50}
                            width={120}
                            visible={weatherData}
                        >
                            <Text style={styles.weatherTemp}>
                                {Math.ceil(weatherData && weatherData.main.temp)}
                                <Text style={styles.weatherCent}>°</Text>
                            </Text>
                        </ShimmerPlaceholder>
                    </View>


                    {/* CARDS */}
                    {weatherData &&
                        <View style={styles.weatherCards}>

                            {/* FEELS LIKE */}
                            <View style={styles.card}>
                                <Text style={styles.title}>FEELS LIKE</Text>
                                <ScrollView
                                    style={{ flex: 1 }}
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    nestedScrollEnabled={true}
                                >
                                    <Text style={styles.content}>{weatherData.main.feels_like}%</Text>
                                </ScrollView>
                            </View>

                            {/* HUMIDITY */}
                            <View style={styles.card}>
                                <Text style={styles.title}>Humidity</Text>
                                <ScrollView
                                    style={{ flex: 1 }}
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    nestedScrollEnabled={true}
                                >
                                    <Text style={styles.content}>{weatherData && weatherData.main.humidity}%</Text>
                                </ScrollView>
                            </View>

                            {/* WIND */}
                            <View style={styles.card}>
                                <Text style={styles.title}>WIND</Text>
                                <ScrollView
                                    style={{ flex: 1 }}
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    nestedScrollEnabled={true}
                                >
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.content}>{weatherData && weatherData.wind.speed} km/hr</Text>
                                    </View>
                                </ScrollView>
                            </View>

                            {/* VISIBILITY */}
                            <View style={styles.card}>
                                <Text style={styles.title}>Visibility</Text>
                                <ScrollView
                                    style={{ flex: 1 }}
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    nestedScrollEnabled={true}
                                >
                                    <Text style={styles.content}>{weatherData && weatherData.visibility} km</Text>
                                </ScrollView>
                            </View>

                            {/* PRESSURE */}
                            <View style={styles.card}>
                                <Text style={styles.title}>Pressure</Text>
                                <ScrollView
                                    style={{ flex: 1 }}
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    nestedScrollEnabled={true}
                                >
                                    <Text style={styles.content}>{weatherData && weatherData.main.pressure} hPa</Text>
                                </ScrollView>
                            </View>

                            {/* SUNRISE */}
                            <View style={styles.card}>
                                <Text style={styles.title}>Sunrise</Text>
                                <ScrollView
                                    style={{ flex: 1 }}
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    nestedScrollEnabled={true}
                                >
                                    <Text style={styles.content}>{convertTime(weatherData && weatherData.sys.sunrise)}</Text>
                                </ScrollView>
                            </View>

                            {/* SUNSET */}
                            <View style={styles.card}>
                                <Text style={styles.title}>Sunset</Text>
                                <ScrollView
                                    style={{ flex: 1 }}
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    nestedScrollEnabled={true}
                                >
                                    <Text style={styles.content}>{convertTime(weatherData && weatherData.sys.sunset)}</Text>
                                </ScrollView>
                            </View>
                        </View>
                    }
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default MainPage;