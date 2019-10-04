import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Home from '../containers/Home';
import Catalog from '../containers/Catalog';
import LikedItems from '../pages/LikedItems';
import Setting from '../containers/Setting';
import Results from '../pages/Results';
import { Image } from 'react-native';
import { Animated, Easing } from 'react-native';


export default createBottomTabNavigator({
    Home,
    Catalog,
    LikedItems,
    Results,
    Setting,
},
{
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            let icon;
            switch(routeName)
            {
                case "Catalog":
                icon = focused ? require('../assets/img/descriptionActive.png') :
                require('../assets/img/description.png');
                break;

                case "LikedItems":
                icon = focused ? require('../assets/img/calculatorActive.png') :
                require('../assets/img/calculator.png');
                break;

                case "Setting":
                icon = focused ? require('../assets/img/settingsActive.png'):
                require('../assets/img/settings.png');
                break;

                case "Results":
                icon = focused ? require('../assets/img/bellActive.png') : 
                require('../assets/img/bell.png');
                break;

                case "Home":
                icon = focused ? require('../assets/img/agreementActive.png'):
                require('../assets/img/agreement.png');
                break;

            }
            
            return <Image style = { { width: 29} } resizeMode="contain" source={icon} />;
        },
    }),
    transitionConfig: () => ({
        transitionSpec: {
            duration: 800,
            easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
            timing: Animated.timing,
          },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [layout.initWidth, 0, 0]
            });

            const opacity = position.interpolate({
                inputRange: [
                    index - 1,
                    index - 0.99,
                    index,
                    index + 0.99,
                    index + 1
                ],
                outputRange: [0, 1, 1, 0.3, 0]
            });
            const translateY = 0;

            return { opacity, transform: [{ translateX }, { translateY }] };
        }
    }),
    tabBarOptions: {
        showLabel: false
    }
});