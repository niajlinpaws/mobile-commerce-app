import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

 

const EngineComponentBox = ({
    
  iconImage,
  text,
  iconBgColor,
  pVertical,
  textColor
  
}) => {
  const regular = "OpenSans-Regular";
  const bold = "OpenSans-Bold";
  const semiBold = "OpenSans-SemiBold";
  const extraBold = "OpenSans-ExtraBold";

  const { 
    mainInner,
    iconImageStyle,
 
  } = styles;


  var main = {
        margin: 6,
        paddingHorizontal: 19,
        paddingVertical: pVertical,
        flexDirection: "row",
        borderRadius: 2.4,
        backgroundColor: "#fff",
        shadowColor: "rgba(211, 211, 211, 0.5)",
        shadowOffset: {
          width: 3,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
  };
  var iconAreaStyle =  {
        height: 36,
        width: 36,
        borderRadius: 18,
        marginBottom: 8,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: iconBgColor, 
    
  }; 
  var textStyle = {
       color: textColor,
       fontSize: 16.4,
       fontFamily: "OpenSans-Regular",
       fontWeight: "normal",
       fontStyle: "normal",
       lineHeight: 21.1,
       letterSpacing: 0,
       textAlign: "center",
  };

  return ( 
      <TouchableOpacity style={main}>
        <View style={mainInner}>
            <View style = { iconAreaStyle }>
              <Image style = { iconImageStyle } resizeMode="contain" source={iconImage} />
            </View>
            <View>
              <Text style = { textStyle }>{ text }</Text>
            </View>
        </View>
      </TouchableOpacity> 
  );
};

const styles = StyleSheet.create({

  mainInner: {
    flex: 1
  }, 
});

export default EngineComponentBox;
