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
import Item from "../components/Item";
import ItemHeader from "../components/ItemHeader";
import Button from "../components/Button"; 

const Setting = (props) => {
  const { main, page, linearGradient, row } = styles;
  return (
    <LinearGradient
      start={{ x: 0, y: 0.3 }}
      end={{ x: 2, y: 0.3 }}
      colors={["#d13139", "#560004", "#560004"]}
      style={linearGradient}
    >
      <View style={main}>
        <Header
          title="Settings"
        />
        <ScrollView style={{ backgroundColor: "#fff" }}>
          <View style={page}>
            <View>
              <ItemHeader listItemText="MY ACCOUNT" />
              <Item listItemText="Past Calculation" borderWidth={.5} />
              <Item listItemText="Saved Calculation" borderWidth={.5}/>
              <Item listItemText="Liked Items" borderWidth={.5}/>
              <Item onPress={()=> props.navigation.navigate('EditProfile')} listItemText="Edit Profile" borderWidth={.5}/>
              <Item onPress={()=> props.navigation.navigate('ChangePassword')} listItemText="Change Password" />
            </View>
            <View>
              <ItemHeader listItemText="SETTINGS" />
              <Item listItemText="Feed" borderWidth={.5}/>
              <Item onPress={()=> props.viewhAndp()} listItemText="Help and Support" borderWidth={.5}/>
              <Item onPress={()=> props.onLogout()} listItemText="Logout" showArrow={false} borderWidth={.5}/> 
            </View>
            <View style={row}>
              <Button 
                  onPress={()=> props.viewtAndc()}
                  ButtonText="Terms and Condition"
                  height={45}
                  fontSize={15.3}
                  bordercolorstyle="transparent"
                  textcolor="rgb(0, 83, 138)"
              />
              <Text style={{ color:"rgb(0, 83, 138)", fontWeight:"bold"}} > & </Text>
              <Button 
                onPress={()=> props.viewpAndp()}
                ButtonText="Privacy Policy"
                height={45}
                fontSize={15.3}
                bordercolorstyle="transparent"
                textcolor="rgb(0, 83, 138)"
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
  main: {
    flex: 1
  },
  page: {
    paddingBottom: 0,
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
  },
  row:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
  }
});


export default Setting;
