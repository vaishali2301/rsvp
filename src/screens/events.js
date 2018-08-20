import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import array from "./data";
import Card from "./card";
export default class Events extends Component {
  render() {
    console.log("here", array);
    return (
      <ScrollView style={{ marginTop: 100 }}>
        {array.map((data, key, param) => {
          console.log("data", data);
          return <Card key={key} data={data} param={param} />;
        })}
      </ScrollView>
    );
  }
}
