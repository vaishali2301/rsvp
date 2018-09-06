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
  Right
} from "native-base";
import { Events } from "../Service";
export default class EventInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { eventname: "" };
  }
  deleteEventname = eventname => {
    Events.delete(this.props.navigation.state.params.groupName, eventname)
      .then(function() {
        console.log("Event successfully deleted!");
      })
      .catch(function(error) {
        // console.error("Error deleting event: ", error);
      });
  };
  render() {
    const { eventname } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigate("Groups")}>
              <Text style={{ color: "#535288" }}>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Event Info</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => {
                navigate("Show2");
                this.deleteEventname(
                  this.props.navigation.state.params.eventName
                );
              }}
            >
              <Text style={{ color: "#535288" }}>Delete</Text>
            </Button>
          </Right>
        </Header>
        <Content style={{backgroundColor:"#8988AC"}}>
          <Card>
            <CardItem>
              <Text>{this.props.navigation.state.params.eventName}</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem >
              <Text>Attending : {this.props.navigation.state.params.attending}</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text>Not Attending : {this.props.navigation.state.params.notattending}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
