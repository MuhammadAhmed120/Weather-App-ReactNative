const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#0b131e',
    },

    header: {
        // flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        position: 'relative',
        // backgroundColor: 'pink',
        width: "100%",
        height: 50
    },

    button: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 99,
        left: 10,
    },

    homeCon: {
        alignItems: 'center',
        paddingTop: 40,
        // backgroundColor: 'blue',
        gap: 50
    },

    weatherDetCon: {
        // flex: 2,
        width: "100%",
        alignItems: 'center',
        // backgroundColor: 'red',
        gap: 40
    },

    weatherDesc: {
        fontFamily: "Poppins-Bold",
        textTransform: 'capitalize',
        color: '#fff',
        fontSize: 35,
        // backgroundColor: "yellow",
        marginBottom: -20
    },

    cityName: {
        fontFamily: "Poppins-Light",
        fontSize: 16,
    },

    weatherImg: {
        width: 120,
        height: 120,
        objectFit: 'contain',
    },

    weatherTemp: {
        fontSize: 45,
        fontFamily: "Poppins-Bold",
        color: "#fff"
    },

    weatherCent: {
        fontFamily: "Regular",
        fontWeight: "bold",
    },

    // CARDS
    weatherCards: {
        flex: 1,
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        gap: 5,
    },

    card: {
        // flex: 1,
        backgroundColor: '#202b3b',
        width: '47%',
        height: 100,
        borderRadius: 20,
        alignItems: "start",
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        paddingVertical: 15,
        paddingHorizontal: 20,
        overflow: "scroll"
    },

    title: {
        color: '#9399a2',
        fontSize: 13,
        fontFamily: "Poppins-SemiBold",
        textTransform: "uppercase",
    },

    content: {
        color: '#fff',
        fontSize: 22,
        fontFamily: "Poppins-Bold",
    },

    wave: {
        width: "fit-content",
        height: 18,
        borderRadius: 5,
    },

    text: {
        // marginTop: 15,
        width: "fit-content",
        height: 30,
        borderRadius: 5,
    },
})

export default styles