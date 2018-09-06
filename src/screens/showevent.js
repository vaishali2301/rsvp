import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import {
  Button,
  Text,
  Header,
  Icon,
  Left,
  Right,
  Body,
  Fab,
  Title
} from "native-base";
import { map } from "lodash";
import { withNavigationFocus } from "react-navigation-is-focused-hoc";
import EventFormat from "./EventFormat";
import { Tasks } from "../Service";

class ShowEvent extends Component {
  constructor() {
    super();
    this.state = { tasks: [], active: "false",groupname: ""};
  }
   deleteGroupname = groupname => {
    Tasks.delete(this.props.navigation.state.params.groupName)
      .then(function() {
        console.log("Group successfully deleted!");
      })
      .catch(function(error) {
      });
  };
  componentDidMount() {
    console.log(this.props.navigation.state.params);
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      this.props.navigation.state.params.refresh();
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    const events = this.props.navigation.state.params.events || [];
    console.log("here", events);
    return (
      <ScrollView style={{backgroundColor:"#8988AC"}}>
        <View>
          <Header>
            <Left>
              <Button transparent onPress={() => navigate("Groups")}>
                <Text style={{ color: "#535288" }}>Back</Text>
              </Button>
            </Left>
            <Body>
              <Title>{this.props.navigation.state.params.groupName}</Title>
            </Body>

            <Right>
              <Button transparent onPress={() => {
                    this.deleteGroupname(this.props.navigation.state.params.groupName);  
                    navigate("Groups")}}>
                <Text style={{ color: "#535288" }}>Delete</Text>
              </Button>
            </Right>
          </Header>
          <Button
            full
            onPress={() =>
              navigate("NewEve", {
                groupName: this.props.navigation.state.params.groupName
              })
            }
            style={{ backgroundColor: "#535288" }}
          >
            <Text style={{fontSize:20, color: "#D4D5D8" }}>Add New Event</Text>
          </Button>
        </View>
        {map(events, (data, index) => {
          console.log("data", data, index);
          return (
            <EventFormat
              groupName={this.props.navigation.state.params.groupName}
              model={data}
              name={index}
              navigation={this.props.navigation}
            />
          );
        })}
      </ScrollView>
    );
  }
}
export default withNavigationFocus(ShowEvent);

