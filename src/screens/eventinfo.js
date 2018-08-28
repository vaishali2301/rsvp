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
export default class EventInfo extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigate("Show2")}>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Event Info</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Delete</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Text>
                Birthday on Wednesday, 22nd August,2018 5pm at McDonald's
              </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text>Attending</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text>Not Attending</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text>Yet to RSVP</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
{
  /* <Button block onPress={() => navigate("EventPage")}>
    <Text>Add New Event</Text>
</Button> */
}
