import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/login";
import Secured from "./src/screens/secured";
import Create from "./src/screens/createevent";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import Calen from "./src/screens/calender";
import ModalExample from "./src/screens/modal";
import Birthday from "./src/screens/birthday";
import Anniversary from "./src/screens/anniversary";
import Babyshower from "./src/screens/babyshower";
import Wedding from "./src/screens/wedding";
import Christmas from "./src/screens/christmas";
import Newyear from "./src/screens/newyear";
import Valentine from "./src/screens/valentine";
import Reunion from "./src/screens/reunion";
import Reply from "./src/screens/reply";
// import Common from "./src/screens/common";
import Example from "./src/screens/example";
import Pick from "./src/screens/picker";
import Counter from "./src/screens/counter";
import Card from "./src/screens/card";
import Eventlist from "./src/screens/eventlist";
import Events from "./src/screens/events";

export default class Rsvp extends Component {
  state = {
    isLoggedIn: false
  };

  render() {
    return (
      <View>
        <Events />
      </View>
    );
    // if (this.state.isLoggedIn)
    //   return (
    //     <Secured onLogoutPress={() => this.setState({ isLoggedIn: false })} />
    //   );
    // else
    //   return <Login onLoginPress={() => this.setState({ isLoggedIn: true })} />;
  }
}
