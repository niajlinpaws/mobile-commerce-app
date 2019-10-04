import React from "react";
import {
  View,
  StyleSheet, 
  Text, 
} from "react-native";
import ButtonTextIcon from "./ButtonTextIcon";
import ButtonIcon from "./ButtonIcon";

const CommentBox = ({  
  heading,
  postTime,
  discription,
  iconImageLeft,
  ButtonText,
  bWidth,
  
}) => {

var boxStyle = {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderBottomWidth: bWidth,
    borderColor: "rgba(0,0,0,0.2)",
    paddingVertical: 15,
    paddingHorizontal: 6, 
};
  const { 
    imageNheadingStyle,
    headingNpostTimeStyle,
    headingStyle,
    postTimeStyle,
    discriptionStyle,
    replybtn,
    reportAbuseStyle
  } = styles;

  return (
    <View>
      <View style={boxStyle}>
        <View style={imageNheadingStyle}> 
          <View style={headingNpostTimeStyle}>
            <View style = { reportAbuseStyle }>
                <ButtonIcon
                  iconImageLeft={require("./../assets/img/reportAbuse.png")}
                  buttoncolor=""
                  textcolor="rgb(209, 49, 57)"
                  bordercolorstyle="transparent" 
                  height={20}
                  fontSize={14.5}
                />
            </View>
            <Text style={headingStyle}>{heading}</Text>
            <Text style={discriptionStyle}>{discription}</Text>
            <Text style={postTimeStyle}>{postTime}</Text>
            <View style={replybtn}>
              <ButtonTextIcon
                iconImageLeft={iconImageLeft}
                buttoncolor=""
                textcolor="rgb(209, 49, 57)"
                bordercolorstyle="transparent"
                ButtonText={ButtonText}
                height={20}
                fontSize={14.5}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ 
  avatorIconStyle: {
    width: 49,
    height: 49,
    borderRadius: 24.5,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  imageNheadingStyle: {
    flexDirection: "row"
  },
  headingNpostTimeStyle: {
    paddingHorizontal: 10,
    // paddingLeft: 60,
    position: "relative",
    width: "100%"
  },
  headingStyle: {
    fontSize: 17,
    fontFamily: "OpenSans-Bold",
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000", 
    paddingRight: 14, 
    
  },
  postTimeStyle: {
    fontSize: 14,
    fontFamily: "OpenSans-Regular",
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "rgba(0,0,0,0.5)",
    marginTop: 7,
  },
  discriptionStyle: {
    fontSize: 16,
    fontFamily: "OpenSans-Regular",
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "rgba(0,0,0,0.7)",
    marginTop: 5
  },
  replybtn: {
    position: "absolute",
    right: 0,
    bottom: 0
  },
  reportAbuseStyle: {
    position: "absolute",
    top: 0,
    right:0, 
    zIndex: 9,
  },
});

export default CommentBox;
