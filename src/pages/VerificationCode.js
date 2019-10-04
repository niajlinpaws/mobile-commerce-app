import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  TextInput
} from "react-native";

import ButtonRound from "../components/ButtonRound";
import Spinner from "react-native-loading-spinner-overlay";

import LinearGradient from "react-native-linear-gradient";


import Header from "../components/Header";
import InputWhite from "../components/InputWhite";

const VerificationCode = (props) => {
  const {
    main,
    page,
    linearGradient,
    pageBtn,
    forgetMain,
    helpSection,
    row,
    col,
    inputBoxArea, 
    resendbtn,
    resendbtnText,

  } = styles;

  const regular = "OpenSans-Regular";
  const bold = "OpenSans-Bold";
  const semiBold = "OpenSans-SemiBold";
  const extraBold = "OpenSans-ExtraBold";

  const forgetText = {
    fontSize: 17.6,
    fontFamily: regular,
    fontWeight: "normal",
    textAlign: "center"
  };

  const inputBox = {
    width: 58.7,
    fontFamily: regular,
    fontSize: 28.2,
    color: "#000",
    textAlign: 'center',
  };

  const textStyle = {
    fontFamily: regular,
    fontSize: 16.4,
    color: "rgb( 0, 83, 138)",
    alignSelf: "center"
  };

  const bold1 = {
    fontFamily: bold
  };
  const underline = {
    textDecorationLine: "underline"
  };

  return (
    
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: -0.8 }}
      colors={["#d13139", "#560004", "#560004"]}
      style={linearGradient}
    >
     <Spinner visible={props.loading} />
      <View style={main}>
        <Header
          onPress={()=> props.navigation.goBack()}
          iconImageLeft={require("./../assets/img/keyboardArrowLeftMaterial.png")}
          title="Verification Code"
        />

        <View style={page}>
          <View style={forgetMain}>
            <Text style={forgetText}>
              We have sent verification code on your registered email address
            </Text>
          </View>

          {props.verificationForm}

          <View style={pageBtn}>
            <ButtonRound
              buttoncolor="#d13139"
              textcolor="#fff"
              bordercolorstyle="#d13139"
              ButtonText="Submit"
              height={54.5}
              fontSize={21.1}
              onPress={()=>props.onVerification()}
            />
            <TouchableOpacity style = { resendbtn } onPress= {()=> props.onResendCode()}> 
                <Text  style = {resendbtnText} >Resend Code</Text> 
            </TouchableOpacity> 
            
          </View>
 
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  page: {
    // flex:1,
    paddingBottom: 50,
    backgroundColor: "#fff",
    height: (Dimensions.get("window").height)
  },
  pageBtn: {
    marginTop: 54,
    paddingHorizontal: 35
  },
  forgetMain: {
    paddingHorizontal: 25,
    marginTop: 57,
    marginBottom: 20
  },
  forgotBoxStyle: {
    alignItems: "flex-end",
    marginBottom: 25
  },
  footerMain: {
    alignItems: "center",
    width: "100%"
  },
  footer: {
    height: 44,
    flexDirection: "row"
  },
  helpSection: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
  },
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
  },
  resendbtn: {    
    justifyContent: 'center', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
},
resendbtnText:{
  fontFamily: 'OpenSans-Regular',
  fontSize: 16.4,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0.46,
  color: "rgb(0, 83, 138)",
  textDecorationLine: "underline",
  textDecorationStyle: "solid",
  textDecorationColor: "rgb(0, 83, 138)"
}
});

export default VerificationCode;
