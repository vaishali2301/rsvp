import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  Image,
  StyleSheet,
  View,
  Button,
  TouchableHighlight,
  Alert
} from "react-native";

export default class Common extends Component {
  state = { label: "", value: "" };

  render() {
    return (
      <div>
        {(() => {
          switch (value) {
            case "birthday":
              return <Birthday value={value} />;
            case "anniversary":
              return <Anniversary value={value} />;
            case "wedding":
              return <Wedding value={value} />;
            case "babyshower":
              return <BabyShower value={value} />;
            case "classreunion":
              return <ClassReunion value={value} />;
            case "newyear":
              return <NewYearParty value={value} />;
            case "christmas":
              return <ChristmasParty value={value} />;
            case "valentine":
              return <ValentinesDay value={value} />;
            default:
              return null;
          }
        })()}
      </div>
    );
  }
}
propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.oneOf([
    "birthday",
    "anniversary",
    "wedding",
    "babyshower",
    "classreunion",
    "newyear",
    "christmas",
    "valentine"
  ])
};
