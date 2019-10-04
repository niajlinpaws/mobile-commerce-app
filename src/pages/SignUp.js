import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/Header";
import Input from "../components/Input";

import ButtonRound from "../components/ButtonRound";
import Button from "../components/Button";
import Spinner from "react-native-loading-spinner-overlay"

import Checkbox from "../components/Checkbox";
import Footer from "../components/Footer";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const SignUp = (props) => {

  const {
    main,
    page,
    avatorIconStyle,
    heading,
    container,
    forgotBoxStyle,
    footerMain,
    footer,
  } = styles;


  const regular = 'OpenSans-Regular';
  const bold = 'OpenSans-Bold';
  const semiBold = 'OpenSans-SemiBold';
  const extraBold = 'OpenSans-ExtraBold';



  const headingText = {
    fontFamily: bold,
    fontSize: 32.8,
    fontStyle: "normal",
    letterSpacing: 0.91,
    color: "#fff",
  };

  const footerText = {
    color: '#fff',
    fontSize: 18.8,
    fontFamily: regular,
    letterSpacing: 0.52,
  };

  const boldFont = {
    fontFamily: bold,
  };

  return (
    <ImageBackground
      imageStyle={{ resizeMode: "cover" }}
      style={avatorIconStyle}
      source={require('./../assets/img/fullBg2.png')}
    >
      <KeyboardAwareScrollView>
        <View style={container}>
          <Spinner visible={props.loading} />
          <View style={main}>
            <View style={page}>
              <View style={heading}>
                <Text style={[headingText]}>Signup</Text>
              </View>
              <View >
                {props.signupForm}
                <Checkbox
                  onPress={() => props.toggleTermsAndConditon()}
                  checked={props.acceptTerms}
                  showtAndc={() => props.viewtAndc()}
                />

              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={footerMain}>
        <ButtonRound
          buttoncolor="#fff"
          textcolor="#d13139"
          bordercolorstyle="#fff"
          ButtonText="Signup"
          height={54.5}
          fontSize={21.1}
          onPress={() => props.onSignup()}
        />
        <View style={footer} >
          <Text style={footerText}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => { props.navigation.navigate('Login') }}
          >
            <Text style={[footerText, boldFont]} >Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatorIconStyle: {
    flex: 1,
  },
  main: {
  },

  page: {
    paddingHorizontal: 34,
    paddingTop: 100

  },
  headerbox: {
    marginVertical: 18
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000",
    textTransform: "uppercase",
    marginBottom: 40,
  },

  textBoxStyle: {
    marginVertical: 10
  },

  forgotBoxStyle: {
    alignItems: 'flex-end',
    marginBottom: 25,
  },
  footerMain: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 34,
  },
  footer: {
    height: 44,
    flexDirection: 'row',
  },
});

export default SignUp;
