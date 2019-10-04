import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';

const Header = ({ iconImageLeft, iconImageRight, title, onPress, onRightPress }) => {
    const { main, leftbuttonsStyle, rightbuttonsStyle, iconImageStyle, button, } = styles;

    const bold = 'OpenSans-Bold';

    const titleStyle = {
        paddingTop: Platform.OS == 'ios' ? Dimensions.get('window').height == 812 ? 30 : 20 : 0, 
        width: (Dimensions.get('window').width - 140),
        textAlign: 'center',
        fontSize: 21,
        fontFamily: bold,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#fff",
    };

    return (
        <View style={main}>
            <View style={leftbuttonsStyle} >
                <TouchableOpacity
                    onPress={onPress}
                    style={button}
                >
                    <Image style={iconImageStyle} resizeMode="contain" source={iconImageLeft} />
                </TouchableOpacity>
            </View>

            <Text style={titleStyle}>{title}</Text>

            <View style={rightbuttonsStyle} >
                <TouchableOpacity
                    onPress={onRightPress} 
                    style={button} 
                >
                    <Image style={iconImageStyle} resizeMode="contain" source={iconImageRight} />
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    main: {
        width: (Dimensions.get('window').width),
        // backgroundColor: '#fff', 
        flexDirection: 'row',
        // borderBottomWidth: 1,
        // borderBottomColor: '#eeeeee',
        height: Platform.OS == 'ios' ? Dimensions.get('window').height == 812 ? 75 : 64 : 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftbuttonsStyle: {
        width: 60,
    },
    button: {
        paddingTop: Platform.OS == 'ios' ? Dimensions.get('window').height == 812 ? 30 : 20 : 0,
        width: 30,
        height: Platform.OS == 'ios' ? Dimensions.get('window').height == 812 ? 75 : 64 : 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconImageStyle: {

    },
    rightbuttonsStyle: {
        width: 60,
        alignItems: 'flex-end',
    },

});

export default Header

