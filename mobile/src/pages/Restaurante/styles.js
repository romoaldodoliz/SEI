import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        backgroundColor: '#FFF',
        height: 270,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },

    img: {
        height: 100,
        width: 100,
    },

    imagem: {
        height: 80,
        width: 80,
    },

    voltar: {
        paddingTop: Constants.statusBarHeight + 5,
        paddingLeft: 10,
        color: '#643853'
    },

    centro: {
        alignItems: 'center',
    },

    time: {
        flexDirection: 'row',
        marginTop: 5,
    },

    itens: {
        marginHorizontal: 20,
        marginVertical: 15,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        borderRadius: 8,
        elevation: 8,
    },

    textBody: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    titulo: {
        color: '#643853',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 0,
        marginBottom: 10,
    },

    end: {
        marginBottom: 22,
    },

    nome: {
        marginTop: 50,
        marginLeft: 20,
        fontSize: 25,
        color: '#B0B0B0',
    },  

    preco: {
        fontSize: 20,
        marginLeft: 20,
        color: '#B22222'
    },

    restaurante: {
        color: '#643853',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10
    },
});