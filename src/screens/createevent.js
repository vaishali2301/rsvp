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
export default class Create extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Let's Get Started!!</Text>
        <Image
          style={{ width: 50, height: 50, marginTop: 100 }}
          source={{
            uri:
              "https://images.emojiterra.com/google/android-oreo/512px/1f389.png"
          }}
          style={{ width: 200, height: 200, marginLeft: 100 }}
        />
        <TouchableHighlight
          style={{
            height: 40,
            width: 160,
            borderRadius: 10,
            backgroundColor: "purple",
            marginLeft: 110,
            marginRight: 50,
            marginTop: 100
          }}
        >
          <Button
            title="Create an event"
            color="white"
            alignItems="center"
            accessibilityLabel="Learn more about this button"
          />
          {/* <Button
            style={{ width: 170, backgroundColor: "#99004d", marginTop: 20 }}
          >
            <Text style={{ marginLeft: 50 }}>Login</Text>
          </Button> */}
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            height: 40,
            width: 160,
            borderRadius: 10,
            backgroundColor: "purple",
            marginLeft: 110,
            marginRight: 50,
            marginTop: 20
          }}
        >
          <Button
            title="Existing events"
            color="white"
            alignItems="center"
            accessibilityLabel="Learn more about this button"
          />
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Courier-Oblique",
    marginBottom: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    color: "purple",
    width: "100%",
    textAlign: "center",
    padding: 20
  }
});
