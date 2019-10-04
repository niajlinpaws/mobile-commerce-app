import React from 'react';
import {
    View,
    StyleSheet,
    Text, 
    TouchableOpacity,
Image
} from 'react-native';
 
const Button = ({ ButtonText, buttoncolor, textcolor, bordercolorstyle, height, fontSize,  iconImageLeft, iconImageRight, mHorizontal, onPress }) => {
   
    const { main } = styles;
    var Button = { 
        height: height,
        borderRadius: 3,
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
        fontFamily: 'OpenSans-Bold', 
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        marginHorizontal: mHorizontal,
    };
     var iconImageLeftStyle = {   
  
    };
     var iconImageRightStyle = {   
      
    };
    return (
        <View style={ main }> 
            <TouchableOpacity 
                onPress={ onPress }
                style = { Button }
            >
                <Image style = { iconImageLeftStyle } resizeMode="contain" source={iconImageLeft} />
                <Text  style = { ButtonTextStyle } >{ ButtonText }</Text>
                <Image style = { iconImageRightStyle } resizeMode="contain" source={iconImageRight} />
            </TouchableOpacity>  
        </View>

    )

}

const styles = StyleSheet.create({
    main: {
 
      
     },
      
    
});

export default Button

