import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Card,
  Body,
  Left,
  Title,
  CardItem,
  Text,
  Icon,
  Right,
  View
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Events } from "./../service";
export default class Eventformat extends Component {
  state = {};
  addAttend = (eventname, response) => {
    Events.respond(eventname, response).then(function() {
      console.log("Response successfully added!");
    });
  };
  render() {
    const { model } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <Card>
        <CardItem>
          <TouchableOpacity onPress={() => navigate("Info")}>
            <Text>{model.eventname}</Text>
          </TouchableOpacity>
        </CardItem>
        <View style={{ flexDirection: "row" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.addAttend(model.eventname, "yes")}
            >
              <Text>Yes</Text>
            </Button>
          </Left>
          <Right>
            <Button
              transparent
              onPress={() => this.addAttend(model.eventname, "no")}
            >
              <Text>No</Text>
            </Button>
          </Right>
        </View>
      </Card>
    );
  }
}
