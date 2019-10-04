import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const regular = "OpenSans-Regular";

const OtpView = ({getRef,onKeyPress,...inputProps }) => {

  const { col, inputBoxArea } = styles;

  const inputBox = {
    width: 58.7,
    fontFamily: regular,
    fontSize: 28.2,
    color: "#000",
    textAlign: 'center',
  };
  return (
    <View style={col}>
      <View style={inputBoxArea}>
        <TextInput
          {...inputProps}
          onKeyPress={(e)=>onKeyPress(e)}
          ref={input=>getRef(input)}
          maxLength={1}
          style={inputBox}
          keyboardType='numeric'
          placeholderTextColor="rgba(0, 0, 0, .5)"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  col: {
    padding: 10,
  },

  inputBoxArea: {
    borderStyle: "solid",
    borderBottomWidth: 0.5,
    borderColor: "rgba(0, 0, 0, .5)",
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    justifyContent: 'center',
  }
});

export default OtpView;