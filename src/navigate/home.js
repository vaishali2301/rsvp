import React, { Component } from "react";
import { View, Button, Text, TextInput, Image } from "react-native";
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate("Profile")}
      />
    );
  }
}
