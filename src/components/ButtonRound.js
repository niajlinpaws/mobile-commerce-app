import React from 'react';
import {
    View,
    StyleSheet,
    Text, 
    TouchableOpacity,
Image
} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';
 
const ButtonRound = ({ ButtonText, buttoncolor, textcolor, bordercolorstyle, height, fontSize,  iconImageLeft, iconImageRight, onPress }) => {
   
    const regular = 'OpenSans-Regular';
    const bold = 'OpenSans-Bold';
    const semiBold = 'OpenSans-SemiBold';
    const extraBold = 'OpenSans-ExtraBold'; 

    const { main, mainInner } = styles;
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
        fontFamily: bold, 
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
    };
     var iconImageLeftStyle = {   
       marginRight: 15,
    };
     var iconImageRightStyle = {   
        marginLeft: 15,
    };
 

    return (
        <View style={ main }> 
            <View  style={ mainInner }>
            <TouchableOpacity 
                onPress={ onPress }
                style = { Button }
            >
                <Image style = { iconImageLeftStyle } resizeMode="contain" source={iconImageLeft} />
                <Text  style = {ButtonTextStyle} >{ ButtonText }</Text>
                <Image style = { iconImageRightStyle } resizeMode="contain" source={iconImageRight} />
            </TouchableOpacity>  
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    main: {
      paddingHorizontal: 4.1,
      paddingVertical: 6,
      flexDirection: 'row'
     },
     mainInner: {
        flex: 1,   
     }
      
    
});

export default ButtonRound

