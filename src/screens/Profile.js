import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableHighlight,
  Button
} from "react-native";
import { Thumbnail } from "native-base";
import firebaseMethods from "../Service";
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
          backgroundColor:"#535288",
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          paddingVertical: 40
        }}
      >
        <View>
          <Text style={{ justifyContent: "center", marginTop: 50, padding: 10, fontSize: 30, color: "white", textAlign: "center" }}>Profile Info</Text>
          {/* <View style={{ borderBottomColor: "black", borderBottomWidth: 1 }} /> */}

          <View>
            <Image
              style={{
                width: 150,
                height: 150,
                resizeMode: "contain",
                alignSelf: "center"
              }}
              
              source={require("../../rsvp.png")}
            />
            <Text style={{ fontSize:20,color:"white",padding:30,textAlign: "center" }}>
              Please provide your name{"\n"}
            </Text>
            <TextInput
              autoFocus
              style={{
                textAlign: "center",
                fontSize: 30,
                // borderColor: "gray",
              }}
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
              // width: Dimensions.get("window").width,
              width:120,
              backgroundColor: "#D4D5D8",
              alignSelf: "center",
              borderRadius: 20

            }}
          >
            <Button 
              title="Next"
              onPress={() => {
                navigate("Groups");
                this.addUsername(username);
              }}
              color= "#535288"
              alignItems="center"/>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
