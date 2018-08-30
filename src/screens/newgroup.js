import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  View,
  Text,
  CheckBox
} from "native-base";
import { Tasks } from "./../service";
import { Image, TextInput } from "react-native";
import Contacts from "react-native-contacts";
export default class NewGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { groupname: "", contacts: [] };
  }
  addGroupname = groupname => {
    let participants = [];
    this.state.contacts.map(contact => {
      if (contact.checked) {
        console.log(contact);
        participants.push(contact.phoneNumbers[0].number);
      }
    });
    Tasks.save(groupname, participants)
      .then(function() {
        console.log("Group successfully added!");
      })
      .catch(function(error) {
        console.error("Error adding group: ", error);
      });
  };
  componentDidMount() {
    Contacts.getAll((err, contacts) => {
      if (err) throw err;

      console.log(contacts, "123");
      this.setState({ contacts });
    });
  }
  addParticipant = () => {};

  render() {
    const { groupname } = this.state;
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
            <Title>New Group</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => navigate("Groups")}>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View style={{ justifyContent: "space-evenly" }}>
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
                onChangeText={value => this.setState({ groupname: value })}
                placeholder={"Type group subject.. "}
                value={groupname}
                onSubmitEditing={() => this.addGroupname(groupname)}
              />
            </View>
            <Text style={{ fontSize: 30 }}>Participants:</Text>
            {this.state.contacts.map((data, index) => {
              console.log(data);
              return (
                <View style={{ flexDirection: "row" }}>
                  <CheckBox checked={data.checked} />
                  <Text
                    style={{ marginLeft: 20 }}
                    onPress={() => {
                      this.state.contacts[index].checked = !this.state.contacts[
                        index
                      ].checked;
                      this.setState({ contacts: this.state.contacts });
                    }}
                  >
                    {data.givenName}
                  </Text>
                </View>
              );
            })}
          </View>

          <Button full onPress={() => this.addGroupname(groupname)}>
            <Text>Done</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
