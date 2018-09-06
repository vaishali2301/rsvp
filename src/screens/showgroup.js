import React, { Component } from "react";
import { ScrollView, View, Button,TouchableHighlight,Dimensions } from "react-native";
import { Header, Input, Item, Icon } from "native-base";
import GroupFormat from "./GroupFormat";
import { Tasks } from "../Service";
import { withNavigationFocus } from "react-navigation-is-focused-hoc";
class ShowGroup extends Component {
  constructor() {
    super();
    this.state = { tasks: [] };
  }
  componentDidMount() {
    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
    }
  }
  refresh() {
    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{backgroundColor:"#8988AC"}}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
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


