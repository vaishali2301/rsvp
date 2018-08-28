import React, { Component } from "react";
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  View,
  Textarea,
  Form,
  Text
} from "native-base";
import { Image, TextInput } from "react-native";
import { Events } from "./../service";
export default class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventname: ""
    };
  }
  addEventname = eventname => {
    Events.save(eventname)
      .then(function() {
        console.log("Event successfully added!");
      })
      .catch(function(error) {
        console.error("Error adding event: ", error);
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
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>New Event</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => navigate("Groups")}>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <View style={{ justifyContent: "space-between", flex: 1 }}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: 50, height: 50, resizeMode: "contain" }}
                source={{
                  uri:
                    "https://t4.ftcdn.net/jpg/01/18/03/33/500_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg"
                }}
              />
              <TextInput
                autoFocus
                style={{ textAlign: "center", fontSize: 30 }}
                onChangeText={value => this.setState({ eventname: value })}
                placeholder={"Type event name.. "}
                value={eventname}
                onSubmitEditing={() => this.addEventname(eventname)}
              />
            </View>
            <Form>
              <Textarea
                rowSpan={5}
                bordered
                placeholder="Enter event description"
              />
            </Form>
          </View>
          <Button full>
            <Text>Done</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
