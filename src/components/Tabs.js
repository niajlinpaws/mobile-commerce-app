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
        height: 47, 
        width: 97.5, 
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        position: 'relative', 
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
     var iconImageStyle = {   
         width: 29,
    }; 
    return (
        <View style={ main }> 
            <TouchableOpacity style = { Button }>
                <Image style = { iconImageStyle } resizeMode="contain" source={require('../assets/img/agreement.png')} /> 
            </TouchableOpacity> 
            <TouchableOpacity style = { Button }>
                <Image style = { iconImageStyle } resizeMode="contain" source={require('../assets/img/descriptionActive.png')} /> 
            </TouchableOpacity> 
            <TouchableOpacity style = { Button }>
                <Image style = { iconImageStyle } resizeMode="contain" source={require('../assets/img/calculator.png')} /> 
            </TouchableOpacity> 
            <TouchableOpacity style = { Button }>
                <Image style = { iconImageStyle } resizeMode="contain" source={require('../assets/img/bell.png')} /> 
            </TouchableOpacity> 
            <TouchableOpacity style = { Button }>
                <Image style = { iconImageStyle } resizeMode="contain" source={require('../assets/img/settings.png')} /> 
            </TouchableOpacity>  
        </View>

    )

}

const styles = StyleSheet.create({
    main: {
        paddingTop: 5,
        paddingBottom: 15,
        backgroundColor: '#fff',     
        flexDirection:'row',
        justifyContent:'space-between',       
        width: '100%', 
        shadowColor: "rgba(195, 195, 195, 0.5)",
        shadowOffset: {
          width: 0,
          height: -1
        },
        shadowRadius: 2.5,
        shadowOpacity: 1
    },
      
    
});

export default Footer

