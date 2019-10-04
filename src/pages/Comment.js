import React from "react";
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView } from "react-native";

import LinearGradient from "react-native-linear-gradient";

import Header from "../components/Header";
import CommentBox from "../components/CommentBox";
import CommentInputBox from "../components/CommentInputBox"; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Comment = (props) => {
  const {
    main,
    page,
    linearGradient,
    replyMainArea,
    replyArea,
    footerStyle,
    footerInnerStyle
  } = styles;
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: -0.8 }}
      colors={["#d13139", "#560004", "#560004"]}
      style={linearGradient}
    >
      <View style={main}>
        <Header
          onPress={() => props.navigation.goBack()}
          iconImageLeft={require("./../assets/img/keyboardArrowLeftMaterial.png")}
          title="Comments"
        />  
        <KeyboardAwareScrollView>
        <View style={page}> 
        {props.list}  
        </View>
        </KeyboardAwareScrollView>
      
      </View>
      <KeyboardAvoidingView behavior='position'>
        <View style={footerStyle}>
          <View style={footerInnerStyle}> 
            <CommentInputBox />
          </View>
        </View> 
         </KeyboardAvoidingView>
      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  main: {
    flex: 1 
  },
  page: {
    paddingBottom: 50,
    backgroundColor: "#fff",
    height: "100%"
  },
  profileImageStyle: {
    width: 145,
    height: 145,
    alignSelf: "center",
    marginBottom: 10
  },
  profileImageBoxStyle: {
    width: 145,
    height: 145,
    alignSelf: "center"
  },
  cameraBtnStyle: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 50,
    right: -16
  },
  replyMainArea: {},
  replyArea: {
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)"
  },
  footerStyle: {
    backgroundColor: "#fff",
    paddingTop: 5
  },
  footerInnerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.13)",
    alignSelf: "center",
    paddingBottom: 15
  }
});

export default Comment;
