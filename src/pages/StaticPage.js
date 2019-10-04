import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';


const StaticPage = (props) => {
    const {
        main,
        page,
        linearGradient,
        pageBtn,
        text

    } = styles;
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: -.8 }} colors={['#d13139', '#560004', '#560004']} style={linearGradient}>

            <View style={main}>
                <Header
                    onPress={() => props.navigation.goBack()}
                    iconImageLeft={require('./../assets/img/keyboardArrowLeftMaterial.png')}
                    title={props.title}
                />

                <View style={page}>
                    <HTMLView
                        value={props.description}
                        style ={ text }    
                    />
                </View>

            </View>
        </LinearGradient>

    )

}

const styles = StyleSheet.create({
    linearGradient: {
    },
    main: {
    },
    page: { 
        padding: 16,
        paddingBottom: 50,
        backgroundColor: '#fff',
        height: (Dimensions.get("window").height)
    },
    profileImageStyle: {
        width: 145,
        height: 145,
        alignSelf: 'center',
        marginBottom: 10,

    },
    profileImageBoxStyle: {
        width: 145,
        height: 145,
        alignSelf: 'center',
    },
    cameraBtnStyle: {
        width: 32,
        height: 32,
        borderRadius: 100,
        backgroundColor: '#fff',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#eeeeee",
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 50,
        right: -16,
    },
    pageBtn: {
        marginTop: 54,
        paddingHorizontal: 35,
    },
    text: {
        fontSize: 15,
    },

});

export default StaticPage

