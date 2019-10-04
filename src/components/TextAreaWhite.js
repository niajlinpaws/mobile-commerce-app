import React from 'react';
import {
    View,
    StyleSheet,
    TextInput, 
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
 


const regular = 'OpenSans-Regular';
const bold = 'OpenSans-Bold';
const semiBold = 'OpenSans-SemiBold';
const extraBold = 'OpenSans-ExtraBold';

 

const inputBox = {  
    minHeight: 80,
    maxHeight: 120,
    color:'#000',
    fontSize: 16.4,
    textAlignVertical: "top"

};
 



const TextAreaWhite = ({ placeholder, leftIcon, rightIcon, bgColor, borderColor ,onChangeText,inputProps}) => { 
    const { main, leftIconStyle, rightIconStyle, mainInner, leftIconBoxStyle } = styles;

    const inputBoxArea = {
        borderStyle: "solid",
        borderBottomWidth: .5,
        borderColor: borderColor, 
        backgroundColor: bgColor, 
        width: (Dimensions.get('window').width - 65), 
        position:'relative' 
     };    
    return (
        <View style={ main }> 
           <View style={ mainInner }>
            <View style = { leftIconBoxStyle }>
                <Image style = { leftIconStyle } resizeMode="contain" source={ leftIcon } />
            </View>
            <View style={ inputBoxArea }>
                <TextInput 
                 {...inputProps}
                    style={ inputBox }
                    placeholder={placeholder} 
                    placeholderTextColor = "rgba(0, 0, 0, .5)"  
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={onChangeText}
                    
                    
                />
            </View> 
            <TouchableOpacity  style = { rightIconStyle }>
                <Image style = { rightIconStyle } resizeMode="contain" source={ rightIcon } /> 
            </TouchableOpacity>
           </View>
        </View>

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
     leftIconBoxStyle:{
        width: 25,
        alignItems: 'center',
     },
     leftIconStyle: {
        height: 36,
        marginRight: 6,
     },
     rightIconStyle: {
        height: 36,
        marginLeft: 6,
        position: 'absolute',
        right: 0,
     },

    
});

export default TextAreaWhite 

