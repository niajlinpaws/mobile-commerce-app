import React from 'react';
import {
    View,
    StyleSheet,
    Text, 
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
 
const Footer = ({ ButtonText, buttoncolor, textcolor, bordercolorstyle, height, fontSize,  iconImageLeft, iconImageRight   }) => {
   
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
        width: '100%',
    };
    var ButtonTextStyle = {   
        color: textcolor,  
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: fontSize,
        fontWeight: "600",
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
            
        </View>

    )

}

const styles = StyleSheet.create({
    main: {
        width: (Dimensions.get('window').width),  
        flexDirection: 'row', 
        height: 64,  
        paddingHorizontal: 14,
        paddingVertical:  10,
     },
      
    
});

export default Footer

