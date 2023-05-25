import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginVertical: 10,
        backgroundColor: '#ECEFF1',
        marginLeft: 20,
        marginRight: 5,
        padding: 20,
        flexDirection: 'row',
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
        overflow: 'hidden'

    },
    image: {   
        right: 20,
        width: 100,
        height: 50,
        backgroundColor: '#ECEFF1',
        resizeMode: 'contain'
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontStyle: 'italic',
        fontWeight: '300'
    },
})