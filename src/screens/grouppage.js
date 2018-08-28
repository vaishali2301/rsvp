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
export default class CardList extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigate("Groups")}>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Group Name</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button full onPress={() => navigate("EventPage")}>
            <Text>Add New Event</Text>
          </Button>
          <Card>
            <CardItem>
              <TouchableOpacity onPress={() => navigate("Info")}>
                <Text>
                  Birthday on Wednesday, 22nd August,2018 5pm at McDonald's
                </Text>
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
          <Card>
            <CardItem>
              <Text>
                Anniversary on Wednesday, 22nd August,2018 5pm at McDonald's
              </Text>
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
          <Card>
            <CardItem>
              <Text>
                Lunch Date on Wednesday, 22nd August,2018 1pm at Sheraton
              </Text>
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
          <Card>
            <CardItem>
              <Text>
                Farewell Party on Wednesday, 22nd August,2018 5pm at Innov8
              </Text>
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
        </Content>
      </Container>
    );
  }
}
