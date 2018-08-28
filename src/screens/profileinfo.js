import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Button,
  Dimensions
} from "react-native";
import firebaseMethods from "./../service";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
  }
  addUsername = username => {
    firebaseMethods
      .save(username)
      .then(function() {
        console.log("User successfully added!");
      })
      .catch(function(error) {
        console.error("Error adding user: ", error);
      });
  };

  render() {
    const { username } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          justifyContent: "space-between",
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          paddingVertical: 40
        }}
      >
        <View>
          <Text
            style={
              {
                //marginTop: 100,
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold"
              }
              //   fontFamily: "Courier-Oblique"
            }
          >
            Profile Info
          </Text>
          <View style={{ borderBottomColor: "black", borderBottomWidth: 1 }} />

          <Text style={{ textAlign: "center", marginTop: 30 }}>
            Please provide your name{"\n"}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 150, height: 150, resizeMode: "contain" }}
              source={require("../../RSVP_title.png")}
            />
            <TextInput
              autoFocus
              style={{ textAlign: "center", fontSize: 30 }}
              onChangeText={value => this.setState({ username: value })}
              placeholder={"Name ... "}
              value={username}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            width: Dimensions.get("window").width
          }}
        >
          <TouchableHighlight
            style={{
              height: 40,
              width: 160,
              borderRadius: 10,
              backgroundColor: "purple",
              marginBottom: 30
            }}
          >
            <Button
              title="NEXT"
              color="white"
              justifyContent="center"
              onPress={() => this.addUsername(username)}
              // onPress={() => navigate("Groups")}
              accessibilityLabel="Learn more about this button"
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
