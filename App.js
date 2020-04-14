import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import { Block, Text } from "expo-ui-kit";
import { NavigationContainer } from "@react-navigation/native";

import Drawer from "./Drawer";

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    );
  }
}

export default App;
