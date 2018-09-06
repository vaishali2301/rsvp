import React, { Component } from "react";
import {
  ListItem,
  Left,
  Right,
  Body,
  Thumbnail,
  Text,
  List
} from "native-base";

import { TouchableOpacity, View } from "react-native";
export default class GroupFormat extends Component {
  state = {};
  render() {
    const { model } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://t4.ftcdn.net/jpg/01/18/03/33/500_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg"
              }}
            />
          </Left>
          <Body>
            <TouchableOpacity
              onPress={() =>
                navigate("Show2", {
                  groupName: model.text,
                  events: model.events,
                  refresh: this.props.refresh
                })
              }
            >
              <Text style={{ fontSize: 20,color: "#D4D5D8" }}>{model.text}</Text>
            </TouchableOpacity>
          </Body>
          <Right />
        </ListItem>
      </List>
    );
  }
}
