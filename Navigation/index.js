import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";


import CoffeeList from "../Components/CoffeeList/index";
import CoffeeDetail from "../Components/CoffeeDetail/index";
import CoffeeCart from "../Components/CoffeeCart/index";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";

const MyStackNav = createStackNavigator(
  {
    CoffeeList,
    CoffeeDetail,
    CoffeeCart,
    Login,
    Signup
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#145964"
        },
        headerTitleStyle: {
          fontWeight: "bold"
        }
     }
  }
);


const AppContainer = createAppContainer(MyStackNav);

export default AppContainer;