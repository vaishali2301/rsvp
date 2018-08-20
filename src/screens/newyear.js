import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  Button
} from "react-native";
export default class Newyear extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>NEW YEAR PARTY!!</Text>
        <Image
          style={{ width: 50, height: 50, marginTop: 100 }}
          source={{
            uri:
              "https://image.freepik.com/free-vector/happy-new-year-background-with-golden-confetti_1048-4402.jpg"
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
        <Text style={styles.announce}>Let us Celebrate!{"\n"}</Text>
        <Text style={{ marginLeft: 100 }}>
          Wednesday Dec 31,2018 at 7pm{"\n"}
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
    marginTop: 20,
    color: "purple",
    alignItems: "center",
    textAlign: "center"
  }
});
