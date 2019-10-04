import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

import ButtonIcon from "./ButtonIcon";
import ButtonRound from "./ButtonRound";

 

const CardWithName = ({ 
  cardBg,
  cardName, 
  heartIcon,
  onPress
}) => {
  const {
    main,
    cardBgStyle,
    cardNameStyle,
    heartIconStyle,
  
  } = styles; 

  return (
    <View style={main}>  
        <TouchableOpacity
          onPress={onPress}
        >
         <Image style = {heartIconStyle} resizeMode="contain" source={heartIcon} />
         <ImageBackground
            imageStyle={{ resizeMode: "cover" }}
            style={cardBgStyle}
            source={cardBg}
          />
           <Text numberOfLines={1} style={cardNameStyle}>{cardName}</Text>
        </TouchableOpacity>
          
    </View>
  );
};

const styles = StyleSheet.create({
  main: { 
    marginTop: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(211, 211, 211, 0.5)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    borderRadius: 4, 
  },
    
  linearGradient: {
    position: "absolute",
    left: 0
  },
 
  cardBgStyle: { 
    height: 119.1, 
    position: "relative"
  },
  cardNameStyle: {  
    padding: 8,
    fontFamily:"OpenSans-Regular",
    fontSize: 16.4,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 21.1,
    letterSpacing: 0,
  }, 
  itemArea: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ebebeb",

  },
  itemAreaInner: { 
      marginBottom: 5,
  },
  heartIconStyle: {
    width: 21,
    height: 21,
    position: "absolute",
    zIndex: 999,
    right: 8,
    top: 8,  
  },
   
});

export default CardWithName;
