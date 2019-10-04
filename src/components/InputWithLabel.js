import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  Text,
  Platform,
  TouchableOpacity
} from "react-native";

const inputBox = {
  height:Platform.OS === 'ios' ? 36 : "auto",
  color: "#000",
  fontFamily: "OpenSans-SemiBold",
};

const InputWithLabel = ({
  placeholder,
  leftIcon,
  rightIcon,
  bgColor,
  borderColor,
  labelText
}) => {
  const {
    main,
    leftIconStyle,
    rightIconStyle,
    mainInner,
    leftIconBoxStyle,
    labelStyle,
    labelTextStyle
  } = styles;

  const inputBoxArea = {
    width: '52%',
    borderStyle: "solid",
    borderBottomWidth: 0.5,
    borderColor: "#000", 
   
  };
  return (
    <View style={main}>
      <View style={mainInner}>
        <View style={leftIconBoxStyle}>
          <Image style={leftIconStyle} resizeMode="contain" source={leftIcon} />
        </View>
        <View style={labelStyle}>
          <Text style={labelTextStyle}>{labelText}</Text>
        </View>
        <View style={inputBoxArea}>
          <TextInput
            style={inputBox}
            placeholder="Value"
            placeholderTextColor="#000"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 0, 
    marginTop: 20,
  },
  mainInner: { 
    flexDirection: "row",
    position: "relative",
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIconBoxStyle: {
    paddingTop:5,
    width: 25,
    alignItems: "center",
    marginRight: 10,
  },
  leftIconStyle: {
    height: 36,
    marginRight: 6,
  },
  rightIconStyle: { 
    marginLeft: 6,
    position: "absolute",
    right: 0
  },

  labelStyle:{ 
    width: '30%',
    borderStyle: "solid",
    borderBottomWidth: 0.5,
    borderColor: "#000",
    height: 36,
    justifyContent: 'center',
  } 
});

export default InputWithLabel;
