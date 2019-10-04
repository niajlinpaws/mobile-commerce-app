import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Switch
} from "react-native";

const ItemHeader = ({ listItemText }) => {

  var main = {
    justifyContent: "center", 
    minHeight: 51.6,
    backgroundColor: "rgb(234, 234, 234)",
    paddingHorizontal: 16, 
  };
 

  var ListItemTextStyle = {
    textTransform: 'uppercase',
    color: "#000",
    fontSize: 18.8,
    fontFamily: 'OpenSans-Bold',
    fontWeight: "600",
    fontStyle: "normal", 
    letterSpacing: -.2,
    width: '100%',
    flexWrap: 'wrap',   
  };

  return (
    <View style={main}>  
            <Text style={ListItemTextStyle} >{listItemText}</Text>
     </View>
  );
};

const styles = StyleSheet.create({ 
  
});

export default ItemHeader;
