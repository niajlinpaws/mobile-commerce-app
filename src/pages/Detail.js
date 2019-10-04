import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Spinner from "react-native-loading-spinner-overlay";

import Header from "../components/Header";
import ButtonRound from "../components/ButtonRound";
import PostCardDetail from "../components/PostCardDetail";

const ProductDetail = ({
  navigation,
  home,
  item,
  toggleLikeStatus,
  openShare,
  inAppBrowser,
  loading
}) => {
  const {
    main,
    page,
    linearGradient,
    dividerHeading,
    dividerHeadingText,
    discriptionStyle,
    discriptionTextStyle,
    row,
    col40,
    col60,
    labelText,
    labelValueText,
    footerStyle,
    footerInnerStyle,
    
  } = styles;
  return (
    <LinearGradient
      start={{ x: 0, y: 0.3 }}
      end={{ x: 2, y: 0.3 }}
      colors={["#d13139", "#560004", "#560004"]}
      style={linearGradient}
    >
      <Spinner visible={loading} />
      <View style={main}>
        <Header
          onPress={()=> navigation.goBack()}
          iconImageLeft={require("./../assets/img/keyboardArrowLeftMaterial.png")}
          title="Detail"
        />
        <ScrollView style={{ backgroundColor: "#fff" }}>
          <View style={page}>
            <PostCardDetail
              navigation={navigation}
              home={home}
              item={item}
              toggleLikeStatus={() => toggleLikeStatus()}
              openShare={() => openShare()}
            />
            <View style={dividerHeading}>
              <Text style={dividerHeadingText}>Product Description</Text>
            </View>
            <View style={discriptionStyle}>
              <Text style={discriptionTextStyle}>
                {(item && item.description) || "N/A"}
              </Text>
            </View>

            <View style={dividerHeading}>
              <Text style={dividerHeadingText}>Specifications</Text>
            </View>
            <View style={discriptionStyle}>

            {item && Object.entries(item.specifications).map(specification=>(
              <View key={specification[0]} style={row}>
                <View style={col40}>
                  <Text style={labelText}>{specification[0]}</Text>
                </View>
                <View style={col60}>
                  <Text style={labelValueText}>{specification[1]}</Text>
                </View>
              </View>
            ))}
            
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={footerStyle}>
        <View style={footerInnerStyle}>
          <ButtonRound
            onPress={()=> inAppBrowser()}
            buttoncolor="rgb(209, 49, 57)"
            textcolor="#fff"
            bordercolorstyle="rgb(209, 49, 57)"
            ButtonText="Purchase Product"
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
    flex: 1,
  },
  page: {
    paddingBottom: 50,
    paddingTop: 0,
    backgroundColor: "rgb(249, 249, 252)"
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
    paddingVertical: 11,
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
    flexDirection: "row",
    paddingVertical: 5,
  },
  col60: {
    width: "60%"
  },
  col40: {
    width: "40%"
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
    backgroundColor: "rgb(249, 249, 252)",
    paddingTop: 5,
    paddingBottom: 15
  },
  footerInnerStyle: {
    width: 230,
    alignSelf: "center"
  }
  
});

export default ProductDetail;
