import React from 'react';
import {
    View,
    StyleSheet,
    Text, 
    TouchableOpacity,

} from 'react-native';
 
const regular = 'OpenSans-Regular';
const bold = 'OpenSans-Bold';
const semiBold = 'OpenSans-SemiBold';
const extraBold = 'OpenSans-ExtraBold'; 

const bold1 = { 
  fontFamily: semiBold,  
  fontWeight: '500', 
};

const regular1 = { 
    fontFamily: regular,   
  };
 
const Checkbox = (props) => {
   
    const { main, checkbox, check, checkBoxTextStyle, checkboxarea, white, checkBoxStyle, uncheck } = styles;
    
    return (
        <View style={ main }> 
            <TouchableOpacity  
                onPress={props.onPress}
                style = { checkboxarea } 
            >
                <View style = { checkbox } >
                    <View style = { props.checked ? check : uncheck } />
                </View> 
            </TouchableOpacity> 
            <View style = { checkBoxStyle }>
                <View>
                    <Text style = { [checkBoxTextStyle, regular1 ] } >I accept </Text>
                </View> 
                <TouchableOpacity 
                    onPress={()=>props.showtAndc()} 
                >
                    <Text style = {[checkBoxTextStyle, bold1, white ]}>"Terms & Conditions"</Text> 
                </TouchableOpacity>
            </View> 
             
        </View>

    )

}

const styles = StyleSheet.create({
    main: {
      paddingHorizontal: 0,
      paddingVertical: 6,
      flexDirection: 'row',
      alignItems: 'center', 
      marginVertical: 10,
      marginBottom: 50,
     },
     checkboxarea:{
         paddingRight: 10,
     },
     checkbox: {
        width: 14,
        height: 14,
        borderRadius: 3,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: '#eaeaea',
        position: 'relative',
        alignItems: 'center', 
        paddingTop: 3,
     },
     check: {
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#fff',
        width: 3,
        height: 6,
        transform:([{ rotateX: '0deg' }, { rotateZ: '0.6rad' }]),
        
     },
     uncheck:{
        borderColor: '#fff'
     },
     checkBoxTextStyle: {
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#fff",
        lineHeight: 18
     },
     
     white: {
        color: "#fff"
     },
     checkBoxStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }    
});

export default Checkbox

