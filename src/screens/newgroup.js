import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  View,
  Button,
  Text,
  ListItem,
  CheckBox
} from "native-base";
import { Tasks } from "../Service";
import { Image, TextInput,ScrollView,TouchableHighlight,Dimensions } from "react-native";
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
            <Button  transparent onPress={() => navigate("Groups")}>
              <Text style={{ color: "#535288" }}>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>New Group</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => navigate("Groups")}>
              <Text style={{ color: "#535288" }}>Cancel</Text>
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
                style={{ textAlign: "center", fontSize: 30, padding:10 }}
                onChangeText={value => this.setState({ groupname: value })}
                placeholder={"Type group subject.. "}
                value={groupname}
              />
            </View>
            <Text style={{ alignSelf:"center",fontSize: 30,color:"#535288", padding: 10 }}>Participants:</Text>
            <View>
            <ScrollView>
            {this.state.contacts.map((data, index) => {
              console.log(data);
              return (
                
                <ListItem>
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
                </ListItem>
                
              );
            })}
            </ScrollView>
            </View>
          </View>
          <Button
            full
            onPress={() => {
              this.addGroupname(groupname);
              this.props.navigation.goBack();
            }}
            style={{ backgroundColor:"#535288"}}
          >
            <Text style={{ color:"#D4D5D8"}}>Done</Text>
          </Button>
        </View>
      </Container>
    );
  }
}


