import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { Button, Text, Header, Left, Right, Body, Title } from "native-base";
import database from "../model";
const events = database.events;
console.log(events);
import Eventformat from "./eventformat";
export default class Showevent extends Component {
  render() {
    const { navigate } = this.props.navigation;
    console.log("here", events);
    return (
      <ScrollView>
        <View>
          <Header>
            <Left>
              <Button transparent onPress={() => navigate("Groups")}>
                <Text>Back</Text>
              </Button>
            </Left>
            <Body>
              <Title>Group Name</Title>
            </Body>
            <Right>
              <Button transparent>
                <Text>Info</Text>
              </Button>
            </Right>
          </Header>
          <Button full onPress={() => navigate("NewEve")}>
            <Text>Add New Event</Text>
          </Button>
        </View>
        {events.map(data => {
          console.log("data", data);
          return (
            <Eventformat model={data} navigation={this.props.navigation} />
          );
        })}
      </ScrollView>
    );
  }
}
