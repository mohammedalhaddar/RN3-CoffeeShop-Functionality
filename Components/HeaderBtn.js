import React, { Component } from "react";

// Styling Components
import { withNavigation  } from "react-navigation";

import { Button, Text, Icon } from "native-base";
import { observer } from "mobx-react";
import cartStore from "../Store/cartStore";

class HeaderBtn extends Component {
  render() {
    return (
      <Button onPress={() => this.props.navigation.push("CoffeeCart")} >
          <Text>{cartStore.quantity}</Text><Icon type='AntDesign' name='shoppingcart'/>
      </Button>
    );
  }
}


export default withNavigation(observer(HeaderBtn));
