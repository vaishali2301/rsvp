import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Textarea,
  Title,
  View,
  Text
} from "native-base";
import { Image, TextInput,Dimensions } from "react-native";
import { Events } from "../Service";
export default class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventname: ""
    };
  }
  addEventname = eventname => {
    Events.save(this.props.navigation.state.params.groupName, eventname)
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
            <Button transparent onPress={() => navigate("Show2")}>
              <Text style={{ color: "#535288" }}>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>New Event</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => navigate("Groups")}>
              <Text style={{ color: "#535288" }}>Cancel</Text>
            </Button>
          </Right>
        </Header>

        <View style={{ justifyContent:"center",alignSelf: "center",backgroundColor: "#535288", width: Dimensions.get("window").width,height:(Dimensions.get("window").height)/2}}>
          <Text style={{ justifyContent: "center", padding: 10, fontSize: 30, color: "white", textAlign: "center" }}> Create your Event</Text>
          <Image
            style={{
              width: 150,
              height: 150,
              resizeMode: "contain",
              alignSelf: "center"
            }}
            source={{uri:"https://us.123rf.com/450wm/mykub/mykub1702/mykub170200084/71517609-vector-calendar-icons-event-add-delete-progress-calendar-vector-set.jpg?ver=6"}}
          />
          <Text style={{ justifyContent: "center", padding: 10, fontSize: 10, color: "white", textAlign: "center" }}>
            While creating your event description, be sure to mention the date, time and venue of your event along with the event information,very clearly so your guests have no confusion.</Text>
        </View> 
        
        <View style={{ height:(Dimensions.get("window").height) / 2 }}>
              <View style={{justifyContent:"space-between",flex:0.82}}>
               <Textarea style={{fontSize:20,padding:10,editable:true}}
               rowSpan={9} 
               placeholder="Type event name and description.. "
               onChangeText={value => this.setState({ eventname: value })}
               value={eventname}/>
              <Button full 
                onPress={() => {
                  this.addEventname(eventname);
                  this.props.navigation.goBack();
                }}
                style={{ backgroundColor: "#535288" }}
              >
              <Text style={{ color: "#D4D5D8" }}>Done</Text>
              </Button>
            </View>
        </View>
    </Container>
    );
  }
}


 