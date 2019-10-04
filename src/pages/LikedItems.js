import React from "react";
import {
  View,
  StyleSheet,
  ScrollView, 

} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";

const LikedItems = (props) => {
  const {
    main,
    page,
    linearGradient,
    row,
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
          iconImageLeft={require('./../assets/img/keyboardArrowLeftMaterial.png')}
          iconImageRight={require("./../assets/img/filterFontAwesome.png")}
          title={props.heading}
          onPress={()=>props.catalogGoBack()}
          onRightPress={()=>props.openCatalogFilter()}
        /> 
        <View style={page}> 
          <View style = {row}>
            {props.list}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {  
  },
  page: {
    backgroundColor: "#fff",
        paddingBottom: 60,
  },
  bold: {
    fontFamily: "OpenSans-Bold",
    fontWeight: "600"
  },
  redcolor: {
    color: "rgb(191, 42, 49)"
  },
  resultsScrollMain: {
    backgroundColor: "rgb(234, 234, 234)",   
  },
  resultsScroll: {  
    width: '100%',
  },
  resultsScrollInner: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row", 
    textAlign: 'center'
  },
  resultsScrollText: {
    fontSize: 16.4,
    fontFamily: 'OpenSans-Regular',
    fontWeight: "normal",
    fontStyle: "normal", 
    letterSpacing: 0,
    textAlign: "center",
    paddingHorizontal: 5,
  },

  footerStyle: {
    backgroundColor: "#fff"
  },
  row: {
    flexDirection: 'row',
    flexWrap:'wrap',
    padding: 9,
  },
  col: {
    width: '50%',
    padding: 9,
  },
});

export default LikedItems;
