import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";


import ButtonIcon from "./ButtonIcon";
import ButtonRound from "./ButtonRound";



const PostCard = ({
  item,
  openShare,
  navigation,
  toggleLikeStatus,
}) => {
  const {
    main,
    cardBgStyle,
    headingStyle,
    headingTextStyle,
    itemArea,
    itemAreaInner,
    discriptionText,
    badgeRibbon,
    badgeRibbonCircle,
    badgeRibbonTextStyle,
    badgeRibbon140,
    badgeRibbonNeg140,
    imageAndDetail,
    btns,
    shareBtns,
    alertBtns,

  } = styles;
  return (
    <View style={main}>
      <View style={badgeRibbon}>
        <View style={badgeRibbonCircle}>
          <Text style={badgeRibbonTextStyle}>{item.type}</Text>
        </View>
        <View style={badgeRibbonNeg140} />
        <View style={badgeRibbon140} />
      </View>
      <View style={imageAndDetail}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProductDetail", {
            product_id: item.id,
          })}
        >
          <ImageBackground
            imageStyle={{ resizeMode: "cover" }}
            style={cardBgStyle}
            source={{ uri: item.image }}
          />
        </TouchableOpacity>
        <View style={itemArea}>
          <View style={itemAreaInner}>
            <View style={headingStyle}>
              <Text numberOfLines={1} style={headingTextStyle}>{item.title}</Text>
            </View>
            <Text numberOfLines={1} style={discriptionText}>{item.short_description}</Text>
          </View>

          <View style={btns}>
            <View style={shareBtns} >
              <ButtonIcon
                bordercolorstyle="transparent"
                marginH={5}
                iconImageLeft={require('../assets/img/shareIcon.png')}
                onPress={openShare}
              />
              <ButtonIcon
                bordercolorstyle="transparent"
                marginH={5}
                iconImageLeft={require('../assets/img/commentIcon.png')}
                onPress={() => navigation.navigate("Comments",{
                  product_id: item.id
                })}
              />
              <ButtonIcon
                bordercolorstyle="transparent"
                marginH={5}
                iconImageLeft={item.is_liked ? require('../assets/img/heartIcon.png') : require('../assets/img/blackheart.png')}
                onPress={() => toggleLikeStatus()}
              />
            </View>
            {item.type === 'Coming Soon' && <View style={alertBtns}>
              <ButtonRound
                buttoncolor="#fff"
                textcolor="rgb(0, 84, 140)"
                bordercolorstyle="rgb(0, 84, 140)"
                ButtonText="Set Alert"
                height={26.5}
                fontSize={15.3}
              />
            </View>}

          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 17,
    marginTop: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(211, 211, 211, 0.5)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    borderRadius: 4,
  },
  badgeRibbon: {
    position: "absolute",
    top: 15,
    left: 0,
    zIndex: 9999,
  },
  badgeRibbonCircle: {
    backgroundColor: "#d13139",
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    height: 32.5,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 12,
    paddingLeft: 5
  },
  badgeRibbonTextStyle: {
    color: "#fff",
    fontFamily: "OpenSans-Regular",
    fontSize: 16.4,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0
  },
  badgeRibbon140: {
    backgroundColor: "transparent",
    borderBottomWidth: 32.5,
    borderBottomColor: "#d13139",
    borderLeftWidth: 16,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    position: "absolute",
    top: 0,
    left: -10,
    zIndex: -1,
    transform: [{ rotate: "0deg" }]
  },
  badgeRibbonNeg140: {
    backgroundColor: "transparent",
    borderBottomWidth: 32.5,
    borderBottomColor: "#d13139",
    borderLeftWidth: 16,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    position: "absolute",
    top: 0,
    left: -10,
    zIndex: -1,
    transform: [{ rotateX: "180deg" }, { rotateY: "0deg" }]
  },

  linearGradient: {
    position: "absolute",
    left: 0
  },

  tabScrollInner: {
    flexDirection: "row",
    width: Dimensions.get("window").width
  },
  cardBgStyle: {
    height: 212,
    position: "relative"
  },
  imageAndDetail: {
    overflow: 'hidden',
    borderRadius: 4,
  },
  logoStyle: {
    alignSelf: "flex-start"
  },

  itemArea: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ebebeb",

  },
  itemAreaInner: {
    marginBottom: 5,
  },
  headingStyle: {
    marginBottom: 6,
  },
  headingTextStyle: {
    fontFamily: "OpenSans-Regular",
    fontSize: 16.4,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 17.1,
    letterSpacing: 0,
    color: "#000",
  },
  discriptionText: {
    fontFamily: "OpenSans-Regular",
    fontSize: 15.3,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 17.1,
    letterSpacing: 0,
    color: "rgba(0,0,0,.5)"
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shareBtns: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -5,
  },
  alertBtns: {
    width: '35%',
    alignItems: 'center',
  },
});

export default PostCard;
