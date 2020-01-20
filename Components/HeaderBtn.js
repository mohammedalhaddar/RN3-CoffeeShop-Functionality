import React, { Component } from "react";

// Styling Components
import { withNavigation  } from "react-navigation";

import { Button, Text, Icon } from "native-base";

class HeaderBtn extends Component {
  render() {
    return (
      <Button onPress={() => this.props.navigation.push("CoffeeCart")} >
          <Icon type='AntDesign' name='shoppingcart'/>
      </Button>
    );
  }
}

export default withNavigation(HeaderBtn);
