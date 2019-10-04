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

const SavedCalculation = (props) => {
  const { main, page, linearGradient, footerStyle, footerInnerStyle } = styles;
  return (
    <LinearGradient
      start={{ x: 0, y: 0.3 }}
      end={{ x: 2, y: 0.3 }}
      colors={["#d13139", "#560004", "#560004"]}
      style={linearGradient}
    >
      <View style={main}>
        <Header
          //   iconImageRight={require("./../assets/img/searchIcon.png")}
          title="Saved Calculation"
        />
        <ScrollView style={{ backgroundColor: "rgb(249, 249, 252)" }}>
          <View style={page}>
            <ItemCard  
              heading="Horse Power: 40.66"
              calResults="Torque: 50, RPM: 1000"
              date="Sat, 17 Sept 2018"
              time="10:00"
            />
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
  main: {
    flex: 1
  },
  page: {
    paddingBottom: 50,
    backgroundColor: "#fff"
    // height: Dimensions.get("window").height - 130
  },
  tabScrollInner: {
    flexDirection: "row",
    paddingHorizontal: 10
  },
  tabScroll: {
    paddingVertical: 5,
    width: Dimensions.get("window").width,
    height: 270
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
  footerStyle: {
    backgroundColor: "#fff"
  }
});

export default SavedCalculation;
