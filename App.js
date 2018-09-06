import React, { Component } from "react";
import { Root } from "native-base";
import firebase from "react-native-firebase";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import GroupFormat from "./src/screens/GroupFormat";
import { updateFocus } from "react-navigation-is-focused-hoc";
import Showgroup from "./src/screens/ShowGroup";
import EventFormat from "./src/screens/EventFormat";
import ShowEvent from "./src/screens/ShowEvent";
import PhoneAuth from "./src/screens/PhoneAuth";
import Profile from "./src/screens/Profile";
import HomePage from "./src/screens/HomePage";
import NewGroup from "./src/screens/NewGroup";
import { createStackNavigator } from "react-navigation";
import EventInfo from "./src/screens/EventInfo";
import NewEvent from "./src/screens/NewEvent";
const App = createStackNavigator(
  {
    Phone: { screen: PhoneAuth },
    Profile: { screen: Profile },
    Groups: { screen: HomePage },
    New: { screen: NewGroup },
    NewEve: { screen: NewEvent },
    Info: { screen: EventInfo },
    Show1: { screen: Showgroup },
    Show2: { screen: ShowEvent }
  },
  { headerMode: "none" }
);

// export default App;

export default class Rsvp extends Component {
  render() {
    return (
      <App 
        onNavigationStateChange={(prevState, currentState) => {
          updateFocus(currentState)
        }}
      />
    );
  }
}
