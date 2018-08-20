import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
  Image,
  ScrollView,
  FlatList
} from "react-native";
// import Counter from "./counter";
import array from "./data";
import Card from "./card";
export default class Eventlist extends Component {
  render() {
    return (
      <ScrollView style={{ marginTop: 100 }}>
        <View
          style={
            { flex: 1, flexDirection: "column", alignItems: "center" } // justifyContent: "center",
          }
        >
          <View style={styles.container1}>
            <Text
              style={{ fontFamily: "AvenirNextCondensed-Italic", fontSize: 30 }}
            >
              Ekta's Wedding
            </Text>
            <Image
              style={{
                width: 40,
                height: 40,
                position: "relative",
                marginStart: 0,
                marginRight: 300,
                marginVertical: -30
              }}
              source={{
                uri:
                  "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F06%2Fmain%2Fwedding_cake_champagne_glasses-157613128.jpg%3Fitok%3DPGwvWp7S&w=700&q=85"
              }}
            />
            {/* <Counter /> */}
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 60,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: 250,
                    marginTop: 50
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Edit" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 70,
                    borderRadius: 10,
                    marginLeft: 110,
                    marginRight: 150,
                    marginTop: 40
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Guests" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 60,
                    borderRadius: 10,
                    marginLeft: 200,
                    marginRight: 0,
                    marginTop: 30
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Notify" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.container2}>
            <Text
              style={{
                fontFamily: "AvenirNextCondensed-Italic",
                fontSize: 30
              }}
            >
              Vaibhav's 5th Birthday
            </Text>
            <Image
              style={{
                width: 40,
                height: 40,
                position: "relative",
                marginStart: 0,
                marginRight: 300,
                marginVertical: -30
              }}
              source={{
                uri:
                  "https://img.freepik.com/free-vector/birthday-cake-background-with-garland_23-2147647466.jpg?size=338&ext=jpg"
              }}
            />
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 60,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: 250,
                    marginTop: 50
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Edit" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 70,
                    borderRadius: 10,
                    marginLeft: 110,
                    marginRight: 150,
                    marginTop: 40
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Guests" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 60,
                    borderRadius: 10,
                    marginLeft: 200,
                    marginRight: 0,
                    marginTop: 30
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Notify" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.container3}>
            <Text
              style={{
                fontFamily: "AvenirNextCondensed-Italic",
                fontSize: 30
              }}
            >
              Lily's Baby Shower
            </Text>
            <Image
              style={{
                width: 40,
                height: 40,
                position: "relative",
                marginStart: 0,
                marginRight: 300,
                marginVertical: -30
              }}
              source={{
                uri:
                  "https://image.freepik.com/free-vector/watercolor-baby-shower-card-with-footprints_1174-18.jpg"
              }}
            />
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 60,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: 250,
                    marginTop: 50
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Edit" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 70,
                    borderRadius: 10,
                    marginLeft: 110,
                    marginRight: 150,
                    marginTop: 40
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Guests" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 60,
                    borderRadius: 10,
                    marginLeft: 200,
                    marginRight: 0,
                    marginTop: 30
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Notify" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.container4}>
            <Text
              style={{
                fontFamily: "AvenirNextCondensed-Italic",
                fontSize: 30,
                color: "white"
              }}
            >
              Roy's 10th Anniversary
            </Text>
            <Image
              style={{
                width: 40,
                height: 40,
                position: "relative",
                marginStart: 0,
                marginRight: 300,
                marginVertical: -30
              }}
              source={{
                uri:
                  "https://img.ohmymag.co.uk/article/480/gifts/wedding_6a75b1ba32a7a0c673bc11d8ac93290b2dc288ad.jpg"
              }}
            />
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 60,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: 250,
                    marginTop: 50
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Edit" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 70,
                    borderRadius: 10,
                    marginLeft: 110,
                    marginRight: 150,
                    marginTop: 40
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Guests" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 60,
                    borderRadius: 10,
                    marginLeft: 200,
                    marginRight: 0,
                    marginTop: 30
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Notify" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.container5}>
            <Text
              style={{
                fontFamily: "AvenirNextCondensed-Italic",
                fontSize: 30,
                color: "white"
              }}
            >
              Class of 2014!!
            </Text>
            <Image
              style={{
                width: 40,
                height: 40,
                position: "relative",
                marginStart: 0,
                marginRight: 300,
                marginVertical: -30
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dVvqe3Own4pXV9yXuxIclyedKQWiXb2r7A1cQ9lwUDi5kh2p"
              }}
            />
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 60,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: 250,
                    marginTop: 50
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Edit" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 70,
                    borderRadius: 10,
                    marginLeft: 110,
                    marginRight: 150,
                    marginTop: 40
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Guests" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                style={
                  {
                    height: 30,
                    width: 60,
                    borderRadius: 10,
                    marginLeft: 200,
                    marginRight: 0,
                    marginTop: 30
                  } // backgroundColor: "purple",
                }
              >
                <Button title="Notify" color="white" alignItems="center" />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container1: {
    alignItems: "center",
    width: 500,
    height: 100,
    backgroundColor: "powderblue"
  },
  container2: {
    alignItems: "center",
    width: 500,
    height: 100,
    backgroundColor: "skyblue"
  },
  container3: {
    alignItems: "center",
    width: 500,
    height: 100,
    backgroundColor: "#00bfff"
  },
  container4: {
    alignItems: "center",
    width: 500,
    height: 100,
    backgroundColor: "steelblue"
  },
  container5: {
    alignItems: "center",
    width: 500,
    height: 100,
    backgroundColor: "darkblue"
  }
});
