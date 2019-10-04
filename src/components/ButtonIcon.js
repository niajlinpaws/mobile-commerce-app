import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
Image
} from 'react-native';
 
const ButtonIcon = ({ marginH, buttoncolor, textcolor, bordercolorstyle, height, fontSize,  iconImageLeft, onPress }) => {
   
    const { main } = styles;
    var Button = { 
        height: height,
        borderRadius: 200,
        backgroundColor: buttoncolor,  
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: bordercolorstyle,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    };
    var ButtonTextStyle = {   
        color: textcolor,  
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: fontSize,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
    };
     var iconImageLeftStyle = {   
      marginHorizontal: marginH,
    };
 
    return (
        <View style={ main }> 
            <TouchableOpacity 
             onPress = {onPress}
             style = { Button }
            >
                <Image style = { iconImageLeftStyle } resizeMode="contain" source={iconImageLeft} /> 
            </TouchableOpacity>  
        </View>

    )

}

const styles = StyleSheet.create({
    main: {
      paddingHorizontal: 4.1,
      paddingVertical: 0, 
     },
});

export default ButtonIcon