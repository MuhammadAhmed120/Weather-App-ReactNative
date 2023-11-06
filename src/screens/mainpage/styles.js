const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#0b131e',
    },

    header: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        position: 'relative',
        width: "100%",
        height: 50
    },

    searchCon: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#9399a2',
        borderWidth: 1,
        width: "85%",
        margin: "0 auto",
        // padding: 5,
    },

    searchImg: {
        width: 20,
        height: 20,
        marginHorizontal: 10,
    },

    line: {
        width: 1,
        height: '50%',
        backgroundColor: '#9399a2',
    },

    input: {
        flex: 1,
        paddingLeft: 10,
        fontFamily: "Poppins-Regular",
        paddingVertical: 15
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
        gap: 50
    },

    weatherDetCon: {
        width: "100%",
        alignItems: 'center',
        gap: 40
    },

    weatherDesc: {
        fontFamily: "Poppins-Bold",
        textTransform: 'capitalize',
        color: '#fff',
        fontSize: 35,
        marginBottom: -10,
        paddingHorizontal: 6,
        textAlign: 'center',
        flexWrap: "wrap"
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