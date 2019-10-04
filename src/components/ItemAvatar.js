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
  avatarIcon,
  listItemText,
  borderWidth,
  bold,
  rightIcon,
  postedTime
}) => {
  const {
    ListItemIconStyle,
    postedStyleTime,
    textAreaStyle,
    avatarIconStyle,
    rightIconStyle
  } = styles;

  var main = {
    justifyContent: "center",
    minHeight: 58.1,
    borderBottomWidth: borderWidth,
    borderColor: "rgba(0,0,0,.5)",
    paddingHorizontal: 16,
    paddingVertical: 13
  };

  var ListItemStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  };

  var ListItemTextStyle = {
    fontSize: 16,
    fontWeight: bold,
    fontFamily: "OpenSans-Bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#4a4a4a",
    marginBottom: 5,
    width: "100%",
    flexWrap: "wrap"
  };

  return (
    <View style={main}>
      <View style={ListItemStyle}>
        <Image
          style={avatarIconStyle}
          resizeMode="cover"
          source={avatarIcon}
        />
        <View style={textAreaStyle}>
          <Text style={ListItemTextStyle}>{listItemText}</Text>
          <View>
            <Text style={postedStyleTime}>{postedTime}</Text>
          </View>
        </View>
        <Image 
          style={rightIconStyle} 
          resizeMode="contain" 
          source={rightIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ListItemIconStyle: {
    width: 9.7
  },
  timeWentStyle: {
    fontSize: 16.4,
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#000"
  },
  textAreaStyle: {
    flexWrap: "wrap",
    width: Dimensions.get("window").width - 150
  },
  postedStyleTime: {
    fontSize: 16.4,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 21,
    letterSpacing: 0,
    color: "rgba(0,0,0,0.5)"
  },
  avatarIconStyle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderStyle: "solid",
    borderWidth: 0.6,
    borderColor: "rgb(207, 207, 207)",
    marginRight: 11
  },
  rightIconStyle: {
 
  }
});

export default Item;
