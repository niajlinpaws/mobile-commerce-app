import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const regular = 'OpenSans-Regular';
const bold = 'OpenSans-Bold';
const semiBold = 'OpenSans-SemiBold';
const extraBold = 'OpenSans-ExtraBold';


const selectTextStyle = {
    lineHeight: 36,
    color: '#000',
    // "rgba(0, 0, 0, .5)",
};


const SelectBox = ({ selctText, leftIcon, rightIcon, bgColor, borderColor, placeholder, items, onValueChange }) => {
    const { main, leftIconStyle, rightIconStyle, rightIconImgStyle, mainInner, leftIconBoxStyle, } = styles;

    const selectMainStyle = {
        position: 'absolute', 
        left: 25,
        right: 6,
        height: 42,
        justifyContent: 'center',
        borderStyle: "solid",
        borderBottomWidth: .5,
        borderColor: borderColor,
        backgroundColor: bgColor,
        paddingBottom: 5,  
    };
    const subjectPicker = {
        position: 'absolute', 
        left: 0,
        right: 0,
        top: -10,
        height: 42, 
        borderWidth: 1, 
        borderColor: "#fff"
    }
    return (
        <TouchableOpacity style={main}>
            <View style={mainInner}>
                <View style={leftIconBoxStyle}>
                    <Image style={leftIconStyle} resizeMode="contain" source={leftIcon} />
                </View>
                <View style={selectMainStyle}>
                    <View style={subjectPicker}>
                        <RNPickerSelect
                            placeholder={placeholder}
                            placeholderTextColor = "rgba(0, 0, 0, .5)"
                            items={items}
                            onValueChange={onValueChange}
                            style={{...pickerSelectStyles}}
                        
                        />
                    </View>
                    {/* <Text style={ selectTextStyle }>{selctText}</Text> */}
                </View>
                <View style={rightIconStyle}>
                    <Image style={rightIconImgStyle} resizeMode="contain" source={require('../assets/img/keyboardArrowDownMaterial.png')} />
                </View>
            </View>
        </TouchableOpacity>

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
        width: 25,
        alignItems: 'center',
    },
    leftIconStyle: {
        marginTop: Platform.OS === 'ios' ? -7 : 0,
        height: 36,
        marginRight: 6,
    },
    rightIconStyle: {
        height: 30,
        width: 40,
        paddingRight: 20,
        marginLeft: 6,
        position: 'absolute',
        right: 0,
        backgroundColor: '#fff',
    },
    rightIconImgStyle:{
        height: 30,
        width: 15, 
        position: 'absolute',
        right:5,
        
    },
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16.4,
        paddingTop: 13,
        lineHeight: 20,
        backgroundColor: 'white',
        color: 'black', 
    },
    inputAndroid: {
        fontSize: 16.4,
        paddingTop: 13,
        lineHeight:20,
        // paddingHorizontal: 10,
        paddingBottom: 12,
        backgroundColor: 'white',
        color: 'black',
    },
});

export default SelectBox

