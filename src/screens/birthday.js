import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  Button
} from "react-native";
export default class Birthday extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>BIRTHDAY PARTY!!</Text>
        <Image
          style={{ width: 50, height: 50, marginTop: 100 }}
          source={{
            uri:
              "https://img.freepik.com/free-vector/birthday-cake-background-with-garland_23-2147647466.jpg?size=338&ext=jpg"
          }}
          style={{ width: 200, height: 200, marginLeft: 100 }}
        />
        <View
          style={{
            marginTop: 50,
            borderBottomColor: "black",
            borderBottomWidth: 1
          }}
        />
        <Text style={styles.announce}>Vaibhav's 5th Birthday!{"\n"}</Text>
        <Text style={{ marginLeft: 100 }}>
          Saturday Aug 28,2018 at 7pm{"\n"}
        </Text>
        <TouchableHighlight
          style={{
            height: 40,
            width: 160,
            borderRadius: 10,
            backgroundColor: "purple",
            marginLeft: 110,
            marginRight: 50,
            marginTop: 50
          }}
        >
          <Button
            title="RSVP"
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
  },
  mainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  navBar: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    height: 30
  },
  body: {
    flex: 3,
    display: "flex"
  },
  announce: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Courier-Oblique",
    alignItems: "center",
    textAlign: "center",
    marginTop: 20,
    color: "purple"
  }
});
