import { createStackNavigator } from 'react-navigation';
import Tab from './TabNavigator';
import Catalog from '../containers/Catalog';
import Comments from '../containers/Comments';
import CatalogProduct from '../containers/CatalogProduct';
import CatalogProductFilter from '../containers/CatalogProductFilter';
import ProductDetail from '../containers/ProductDetail';
import ChangePassword from './../containers/ChangePassword';
import EditProfile from './../containers/EditProfile';
import StaticPage from "../containers/StaticPage";
import WebView from "../pages/WebView";
import { Animated, Easing } from 'react-native';


export default createStackNavigator({
    Tab,
    Comments,
    Catalog,
    CatalogProduct,
    CatalogProductFilter,
    ProductDetail,
    EditProfile,
    ChangePassword,
    StaticPage,
    WebView
},
{
    initialRouteName: 'Tab',
    headerMode: 'none',
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