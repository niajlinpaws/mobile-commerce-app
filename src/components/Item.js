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

const Item = ({ 
  listItemText,
  borderWidth,
  showArrow = true,
  onPress 
}) => {

  const { ListItemIconStyle, textAreaStyle } = styles;

  var main = {
    justifyContent: "center",
    minHeight: 58.1,
    borderBottomWidth: borderWidth,
    borderColor: "rgba(0,0,0,.5)",
    paddingHorizontal: 16,
  };

  var ListItemStyle = {
    flexDirection: "row",
    alignItems: 'center',
    // justifyContent: 'center',
  };

  var ListItemTextStyle = {
    fontSize: 16,
    // fontWeight: bold,
    // fontFamily: 'OpenSans-Bold',
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#4a4a4a",
    marginTop: 2,
    width: '100%',
    flexWrap: 'wrap',
  };

  return (
    <View style={main}>
      <TouchableOpacity 
        style={ListItemStyle}
        onPress={onPress}
      >
        <View style={textAreaStyle}>
          <Text style={ListItemTextStyle} >{listItemText}</Text>
        </View>
        {showArrow &&  
          <Image
            style={ListItemIconStyle}
            resizeMode="contain"
            source={require('../assets/img/keyboardArrowRightMaterial.png')}
          />
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  ListItemIconStyle: {
    width: 9.7,
    marginLeft: 10,
  },

  timeWentStyle: {
    fontSize: 16.4,
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#000",

  },
  textAreaStyle: {
    flexWrap: 'wrap',
    width: (Dimensions.get('window').width - 50),
  },

});

export default Item;
