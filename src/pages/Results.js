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
import Item from "../components/Item";
import ItemHeader from "../components/ItemHeader";
import Button from "../components/Button";
import PostCard from "../components/PostCard";
import CardWithName from "../components/CardWithName";



const Results = (props) => {
  const {
    main,
    page,
    linearGradient,
    resultsScrollMain,
    resultsScroll,
    resultsScrollInner,
    resultsScrollText,
    bold,
    redcolor,
    row,
    col,
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
          //   iconImageRight={require("./../assets/img/searchIcon.png")}
          title="Results"
        />
        <ScrollView horizontal style={resultsScrollMain}>
          <View style={resultsScroll}>
            <View style={resultsScrollInner}>
              <Text style={resultsScrollText}>
                Torque: <Text style={bold}>250,</Text>
              </Text>
              <Text style={resultsScrollText}>
                RPM: <Text style={bold}>10000,</Text>
              </Text>
              <Text style={[resultsScrollText, redcolor]}>
                HP: <Text style={[bold]}>39.66,</Text>
              </Text>
              <Text style={resultsScrollText}>
                Torque: <Text style={bold}>250,</Text>
              </Text>
              <Text style={resultsScrollText}>
                RPM: <Text style={bold}>10000,</Text>
              </Text>
              <Text style={[resultsScrollText, redcolor]}>
                HP: <Text style={[bold]}>39.66,</Text>
              </Text> 
            </View>
          </View>
        </ScrollView>
        <ScrollView style={{ backgroundColor: "#fff" }}>
          <View style={page}>
            <View style = {row}>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"     
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
                <View style = {col}>
                    <CardWithName
                        cardBg={require('../assets/img/cardWithName.png')}
                        cardName="Reliamark Subop Reliamark Subop"    
                    />
                </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {  
  },
  page: {
    backgroundColor: "#fff",
        paddingBottom: 170,
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

export default Results;
