import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  Button
} from "react-native";
export default class Wedding extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>WEDDING!!</Text>
        <Image
          style={{ width: 50, height: 50, marginTop: 100 }}
          source={{
            uri:
              "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F06%2Fmain%2Fwedding_cake_champagne_glasses-157613128.jpg%3Fitok%3DPGwvWp7S&w=700&q=85"
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
        <Text style={styles.announce}>Brad weds Angelina!{"\n"}</Text>
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
    marginTop: 20,
    color: "purple",
    alignItems: "center",
    textAlign: "center"
  }
});
