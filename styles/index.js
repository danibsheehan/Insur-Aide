// import { StyleSheet } from 'react-native';
const darkGreen = '#01579B'
const lightGreen = '#80DEEA'
const medGreen = '#039BE5'


const stylesObj =  {
    body: {
        backgroundColor: medGreen,
        alignSelf: 'stretch',
        height:5000,
    },
    logo: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        marginTop: 200,
        marginBottom: 10
    },
    button: {
        backgroundColor: 'white',
        marginBottom: 7,
        marginLeft: 30,
        padding: 10,
        width: 300,
        height: 40
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: medGreen

    },
    help: {
        backgroundColor: medGreen,
        alignSelf: 'stretch',
        height: 800,
        paddingTop: 200
    },
    list: {
        backgroundColor: medGreen,
        alignSelf: 'stretch',
        flex: 1,
        paddingTop: 50
    },
    listText: {
        backgroundColor: 'white',
        color: medGreen,
        textAlign: 'center',
        padding: 6,
        margin: 2

    
    }
}

export { stylesObj }