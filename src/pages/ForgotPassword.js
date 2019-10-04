import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions
} from "react-native";

import ButtonRound from "../components/ButtonRound";
import Spinner from "react-native-loading-spinner-overlay";

import LinearGradient from "react-native-linear-gradient";

import Header from "../components/Header";


const ForgotPassword = (props) => {
  const { main, page, linearGradient, pageBtn, forgetMain, helpSection } = styles;

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

  const textStyle = {
    fontFamily: regular,
    fontSize: 16.4,
    color: "rgb( 0, 83, 138)",
    alignSelf: "center",
  };

  const bold1 = {
    fontFamily: bold,
  };
  const underline = {
    textDecorationLine: 'underline',
  }


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
          onPress={() => props.navigation.goBack()}
          iconImageLeft={require("./../assets/img/keyboardArrowLeftMaterial.png")}
          title="Forgot Password"
        />

        <View style={page}>
          <View style={forgetMain}>
            <Text style={forgetText}>
              Enter your email below to receive your reset password instructions
            </Text>
          </View>
          {props.forgotPasswordForm}

          <View style={pageBtn}>
            <ButtonRound
              buttoncolor="#d13139"
              textcolor="#fff"
              bordercolorstyle="#d13139"
              ButtonText="Submit"
              height={54.5}
              fontSize={21.1}
              // onPress={()=>{props.navigation.navigate('VerificationCode')}}
              onPress={() => props.onForgot()}
            />
            <View style={helpSection}>
              <TouchableOpacity>
                <Text style={textStyle}>Having Issues?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { props.navigation.navigate('ContactUs') }}
              >
                <Text style={[textStyle, bold1, underline]}>Contact Us</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

      </View>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  page: {
    // paddingBottom: 50,
    flex: 1,
    backgroundColor: "#fff",
    // height: (Dimensions.get('window').height - 130), 
  },
  pageBtn: {
    marginTop: 54,
    paddingHorizontal: 35,

  },
  forgetMain: {
    paddingHorizontal: 25,
    marginTop: 57,
    marginBottom: 20
  },
  forgotBoxStyle: {
    alignItems: 'flex-end',
    marginBottom: 25,
  },
  footerMain: {
    alignItems: 'center',
    width: '100%',
  },
  footer: {
    height: 44,
    flexDirection: 'row',
  },
  helpSection: {
    marginTop:150
    // position: 'absolute',
    // bottom: 35,
    // right: 0,
    // left: 0,
  },

});

export default ForgotPassword;
