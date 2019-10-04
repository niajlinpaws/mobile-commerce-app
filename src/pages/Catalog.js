import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

import Header from "../components/Header";


const Catalog = (props) => {
  const { main, page, linearGradient, tabImage, row, col, tabBtn, tabMain, active } = styles;
  return (
    <LinearGradient
      start={{ x: 0, y: 0.3 }}
      end={{ x: 2, y: 0.3 }}
      colors={["#d13139", "#560004", "#560004"]}
      style={linearGradient}
    >
      <View style={main}>
        <Header
          title={props.heading}
          iconImageLeft={!props.rootCatalog ? require('./../assets/img/keyboardArrowLeftMaterial.png') : undefined }
          onPress={()=>!props.rootCatalog ? props.catalogGoBack() : {} }
        />
          {props.rootCatalog && 
            <View style = {[tabMain, row ]}>
              <TouchableOpacity 
                style = {[ col,  tabBtn, props.rootCategory === 16 && active ]}
                onPress={()=>props.toggleRootCategory()}
              >
                  <Image style = { tabImage } resizeMode="contain" source={require("./../assets/img/reliaMark.png")} />
              </TouchableOpacity> 
              <TouchableOpacity 
                style = {[ col,  tabBtn, props.rootCategory !== 16 && active ]}
                onPress={props.toggleRootCategory}
              >
                  <Image style = { tabImage } resizeMode="contain" source={require("./../assets/img/trabsPower.png")} />
              </TouchableOpacity>  
            </View>
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
    flex: 1
  },
  page: {
    paddingBottom: 50,
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
    backgroundColor: "#fff"
  },
  row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  col: { 
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  tabMain:{ 
    backgroundColor: "#fff"
  },
  tabBtn:{
    height: 51.6,
    borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: "rgb(241, 241, 241)",
    backgroundColor: "#fff"
  },
  active:{ 
    borderBottomColor:  "rgb(209, 49, 57)",
  },
});

export default Catalog;
