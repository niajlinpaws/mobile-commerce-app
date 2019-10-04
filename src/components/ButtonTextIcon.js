import React, { } from 'react';
import {
    View,
    StyleSheet,
    Text, 
    TouchableOpacity,
    Image
} from 'react-native';
 
const ButtonTextIcon = ({ ButtonText, buttoncolor, textcolor, bordercolorstyle, height, fontSize,  iconImageLeft, iconImageRight, mHorizontal   }) => {

    var Button = { 
        height: height,
        borderRadius: 3,
        backgroundColor: buttoncolor,  
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: bordercolorstyle,
        flexDirection: 'row', 
        alignItems: 'center',
        
    };
    var ButtonTextStyle = {   
        color: textcolor,  
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: fontSize,
        fontFamily: 'OpenSans-Bold', 
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        marginHorizontal: mHorizontal,
    };
     var iconImageLeftStyle = {   
        marginRight: 7.5,
    };
     var iconImageRightStyle = {   
      
    };
    return (
        <View> 
            <TouchableOpacity style = { Button }>
                <Image style = { iconImageLeftStyle } resizeMode="contain" source={iconImageLeft} />
                <Text  style = { ButtonTextStyle } >{ButtonText}</Text>
                <Image style = { iconImageRightStyle } resizeMode="contain" source={iconImageRight} />
            </TouchableOpacity>  
        </View>

    )

}

const styles = StyleSheet.create({ 
    
});

export default ButtonTextIcon

