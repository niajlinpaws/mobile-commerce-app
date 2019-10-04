import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Spinner from "react-native-loading-spinner-overlay";
import HeaderSearch from "../components/HeaderSearch";
import Header from "../components/Header";

const Home = (props) => {
  const {
    main,
    page,
    linearGradient,
  } = styles;
  return (
    <LinearGradient
      start={{ x: 0, y: 0.3 }}
      end={{ x: 2, y: 0.3 }}
      colors={["#d13139", "#560004", "#560004"]}
      style={linearGradient}
    >
      <Spinner visible={props.loading} />
      <View style={main}>
        {
          !props.shouldToggleSearchBox ? 
          <Header
            iconImageRight={require("./../assets/img/searchIcon.png")}
            title="Home"
            onRightPress={() => props.toggleSearchBox()}
          /> : 
          <HeaderSearch
            onChangeText={(title)=>props.showSearchResults(title)}
            onPress={()=> props.toggleSearchBox()}
          />
        }
          <View style={page}>
            {props.list}
          </View>
      </View>


    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  main: {
    flex: 1,
   
  },
  page: {
    paddingBottom: 50,
    paddingTop: 17,
    backgroundColor: "#fff",
    height:"100%",
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
    backgroundColor: "#fff",
  },
  footerInnerStyle: {
  }
});

export default Home;
