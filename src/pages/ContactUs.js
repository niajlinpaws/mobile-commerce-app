import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ButtonRound from "../components/ButtonRound";
import Spinner from "react-native-loading-spinner-overlay";

import LinearGradient from "react-native-linear-gradient";

import Header from "../components/Header";
import InputWhite from "../components/InputWhite";
import TextAreaWhite from "../components/TextAreaWhite"; 
import SelectBox from "../components/SelectBox";

const ContactUs = (props) => {
  const { main, page, linearGradient, pageBtn } = styles;
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: -0.8 }}
      colors={["#d13139", "#560004", "#560004"]}
      style={linearGradient}>
    
     <Spinner visible={props.loading} />
    
      <View style={main}>
      
        <Header
          onPress={()=> props.navigation.goBack()}
          iconImageLeft={require("./../assets/img/keyboardArrowLeftMaterial.png")}
          title="Contact Us"
        />
       
        <View style={page}>
        <KeyboardAwareScrollView>
        {props.contactusForm}
          <View style={pageBtn}>
            <ButtonRound
              buttoncolor="#d13139"
              textcolor="#fff"
              bordercolorstyle="#d13139"
              ButtonText="Save"
              height={54.5}
              fontSize={21.1}
              onPress ={()=> props.onContactus()}
            />
          </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </LinearGradient>
   
  );
};

const styles = StyleSheet.create({
  linearGradient: {
   
  },
  main: {
      height: '100%'
  },
  page: {
    paddingBottom: 50,
    backgroundColor: "#fff",
    height: (Dimensions.get('window').height - 64),
    
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
  pageBtn: {
    marginTop: 54,
    paddingHorizontal: 35
  }
});

export default ContactUs;
