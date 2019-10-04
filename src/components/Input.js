import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity,
    Platform
} from 'react-native';



const regular = 'OpenSans-Regular';
const bold = 'OpenSans-Bold';
const semiBold = 'OpenSans-SemiBold';
const extraBold = 'OpenSans-ExtraBold';



const inputBox = {
    height:Platform.OS === 'ios' ? 36 : "auto",
    color:'#fff',
    fontSize: 16.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0.46,
    fontFamily: 'OpenSans-Regular',

};




const Input = ({ placeholder, leftIcon, rightIcon, bgColor, borderColor, secureTextEntry, inputProps, onChangeText, keyboardType, onPress }) => {
    const { main, leftIconStyle, rightIconStyle, mainInner, leftIconBoxStyle } = styles;

    const inputBoxArea = {
        borderStyle: "solid",
        borderBottomWidth: .5,
        borderColor: borderColor,
        backgroundColor: bgColor,
        width: (Dimensions.get('window').width - 95),
    };
    return (
        <View style={main}>
            <View style={mainInner}>
                <View style={leftIconBoxStyle}>
                    <Image style={leftIconStyle} resizeMode="contain" source={leftIcon} />
                </View>
                <View style={inputBoxArea}>
                    <TextInput
                        {...inputProps}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        style={inputBox}
                        placeholder={placeholder}
                        placeholderTextColor="#fff"
                        autoCapitalize="none"
                    />
                </View>
                <TouchableOpacity
                    onPress={onPress}
                    style={rightIconStyle}
                >
                    <Image style={rightIconStyle} resizeMode="contain" source={rightIcon} />
                </TouchableOpacity>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    main: {
        padding: 0,
        marginTop: 25,
    },
    mainInner: {
        flexDirection: 'row',
        position: 'relative',

    },
    leftIconBoxStyle: {
        paddingTop:Platform.OS === 'ios' ? 0 : 5,
        width: 25,
        alignItems: 'center',
    },
    leftIconStyle: {
        marginTop:Platform.OS === 'ios' ? 2 : 0,
        height: 36,
        marginRight: 6,
    },
    rightIconStyle: {
        height: 36,
        marginLeft: 6,
        position: 'absolute',
        right: 0,
        width:20
    },


});

export default Input

