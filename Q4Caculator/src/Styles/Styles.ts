import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#F0F0F0',
    },
    textResult: {
        fontSize: 30,
    },
    keyboardContainer: {
        height: "40%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    textDisplay: {
        height: "50%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: 30,
    },
    button: {
        width: "24.7%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: '#fff',
        fontWeight: 'bold',
        borderRadius: 100,
        elevation: 4,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
        height: "20%",
        justifyContent: 'space-between',
        gap: 2,
    },
    buttonFunction: {
        color: '#FF9501',
        width: "24.7%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: '#F0F0F0',
        fontWeight: 'bold',
        borderRadius: 100,
        elevation: 4,
        
    },
    equalButton: {
        width: "14%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: '#FF9501',
        fontWeight: 'bold',
        borderRadius: 100,
        elevation: 4,
        
    },
    buttonZero: {
        width: "60%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: '#fff',
        fontWeight: 'bold',
        borderRadius: 100,
        elevation: 4,
    },
    clearButton: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#F0F0F0',
        elevation: 4,
    },
    textOrange: {
        color: '#FF9501',
        fontSize: 20,
    },
    textWhite: {
        fontSize: 20,
        color: '#fff',
    },
    textDark: {
        fontSize: 20,
        color: '#000',
    }
})

export default styles;