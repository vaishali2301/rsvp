import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import Counter from "./counter";
export default class Card extends Component {
  state = {};

  render() {
    const { data } = this.props;
    return (
      <View
        style={{
          width: Dimensions.get("window").width,
          height: 100,
          backgroundColor: data.backgroundColor,
          padding: 10
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Image
            style={{
              width: 50,
              height: 50,
              marginRight: 30
            }}
            source={{ uri: data.image }}
          />
          <View style={{}}>
            <Text
              style={{
                fontFamily: "AvenirNextCondensed-Italic",
                fontSize: 30,
                color: "white"
              }}
            >
              {data.heading}
            </Text>
            <Text
              style={{
                fontFamily: "AvenirNextCondensed-Italic",
                fontSize: 10
              }}
            >
              date time place
            </Text>
          </View>
          <Counter />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableHighlight>
            <Button title="Edit" color="black" alignItems="center" />
          </TouchableHighlight>
          <TouchableHighlight>
            <Button title="Guests" color="black" alignItems="center" />
          </TouchableHighlight>
          <TouchableHighlight>
            <Button title="Notify" color="black" alignItems="center" />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
