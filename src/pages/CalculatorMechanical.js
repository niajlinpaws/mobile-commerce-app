import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  SafeAreaView
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

import Header from "../components/Header";
import Tabs from "../components/Tabs";
import ItemCard from "../components/ItemCard";
import ButtonRound from "../components/ButtonRound";
import EngineComponent from "../components/EngineComponent";
import InputWithLabel from "../components/InputWithLabel";

const CalculatorMechanical = (props) => {
  const {
    main,
    page,
    linearGradient,
    resultsScrollMain,
    resultsScroll,
    resultsScrollInner,
    resultsScrollText,
    calResult,
    suggestedProducts,
    submintBtn,
    bold,
    redcolor,
    row,
    col
  } = styles;
  return (
    <LinearGradient
      start={{ x: 0, y: 0.3 }}
      end={{ x: 2, y: 0.3 }}
      colors={["#d13139", "#560004", "#560004"]}
      style={linearGradient}
    >
      <View style={main}>
        <Header
          iconImageRight={require("./../assets/img/bookmarkBorderMaterial.png")}
          title="Mechanical"
        />
        <View horizontal style={resultsScrollMain}>
          <View style={resultsScroll}>
            <View style={resultsScrollInner}>
              <Text style={resultsScrollText}>HP-AC</Text>
            </View>
          </View>
        </View>
        <ScrollView style={{ backgroundColor: "rgb(249, 249, 252)" }}>
          <View style={page}>
            <View>
              <Text style={calResult}>39.66</Text>
            </View>
            <View style={suggestedProducts}>
              <ButtonRound
                buttoncolor="#fff"
                textcolor="rgb(209, 49, 57)"
                bordercolorstyle="rgb(209, 49, 57)"
                ButtonText="Suggested Products"
                height={46.9}
                fontSize={16.4}
              />
            </View>
            <View>
              <EngineComponent />
              <View>
                <InputWithLabel
                  leftIcon={require("./../assets/img/torqueDark.png")}
                  labelText="Torque"
                />
                <InputWithLabel
                  leftIcon={require("./../assets/img/clock.png")}
                  labelText="RPM"
                />
              </View>
            </View>

            <View style={submintBtn}>
              <ButtonRound
                buttoncolor="rgb(209, 49, 57)"
                textcolor="#fff"
                bordercolorstyle="rgb(209, 49, 57)"
                ButtonText="Submit"
                height={54.5}
                fontSize={18.8}
              />
            </View>

          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  page: {
    paddingBottom: 50,
    minHeight: Dimensions.get("window").height - 80
  },
  bold: {
    fontFamily: "OpenSans-Bold",
    fontWeight: "600"
  },
  resultsScrollMain: {
    backgroundColor: "rgb(0, 83, 138)"
  },
  resultsScroll: {
    width: "100%"
  },
  resultsScrollInner: {
    paddingVertical: 11,
    paddingHorizontal: 16,
    flexDirection: "row",
    textAlign: "center"
  },
  resultsScrollText: {
    fontFamily: "OpenSans-Bold",
    fontSize: 16.4,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 21.1,
    letterSpacing: 0,
    color: "#fff"
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  ScrollHeading: {
    paddingHorizontal: 18,
    paddingVertical: 15
  },
  ScrollHeadingText: {
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#4a4a4a"
  },
  suggestedProducts: {
    width: 200,
    alignSelf: "center"
  },
  submintBtn: {
    marginTop: 40,
    width: 210,
    alignSelf: "center"
  },
  calResult: {
    fontFamily: "OpenSans-Bold",
    fontSize: 64.5,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "rgb(0, 83, 138)"
  }
});

export default CalculatorMechanical;
