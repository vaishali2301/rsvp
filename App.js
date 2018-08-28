import React, { Component } from "react";
import { Root } from "native-base";
import firebase from "react-native-firebase";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Groupformat from "./src/screens/groupformat";
import Showgroup from "./src/screens/showgroup";
import Eventformat from "./src/screens/eventformat";
import Showevent from "./src/screens/showevent";
import PhoneAuthTest from "./src/screens/phoneauth";
import Profile from "./src/screens/profileinfo";
import Grouptab from "./src/screens/homepage";
import NewGroup from "./src/screens/newgroup";
import { createStackNavigator } from "react-navigation";
import EventInfo from "./src/screens/eventinfo";
import NewEvent from "./src/screens/newevent";
const App = createStackNavigator(
  {
    Phone: { screen: PhoneAuthTest },
    Profile: { screen: Profile },
    Groups: { screen: Grouptab },
    New: { screen: NewGroup },
    NewEve: { screen: NewEvent },
    Info: { screen: EventInfo },
    Show1: { screen: Showgroup },
    Show2: { screen: Showevent }
  },
  { headerMode: "none" }
);

export default App;

// export default class Rsvp extends Component {
//   render() {
//     return (
//       // <View>
//       <Showevent />
//       // </View>
//     );
//   }
// }
