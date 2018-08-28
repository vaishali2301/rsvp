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
export default class Eventformat extends Component {
  state = {};
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
            <Button transparent>
              <Text>Yes</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Text>No</Text>
            </Button>
          </Right>
        </View>
      </Card>
    );
  }
}
