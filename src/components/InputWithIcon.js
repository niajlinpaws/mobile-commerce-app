import React from 'react';
import {
    View,
    StyleSheet,
    TextInput, 
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';
 
const InputWithIcon = ({ placeholder,rightIcon }) => {
    const { main, rightBtnIconStyle, rightIconStyle, inputBox, inputBoxOuter  } = styles;
    return (
        <View style={ main }>
            <View  style = { inputBoxOuter }>
                <TextInput style={ inputBox }
                    placeholder={ placeholder } 
                    placeholderTextColor = "#aaaaaa"  
                />
                <TouchableOpacity style = { rightBtnIconStyle } >
                    <Image style = { rightIconStyle } resizeMode="contain" source={rightIcon} />
                </TouchableOpacity>
            </View> 
        </View>

    )

}

const styles = StyleSheet.create({
    main: {
      paddingHorizontal: 20,
      paddingVertical: 6, 
     },
     inputBox: {  
        height:Platform.OS === 'ios' ? 34 : "auto",
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#fff',  
        alignSelf: 'center', 
        color:'#000000',
    },  
    inputBoxOuter: {  
        width: '100%',
        height: 36,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: 'rgb(234, 234, 234)',
        alignSelf: 'center',
        paddingHorizontal: 17,
        color:'#000000',
        position: 'relative',
    },
    rightBtnIconStyle: {
        position: 'absolute',
        width: 30,
        right: 0,
        top:0,
        bottom: 0, 
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default InputWithIcon

