import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
  Alert
} from "react-native";

export default class Login extends Component {
  state = { phone: "", otp: "" };
  constructor() {
    super();
  }
  changePhoneHandler = phone => {
    this.setState({ phone: phone });
  };
  changeOtpHandler = otp => {
    this.setState({ otp: otp });
  };
  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={this.changePhoneHandler}
          value={this.state.phone}
          placeholder="Phone number"
        />
        <TextInput
          style={styles.TextInput}
          onChangeText={this.changeOtpHandler}
          value={this.state.otp}
          placeholder="OTP"
        />
        <View style={{ margin: 7 }} />
        <Button
          onPress={this.props.onLoginPress}
          title="Submit"
          styles={{ button: styles.alignRight, label: styles.label }}
          onPress={() => Alert.alert(this.state.phone, this.state.otp)}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Verdana",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "#595856",
    width: "100%",
    textAlign: "center",
    padding: 20
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  label: {
    color: "#0d8898",
    fontSize: 20
  },
  alignRight: {
    alignSelf: "flex-end"
  },
  TextInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 1,
    width: "100%"
  }
});
