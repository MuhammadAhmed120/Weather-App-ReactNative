const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    screenBody: {
        flex: 1,
        backgroundColor: "#fff"
    },


    // HEAD
    headCon: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        // paddingLeft: 20,
        // paddingTop: 5,
        // paddingBottom: 5
        padding: 5
    },

    logo: {
        // flex: 1,
        width: 70,
        height: "100%",
        objectFit: 'contain',
        borderRadius: 20
    },

    headText: {
        color: '#000',
        // marginLeft: 20 ,
        fontSize: 25
    },



    // BODY
    bodyCon: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputsCon: {
        // backgroundColor: 'green',
        padding: 20,
        gap: 40,
        width: "100%"
    },

    inputTitle: {
        color: '#000',
        // backgroundColor: 'pink',
        fontSize: 17
    },

    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: "#fafafa",
        color: "#000",
        marginTop: 5
    },

    // FOOT
    footCon: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default styles