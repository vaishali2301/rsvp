import React, { Component } from "react";
import { ScrollView, View, Button,TouchableHighlight,Dimensions } from "react-native";
import { Header, Input, Item, Icon } from "native-base";
import GroupFormat from "./GroupFormat";
import firebase from "react-native-firebase";
import { Tasks } from "../Service";
import { withNavigationFocus } from "react-navigation-is-focused-hoc";
class ShowGroup extends Component {
  constructor() {
    super();
    this.state = { groupName:"",tasks: [] };
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.toJSON() });
        Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
      } else {
        this.props.navigation.navigate("Phone");
      }
    });
  }
  searchGroupname = groupName => {
    if (groupName) {
      Tasks.search(groupName, tasks => this.setState({ tasks: tasks || [] }));
    } else {
      Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
    }
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
    }
  }
  refresh() {
    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  }
  signOut = () => {
    firebase.auth().signOut();
  };
  render() {
    const { groupName } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{backgroundColor:"#8988AC"}}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
            onChangeText={(e) => {this.searchGroupname(e);}}
            placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button title="Sign Out" color="#535288" onPress={this.signOut} />
        </Header>
        <View>
          <TouchableHighlight
            style={{
              height: 40,
              width: Dimensions.get("window").width,
              backgroundColor: "#535288",
              alignSelf: "center"
            }}
          >
            <Button
              title="Make a New Group"
              onPress={() => navigate("New")}
              color="#D4D5D8"
              alignItems="center" />
          </TouchableHighlight>
        </View>
        {this.state.tasks.map(data => {
          console.log("data", data);
          return (
            <GroupFormat model={data} navigation={this.props.navigation} refresh={() => this.refresh()}/>
          );
        })}
      </ScrollView>
    );
  }
}

export default withNavigationFocus(ShowGroup);




