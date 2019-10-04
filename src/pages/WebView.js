import React from "react";
import { View,WebView, StyleSheet, Dimensions, } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';

const WebViewPage = ({
  navigation
}) => {
  const {
    webStyle } = styles;
  return (
    <View style={{ flex: 1 }}>
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: -.8 }} colors={['#d13139', '#560004', '#560004']}>

      
        <Header
          onPress={() =>navigation.goBack()}
          iconImageLeft={require('./../assets/img/keyboardArrowLeftMaterial.png')}

        />
    </LinearGradient>
    <WebView
      bounces={false}
      source={{ uri: navigation.state.params.url }}
      style={[webStyle, { height: '100%', width: '100%', position: 'absolute' }]}
    />
</View>
  )
};
const styles = StyleSheet.create({
  webStyle: {
    flex: 1,
  },
 
});

export default WebViewPage;


