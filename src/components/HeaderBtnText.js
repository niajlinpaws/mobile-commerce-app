import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    TouchableOpacity ,
    Platform
} from 'react-native';
 
const HeaderBtnText = ({ iconImageLeft,  textRight,  title, onPress, onRightPress }) => {
const { main, leftbuttonsStyle, rightbuttonsStyle, iconImageStyle,  button, textRightStyle  } = styles;

const bold = 'OpenSans-Bold';

const titleStyle = {
    width: (Dimensions.get('window').width - 160), 
    textAlign: 'center', 
    fontSize: 21,
    fontFamily: bold,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#fff"
};

return (
        <View style={main}> 
            <View style = { leftbuttonsStyle } >
                <TouchableOpacity 
                    onPress={onPress}
                    style = { button }  
                >
                    <Image style = { iconImageStyle } resizeMode="contain" source={iconImageLeft} />
                </TouchableOpacity>   
             </View> 
             
             <Text style = { titleStyle }>{ title }</Text> 
             
             <View style = { rightbuttonsStyle } >
                <TouchableOpacity 
                    onPress={onRightPress}
                    style = { button } 
                >
                    <Text style = { textRightStyle }>{textRight}</Text>     
                </TouchableOpacity>
             </View>
        </View>

    )

}

const styles = StyleSheet.create({
    main: {
        width: (Dimensions.get('window').width),  
        flexDirection: 'row', 
        height: Platform.OS == 'ios' ? Dimensions.get('window').height == 812 ? 75 : 64 : 44,
        alignItems: 'center',
        justifyContent: 'center',
     },
    leftbuttonsStyle: {  
        width: 80,
    },
    button:{
        width: 80,
        paddingTop: Platform.OS == 'ios' ? Dimensions.get('window').height == 812 ? 30 : 20 : 0,
        height: Platform.OS == 'ios' ? Dimensions.get('window').height == 812 ? 75 : 64 : 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconImageStyle: {

    },
    rightbuttonsStyle: {  
        width: 80,
        alignItems: 'flex-end',
    },
    textRightStyle:{
        fontSize: 17.6,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        fontFamily: 'OpenSans-Bold',
        color: "#fff",
    },
});

export default HeaderBtnText

