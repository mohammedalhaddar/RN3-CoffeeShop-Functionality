import React from "react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";
import HeaderBtn from "../HeaderBtn";

const CoffeeList = ({ navigation }) => {
  const coffeeshopList = coffeeshops.map(coffeeshop => (
    <CoffeeItem coffeeshop={coffeeshop} key={coffeeshop.id} />
  ));
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

export default CoffeeList;
