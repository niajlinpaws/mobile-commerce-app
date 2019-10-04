import { createSwitchNavigator } from "react-navigation";
import App from "./AppNavigator";
import Auth from './AuthNavigator';
import Loading from "../containers/Loading";

export default createSwitchNavigator(
  {
    Loading,
    App,
    Auth
  },
  {
    initialRouteName: "Loading"
  }
);
