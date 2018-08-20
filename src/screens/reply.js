import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  Image,
  StyleSheet,
  View,
  Button,
  TouchableHighlight,
  Picker,
  Alert
} from "react-native";
export default class Reply extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>RSVP to the event:</Text>
        <Image
          style={{ width: 50, height: 50, marginTop: 100 }}
          source={{
            uri:
              "https://www.nourishgenie.com/blog/wp-content/uploads/2018/01/original_wedding-invites-and-rsvp.jpg"
          }}
          style={{ width: 200, height: 200, marginLeft: 100 }}
        />
        {/* <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker> */}
        <TouchableHighlight
          style={{
            height: 40,
            width: 160,
            borderRadius: 10,
            backgroundColor: "purple",
            marginLeft: 110,
            marginRight: 50,
            marginTop: 100
          }}
        >
          <Button
            title="Yes,I'll be there! "
            color="white"
            alignItems="center"
            accessibilityLabel="Learn more about this button"
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            height: 40,
            width: 160,
            borderRadius: 10,
            backgroundColor: "purple",
            marginLeft: 110,
            marginRight: 50,
            marginTop: 20
          }}
        >
          <Button
            title="No. So Sorry."
            color="white"
            alignItems="center"
            accessibilityLabel="Learn more about this button"
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            height: 40,
            width: 160,
            borderRadius: 10,
            backgroundColor: "purple",
            marginLeft: 110,
            marginRight: 50,
            marginTop: 20
          }}
        >
          <Button
            title="Umm..Maybe"
            color="white"
            alignItems="center"
            accessibilityLabel="Learn more about this button"
          />
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Courier-Oblique",
    marginBottom: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    color: "purple",
    width: "100%",
    textAlign: "center",
    padding: 20
  }
});
