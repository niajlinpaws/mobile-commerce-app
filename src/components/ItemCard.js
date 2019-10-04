import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Switch
} from "react-native";

const ItemCard = ({
  main,
  heading,
  calResults,
  date,
  time,


}) => {
  const {
    ListItemIconStyle,
    headingStyle,
    calResultsStyle,
    dateNtimeStyle,
    mainInner

  } = styles;
 


  return (
    <View style={main}>
      <TouchableOpacity style={mainInner} > 
        <View >
          <View>
            <Text style={headingStyle}>{heading}</Text>
          </View>
          <View>
            <Text style={calResultsStyle}>{calResults}</Text>
          </View>
          <View>
            <Text style={dateNtimeStyle}>{date} | {time} </Text>
          </View>
        </View>
        <Image
          style={ListItemIconStyle}
          resizeMode="contain"
          source={require("../assets/img/keyboardArrowRightMaterial.png")}
        /> 
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {  
    flex: 1,
    borderRadius: 2.4,
    backgroundColor: "#fff",
   
  },
  mainInner: { 
    flexDirection: 'row',  
    shadowColor: "rgba(211, 211, 211, 0.5)",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 1,
    borderWidth: 1,

  },
  headingStyle:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 20.5,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 21.1,
    letterSpacing: 0,
    color: "rgb(0, 83, 138)",

  },
  calResultsStyle:{
    fontFamily: 'OpenSans-Regular',
    fontSize: 17.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 21.1,
    letterSpacing: 0,
    color: "rgba(0, 0, 0, .8)"
  },
  dateNtimeStyle:{
    fontFamily: 'OpenSans-Regular',
    fontSize: 16.4,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 21.1,
    letterSpacing: 0,
    color: "rgba(0, 0, 0, .5)"
  },
});

export default ItemCard;
