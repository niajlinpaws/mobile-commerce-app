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
    height:Platform.OS === 'ios' ? 46 : "auto",
    fontSize: 16.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0.46,
    fontFamily: 'OpenSans-Regular',
};




const InputWhite = ({ placeholder, leftIcon, rightIcon, bgColor, borderColor, inputProps, inputValues, onChangeText, secureTextEntry, keyboardType}) => {
    const { main, leftIconStyle, rightIconStyle, mainInner, leftIconBoxStyle } = styles;

    const inputBoxArea = {
        borderStyle: "solid",
        borderBottomWidth: .5,
        borderColor: borderColor,
        backgroundColor: bgColor,
        width: (Dimensions.get('window').width - 65),
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
                        value={inputValues.value}
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                        autoCapitalize="none"
                        style={inputBox}
                        secureTextEntry={secureTextEntry}
                        placeholder={placeholder}
                        placeholderTextColor="rgba(0, 0, 0, .5)"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <TouchableOpacity style={rightIconStyle}>
                    <Image style={rightIconStyle} resizeMode="contain" source={rightIcon} />
                </TouchableOpacity>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    main: {
        padding: 0,
        paddingHorizontal: 16,
        marginTop: 25,
    },
    mainInner: {
        flexDirection: 'row',
        position: 'relative',

    },
    leftIconBoxStyle: {
        paddingTop:5,
        width: 25,
        alignItems: 'center',
    },
    leftIconStyle: {
        height: 36,
        marginRight: 6,
    },
    rightIconStyle: {
        height: 36,
        marginLeft: 6,
        position: 'absolute',
        right: 0,
    },


});

export default InputWhite

