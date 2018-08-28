import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Button, Text } from "native-base";
import database from "../model";
const group = database.group;
import Groupformat from "./groupformat";
export default class Showgroup extends Component {
  render() {
    console.log("here", group);
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View>
          <Button full onPress={() => navigate("New")}>
            <Text>Make a New Group</Text>
          </Button>
        </View>
        {group.map((data, key) => {
          console.log("data", data);
          return (
            <Groupformat
              key={key}
              model={data}
              navigation={this.props.navigation}
            />
          );
        })}
      </ScrollView>
    );
  }
}
