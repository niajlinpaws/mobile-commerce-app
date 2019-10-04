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
import ItemAvatar from "../components/ItemAvatar";
import Button from "../components/Button";
import CardItem from "../components/CardItem";
import FeaturedRestaurant from "../components/FeaturedRestaurant";
import PostCard from "../components/PostCard";

const Notification = (props) => {
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
          title="Notification"
        />
        <ScrollView style={{ backgroundColor: "#fff" }}>
          <View style={page}>
            <ItemAvatar
              avatarIcon={require("./../assets/img/cardWithName.png")}
              listItemText="Miniature ball bearing, available to SALE"
              postedTime="4 min ago"
              rightIcon={require("./../assets/img/addToCart.png")}
              borderWidth={0.5}
            />
            <ItemAvatar
              avatarIcon={require("./../assets/img/cardWithName.png")}
              listItemText="Miniature ball bearing, available to SALE"
              postedTime="4 min ago"
              rightIcon={require("./../assets/img/addToCart.png")}
              borderWidth={0.5}
            />

            <ItemAvatar
              avatarIcon={require("./../assets/img/noUserImage.png")}
              listItemText="Andrew, replied over your comment"
              postedTime="2 hr ago"
              rightIcon={require("./../assets/img/eyeSimpleLineIcons.png")}
              borderWidth={0.5}
            />
            <ItemAvatar
              avatarIcon={require("./../assets/img/cardWithName.png")}
              listItemText="Miniature ball bearing, available to SALE"
              postedTime="4 min ago"
              rightIcon={require("./../assets/img/addToCart.png")}
              borderWidth={0.5}
            />
            <ItemAvatar
              avatarIcon={require("./../assets/img/cardWithName.png")}
              listItemText="Miniature ball bearing, available to SALE"
              postedTime="4 min ago"
              rightIcon={require("./../assets/img/addToCart.png")}
              borderWidth={0.5}
            />

            <ItemAvatar
              avatarIcon={require("./../assets/img/noUserImage.png")}
              listItemText="Andrew, replied over your comment"
              postedTime="2 hr ago"
              rightIcon={require("./../assets/img/eyeSimpleLineIcons.png")}
              borderWidth={0.5}
            />
            <ItemAvatar
              avatarIcon={require("./../assets/img/cardWithName.png")}
              listItemText="Miniature ball bearing, available to SALE"
              postedTime="4 min ago"
              rightIcon={require("./../assets/img/addToCart.png")}
              borderWidth={0.5}
            />
            <ItemAvatar
              avatarIcon={require("./../assets/img/cardWithName.png")}
              listItemText="Miniature ball bearing, available to SALE"
              postedTime="4 min ago"
              rightIcon={require("./../assets/img/addToCart.png")}
              borderWidth={0.5}
            />

            <ItemAvatar
              avatarIcon={require("./../assets/img/noUserImage.png")}
              listItemText="Andrew, replied over your comment"
              postedTime="2 hr ago"
              rightIcon={require("./../assets/img/eyeSimpleLineIcons.png")}
              borderWidth={0.5}
            />
          </View>
        </ScrollView>
      </View>

      <View style={footerStyle}>
        <View style={footerInnerStyle}>
          <Tabs
            buttoncolor="#72c00b"
            textcolor="#fff"
            bordercolorstyle="#72c00b"
            ButtonText="Continue"
            fontSize={16}
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

export default Notification;
