import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

import HeaderBtnText from "../components/HeaderBtnText";
import ButtonRound from "../components/ButtonRound";
import ButtonBlock from "../components/ButtonBlock";

const Filter = (props) => {
  const {
    main,
    page,
    linearGradient,
    row,
    col25,
    col33,
    col50,
    col60,
    footerStyle,
    footerInnerStyle,
    headingMain,
    heading
  } = styles;
  return (
    <LinearGradient
      start={{ x: 0, y: 0.3 }}
      end={{ x: 2, y: 0.3 }}
      colors={["#d13139", "#560004", "#560004"]}
      style={linearGradient}
    >
      <View style={main}>
        <HeaderBtnText 
          title="Filter"
          textRight="Clear"
          iconImageLeft={require('./../assets/img/keyboardArrowLeftMaterial.png')}          
          onPress={()=>props.navigation.goBack()}
          onRightPress={()=>props.clearFilters()}
        />
        <ScrollView style={{ backgroundColor: "#fff" }}>
          <View style={page}>
          {
            props.catalogProductFilters && 
            Object.entries(props.catalogProductFilters).map(filter=>{
              switch(filter[1].length){
                case 2:
                style = col50;
                case 3:
                style = col33;
                default:
                style = col25;
            
              }
              return (
                <View key={filter[0]}>
                  <View style={headingMain}>
                    <Text style={heading}>{filter[0]}</Text>
                  </View>
                  <View style={row}>
                      {
                        filter[1].map(option=>{
                          return(
                            <View key={option.term_id} style={style}>
                              <ButtonBlock
                                buttoncolor="rgb(0, 83, 138)" 
                                textcolor="#fff"
                                bordercolorstyle="rgb(0, 83, 138)"
                                ButtonText={option.name}
                                height={46.9}
                                fontSize={18.8}
                              />
                            </View>
                          );
                        })
                      }
                  </View>
                </View>
              );
            })
          }
          </View>
        </ScrollView>
      </View>
      <View style={footerStyle}>
        <View style={footerInnerStyle}>
          <ButtonRound
            buttoncolor="rgb(209, 49, 57)"
            textcolor="#fff"
            bordercolorstyle="rgb(209, 49, 57)"
            ButtonText="View Products"
            height={54.5}
            fontSize={18.8}
          />
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
    paddingHorizontal: 10,
    paddingBottom: 50,
    paddingTop: 10,
    backgroundColor: "#fff"
  },
  dividerHeading: {
    backgroundColor: "rgb(234, 234, 234)",
    height: 46.9,
    justifyContent: "center",
    paddingLeft: 16
  },
  dividerHeadingText: {
    fontSize: 16.4,
    fontFamily: "OpenSans-Bold",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 17.1,
    letterSpacing: 0,
    color: "#000"
  },
  discriptionStyle: {
    paddingHorizontal: 16,
    paddingVertical: 11
  },
  discriptionTextStyle: {
    fontFamily: "OpenSans-Regular",
    fontSize: 16.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "rgba(0,0,0,.5)"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 5,
    flexWrap: 'wrap',
  },
  col25: {
    minWidth: "25%"
  },
  col33: {
    minWidth: "33.3333%"
  },
  col50: {
    minWidth: "50%"
  },
  col60: {
    width: "60%"
  },
  labelText: {
    fontFamily: "OpenSans-Regular",
    fontSize: 16.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "rgba(0,0,0,.5)"
  },
  labelValueText: {
    fontFamily: "OpenSans-Bold",
    fontSize: 16.4,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    alignSelf: "flex-end"
  },
  footerStyle: {
    backgroundColor: "#fff",
    paddingTop: 5,
    paddingBottom: 15
  },
  footerInnerStyle: {
    width: 230,
    alignSelf: "center"
  },
  headingMain:{
    marginTop: 22,
    paddingHorizontal: 5,
    
  },
  heading: {
    fontFamily: "OpenSans-Bold",
    fontSize: 17.6,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000",
   
  }
});

export default Filter;
