import { createStackNavigator } from "react-navigation";
import React from 'react';
import { Animated, Easing } from 'react-native';

import SignUp from '../containers/SignUp';
import Login from '../containers/Login';
import ForgotPassword from '../containers/ForgotPassword';
import VerificationCode from '../containers/VerificationCode';
import ContactUs from '../containers/ContactUs';
import ChangePassword from '../containers/ChangePassword';
import ResetPassword from '../containers/ResetPassword';
import StaticPage from "../containers/StaticPage";


export default createStackNavigator({
    SignUp,
    Login,
    ForgotPassword,
    VerificationCode,
    ContactUs,
    ChangePassword,
    ResetPassword,
    StaticPage 

},
{
    initialRouteName: 'Login',
    headerMode: 'none',
    // transitionConfig: () => ({
    //     transitionSpec: {
    //         duration: 800,
    //         easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
    //         timing: Animated.timing,
    //       },
    //     screenInterpolator: sceneProps => {
    //         const { layout, position, scene } = sceneProps;
    //         const { index } = scene;

    //         const translateX = position.interpolate({
    //             inputRange: [index - 1, index, index + 1],
    //             outputRange: [layout.initWidth, 0, 0]
    //         });

    //         const opacity = position.interpolate({
    //             inputRange: [
    //                 index - 1,
    //                 index - 0.99,
    //                 index,
    //                 index + 0.99,
    //                 index + 1
    //             ],
    //             outputRange: [0, 1, 1, 0.3, 0]
    //         });
    //         const translateY = 0;

    //         return { opacity, transform: [{ translateX }, { translateY }] };
    //     }
    // })
});