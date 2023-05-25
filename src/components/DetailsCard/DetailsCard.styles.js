import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
    },
    title: {
        fontSize: 24,
        color: '#A72F2F',
        fontWeight: 'bold'
    },
    area: {
        fontSize: 16,
        color: '#A72F2F',
        fontWeight: 'bold',
    },
    separator: {
        borderWidth: 1,
        margin: 5,
        borderColor: '#e0e0e0'
    },
    info_container: {
        padding: 5
    },
    info: {
        margin: 5,
        color: 'black',
        fontSize: 15,
    },
    button: {
        borderRadius: 5,
        margin: 10,
        padding: 15,
        backgroundColor: '#FF0000'
    },
    button_text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
})