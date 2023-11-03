const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },

    image: {
        width: "100%",
        height: 200,
        objectFit: 'cover'
    },

    homeCon: {
        flex: 7,
        justifyContent: 'start',
        alignItems: 'center',
        paddingTop: 100,
    },

    umbrella: {
        width: 100,
        height: 100,
        objectFit: 'contain'
    },

    homeWeather: {
        color: '#000',
        fontSize: 26,
        textTransform: 'capitalize',
        fontFamily: "Poppins-Bold",
        marginBottom: -10,
    },
    
    app_name: {
        color: '#616161',
        fontSize: 23,
        fontFamily: "Poppins-LightItalic",
    },

    button: {
        marginVertical: 40,
        backgroundColor: "#68b4e6",
        borderRadius: 50,
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles