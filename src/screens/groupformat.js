import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Button,
  Right,
  Thumbnail,
  Text
} from "native-base";

import { TouchableOpacity, View } from "react-native";
export default class Groupformat extends Component {
  state = {};
  render() {
    const { model } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: model.image }} />
          </Left>

          <TouchableOpacity onPress={() => navigate("Show2")}>
            <Body>
              <Text>{model.groupname}</Text>
            </Body>
          </TouchableOpacity>
        </ListItem>
      </View>
    );
  }
}
