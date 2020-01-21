import React from "react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import coffeeStore from "../../Store/coffeeStore";


// Component
import CoffeeItem from "./CoffeeItem";
import HeaderBtn from "../HeaderBtn";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";


const CoffeeList = ({ navigation }) => {
  const coffeeshopList = coffeeStore.coffeeshops.map(coffeeshop => {
    return <CoffeeItem  coffeeshop={coffeeshop} key={coffeeshop.id}/>
  });

  return (
    <Content>
      <List>{coffeeshopList}</List>
    </Content>
  );
};


CoffeeList.navigationOptions = {
  title: "Coffee List",
  headerRight: () => <HeaderBtn text="Cart"></HeaderBtn>
}



export default (observer(withNavigation(CoffeeList)));
