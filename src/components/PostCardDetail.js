import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
  Dimensions
} from "react-native";

import ButtonIcon from "./ButtonIcon";
import ButtonRound from "./ButtonRound";

const PostCardDetail = ({
  navigation,
  home,
  item,
  openShare,
  toggleLikeStatus,
}) => {
  const {
    main,
    cardBgStyle,
    headingStyle,
    headingTitleStyle,
    headingTextStyle,
    itemArea,
    itemAreaInner,
    discriptionText,
    badgeRibbonStyle,
    badgeRibbonTextStyle,
    imageAndDetail,
    btns,
    shareBtns,
    alertBtns
  } = styles;

  return (
    <View style={main}>
      <View style={imageAndDetail}>
        <ScrollView
          style={{ paddingTop: 5 }}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <ImageBackground
            imageStyle={{ resizeMode: "cover" }}
            style={cardBgStyle}
            source={item ? { uri: item.image } : require("../assets/img/postImage.jpg")}
          />
          {/* {item && item.product_gallery_images.map(image => (<ImageBackground
            imageStyle={{ resizeMode: "cover" }}
            style={cardBgStyle}
            source={item ? { uri:image } : require("../assets/img/postImage.jpg")}
          />))} */}
        </ScrollView>

        <View style={itemArea}>
          <View style={itemAreaInner}>
            <View style={headingStyle}>
              <View style={headingTitleStyle}>
                <Text numberOfLines={1} style={headingTextStyle}>{item && item.title}</Text>
              </View>
              <View style={badgeRibbonStyle}>
                <Text style={badgeRibbonTextStyle}>{item && item.type}</Text>
              </View>
            </View>
            <Text numberOfLines={1} style={discriptionText}>
              {item && item.short_description}
            </Text>
          </View>

          <View style={btns}>
            <View style={shareBtns}>
              <ButtonIcon
                bordercolorstyle="transparent"
                marginH={5}
                iconImageLeft={require("../assets/img/shareIcon.png")}
                onPress={() => openShare()}
              />
              <ButtonIcon
                bordercolorstyle="transparent"
                marginH={5}
                iconImageLeft={require("../assets/img/commentIcon.png")}
                onPress={() => navigation.navigate("Comments", {
                  product_id: item.id
                })}
              />
              <ButtonIcon
                bordercolorstyle="transparent"
                marginH={5}
                iconImageLeft={home && home.is_liked ? require('../assets/img/heartIcon.png') : require('../assets/img/blackheart.png')}
                onPress={() => toggleLikeStatus()}
              />
            </View>
            {item && item.type === "Coming Soon" &&
              <View style={alertBtns}>
                <ButtonRound
                  buttoncolor="#fff"
                  textcolor="rgb(0, 84, 140)"
                  bordercolorstyle="rgb(0, 84, 140)"
                  ButtonText="Set Alert"
                  height={26.5}
                  fontSize={15.3}
                />
              </View>
            }
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 0,
    marginTop: 0,
    backgroundColor: "#fff",
  },

  linearGradient: {
    position: "absolute",
    left: 0
  },
  cardBgStyle: {
    height: 212,
    position: "relative",
    width: Dimensions.get("window").width,
  },
  imageAndDetail: {

    overflow: "hidden",
  },
  logoStyle: {
    alignSelf: "flex-start"
  },
  itemArea: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 15,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ebebeb"
  },
  itemAreaInner: {
    marginBottom: 5
  },
  headingStyle: {
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingTitleStyle: {
    maxWidth: 235,
    minWidth: 235,
    marginRight: 5,
  },
  badgeRibbonStyle: {
    maxWidth: 104,
    minWidth: 104,
    alignItems: 'flex-end',
  },
  badgeRibbonTextStyle: {
    fontFamily: "OpenSans-Bold",
    fontSize: 16.4,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "rgb(209, 49, 57)"
  },
  headingTextStyle: {
    fontFamily: "OpenSans-Regular",
    fontSize: 17.6,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000"
  },
  discriptionText: {
    fontFamily: "OpenSans-Regular",
    fontSize: 15.3,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "rgba(0,0,0,.5)"
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shareBtns: {
    width: "65%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -5
  },
  alertBtns: {
    width: "35%",
    alignItems: "center"
  }
});

export default PostCardDetail;
