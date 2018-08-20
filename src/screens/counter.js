import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from "react-native";

export default class Counter extends Component {
  state = {
    count: 50
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    const { count } = this.state;
    return (
      <View style={styles.container}>
        <Text> Attending: {count} </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            style={
              {
                height: 30,
                width: 30,
                borderRadius: 10
                //   marginLeft: 50,
                //   marginRight: 100,
                //   marginTop: 0,
                //   marginStart: 10
              } // backgroundColor: "purple",
            }
          >
            <Button onPress={this.handleIncrement} title="+" />
          </TouchableHighlight>

          <TouchableHighlight
            style={
              {
                height: 30,
                width: 30
                //   borderRadius: 10,
                //   marginLeft: 50,
                //   marginRight: 50,
                //   marginTop: -30
              } // backgroundColor: "purple",
            }
          >
            <Button onPress={this.handleDecrement} title="-" />
          </TouchableHighlight>
          <TouchableHighlight
            style={
              {
                height: 30,
                width: 30
                //   borderRadius: 10,
                //   marginLeft: 100,
                //   marginRight: 10,
                //   marginEnd: 10,
                //   marginTop: -30
              } // backgroundColor: "purple",
            }
          >
            <Button onPress={this.reset} title="Reset" />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
    // marginTop: 100
  }
});
