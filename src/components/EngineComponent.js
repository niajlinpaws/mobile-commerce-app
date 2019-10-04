import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";

import EngineComponentBox from "./EngineComponentBox";

const EngineComponent = (props) => {
  const regular = "OpenSans-Regular";
  const bold = "OpenSans-Bold";
  const semiBold = "OpenSans-SemiBold";
  const extraBold = "OpenSans-ExtraBold";

  const { resultsScrollMain, resultsScroll, resultsScrollInner } = styles;

  return (
    <ScrollView horizontal style={resultsScrollMain}>
      <View style={resultsScroll}>
        <View style={resultsScrollInner}>
          <EngineComponentBox
            pVertical={13}
            iconBgColor="rgb(0, 83, 138)"
            text="Horse Power"
            textColor="rgb(0, 83, 138)"
            iconImage={require("./../assets/img/boltFontAwesome.png")}
          />
          <EngineComponentBox
            pVertical={13}
            iconBgColor="rgba(0, 0, 0, 0.5)"
            text="Torque in In-lbs"
            textColor="rgba(0, 0, 0, 0.5)"
            iconImage={require("./../assets/img/torque.png")}
          />
          <EngineComponentBox
            pVertical={13}
            iconBgColor="rgba(0, 0, 0, 0.5)"
            text="Torque in In-lbs"
            textColor="rgba(0, 0, 0, 0.5)"
            iconImage={require("./../assets/img/torque.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  resultsScrollInner: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 10,
  }
});

export default EngineComponent;
