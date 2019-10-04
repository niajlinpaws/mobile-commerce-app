import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput
} from "react-native";

const CommentInputBox = props => {
  const { main, Button, iconImageLeftStyle, CommentInputBoxStyle } = styles;

  return (
    <View style={main}>
      <TextInput
        style={CommentInputBoxStyle}
        placeholder="Write a comment"
        placeholderTextColor="#aaaaaa"
        multiline={true}
      />
      <TouchableOpacity style={Button}>
        <Image
          style={iconImageLeftStyle}
          resizeMode="contain"
          source={require("../assets/img/sentIcon.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    height: 58,
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: -2.5
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    paddingHorizontal: 15
  },
  Button: {
    width: 40,
    height: 40,
    backgroundColor: "rgb(183, 39, 46)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  iconImageLeftStyle: {
    alignSelf: "center",
    width: 20,
    height: 20
  },
  CommentInputBoxStyle: {
    width: Dimensions.get("window").width - 75,
    height: 40,
    borderRadius: 4,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgb(215, 215, 215)",
    paddingHorizontal: 7.5,
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "rgb(155, 155, 155)"
  }
});

export default CommentInputBox;
