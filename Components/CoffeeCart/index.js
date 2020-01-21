import React, { Component } from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";
import cartStore from "../../Store/cartStore";
import { observer } from "mobx-react";

class CoffeeCart extends Component {

  render() {
    const cartItems = cartStore.items.map(item => (
      <CartItem item={item} key={`${item.drink} ${item.option}`} />
    ));

    return (
      <List>
        {cartItems}
        <Button full danger onPress={ () => cartStore.checkoutCart() }>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}



export default observer(CoffeeCart);
