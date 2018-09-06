import React, { Component } from "react";
import { Button, Card, Left, CardItem, Text, Right, View } from "native-base";
import { TouchableOpacity } from "react-native";
import { Events } from "../Service";
export default class EventFormat extends Component {
  state = {};
  addAttend = (eventname, response) => {
    Events.respond(this.props.groupName, eventname, response).then(function() {
      console.log("Response successfully added!");
    });
  };

  render() {
    const { model } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <Card>
        <CardItem>
          <TouchableOpacity
            onPress={() =>
              navigate("Info", {
                eventName: this.props.name,
                groupName: this.props.groupName
              })
            }
          >
            <Text style={{ fontSize: 20,color: "#535288"}}>{this.props.name}</Text>
            <Text>{model.type}</Text>
          </TouchableOpacity>
        </CardItem>
        <View style={{ flexDirection: "row" }}>
          <Left>
            <Button
              transparent
              onPress={() => {
                navigate("Groups");
                this.addAttend(this.props.name, "attending");
              }}
            >
              <Text style={{ color: "#535288" }}>Yes</Text>
            </Button>
          </Left>
          <Right>
            <Button
              transparent
              onPress={() => {
                navigate("Groups");
                this.addAttend(this.props.name, "notattending");
              }}
            >
              <Text style={{ color: "#535288" }}>No</Text>
            </Button>
          </Right>
        </View>
      </Card>
    );
  }
}
