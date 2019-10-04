import React from "react";
import {
  View,
  StyleSheet, 
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions
} from "react-native";

const HeaderSearch = (props) => {
  const {
    main,
    iconImageStyle,
    button, 
    mainInner
  } = styles;

  const titleStyle = { 
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#fff",
    height: 30,
    width: "100%"
};

  return (
    <View style={main}>
      <View style={mainInner}>
        <TextInput
          style={titleStyle}
          placeholderTextColor="#fff"
          placeholder="Search etc…"
          onChangeText={(text)=>props.onChangeText(text)}
        /> 
        <TouchableOpacity
          onPress={props.onPress} 
          style={button}
        >
          <Image
            style={iconImageStyle}
            resizeMode="contain"
            source={require('../assets/img/closeBtn.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { 
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    height: Platform.OS == 'ios' ? Dimensions.get('window').height == 812 ? 75 : 64 : 44,
    paddingHorizontal: 8,
    alignItems: "center"
  },
  mainInner: {
    marginTop: Platform.OS == 'ios' ? Dimensions.get('window').height == 812 ? 30 : 20 : 0,
    width: "100%",
    borderRadius: 3,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#cccccc",
    paddingHorizontal: 10,
    flexDirection: "row",
    position: "relative"
  },
  leftbuttonsStyle: {
    width: 60
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 30,
    borderTopEndRadius: 3, 
    position: "absolute",
    right: 0
  },
  iconImageStyle: {
    width: 13,
    height: 13
  },
  rightbuttonsStyle: {
    width: 60
  },
 
});

export default HeaderSearch;
