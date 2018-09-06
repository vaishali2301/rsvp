import React, { Component } from "react";
import { View, Button, Text, TextInput, Image, TouchableHighlight,Dimensions } from "react-native";

import firebase from "react-native-firebase";
import { Thumbnail,Header } from "native-base";

const successImageUri =
  "https://cdn.pixabay.com/photo/2015/06/09/16/12/icon-803718_1280.png";

export default class PhoneAuth extends React.Component {
  // static navigationOptions = { title: "Welcome" };

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: "",
      codeInput: "",
      phoneNumber: "+91",
      confirmResult: null
    };
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        this.setState({
          user: null,
          message: "",
          codeInput: "",
          phoneNumber: "+91",
          confirmResult: null
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  signIn = () => {
    const { phoneNumber } = this.state;
    this.setState({
      message: "Sending code ..."
    });

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(confirmResult =>
        this.setState({
          confirmResult,
          message: "Code has been sent!"
        })
      )
      .catch(error =>
        this.setState({
          message: `Sign In With Phone Number Error: ${error.message}`
        })
      );
  };

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult
        .confirm(codeInput)
        .then(user => {
          this.setState({
            message: "Code Confirmed!"
          });
        })
        .catch(error =>
          this.setState({
            message: `Code Confirm Error: ${error.message}`
          })
        );
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  renderPhoneNumberInput() {
    const { phoneNumber } = this.state;

    return (
      <View style={{}}>


        <View style={{ justifyContent:"center",alignSelf: "center",backgroundColor: "#535288", width: Dimensions.get("window").width,height:(Dimensions.get("window").height)/2}}>
          <Image
            style={{
              width: 200,
              height: 200,
              resizeMode: "contain",
              alignSelf: "center"
            }}
            source={require("../../phoneimage.png")}
          />
        
        
        </View>


        <View style={{ height:(Dimensions.get("window").height) / 2 }}>
        
        
           <View style={{padding:10}}>
               <Text style={{  marginTop:20,fontSize: 25, textAlign: "left" }}>
                India(+91)</Text>
            <View style={{padding:5,
              borderBottomColor: "black",
              borderBottomWidth: 1}}></View>
              <View style={{margin:10}}></View>
               <TextInput
               autoFocus
               style={{ fontSize:25, textAlign: "left" }}
               onChangeText={value => this.setState({ phoneNumber: value })}
               placeholder={"Your phone number ... "}
               value={phoneNumber}
            />
            <View style={{padding:5,
              borderBottomColor: "black",
              borderBottomWidth: 1}}></View>
            <View style={{ margin: 10 }}></View>
          <Text style={{textAlign:"center", fontSize:15}}>We will send you a One time SMS</Text>
            <Text style={{ textAlign: "center", fontSize: 15 }}>Carrier rates may apply</Text>
            <View style={{ padding: 30}}>
            <TouchableHighlight
              style={{
                height: 40,
                width: 160,
                borderRadius: 10,
                backgroundColor: "#535288",
                alignSelf:"center",
                
              }}
            >
              <Button
                title="Sign In"
                onPress={this.signIn}
                color="#D4D5D8"
                alignItems="center"
              
              />
            </TouchableHighlight>
            </View>
            
          </View>

      </View>

      </View>
    );
  }

  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;

    // return (
    //   <Text
    //     style={{
    //       padding: 5,
    //       backgroundColor: "#000",
    //       color: "#fff"
    //     }}
    //   >
    //     {message}
    //   </Text>
    // );
  }

  renderVerificationCodeInput() {
    const { codeInput } = this.state;

    return (
      <View style={{ alignSelf: "center", height: Dimensions.get("window").height, width: Dimensions.get("window").width, backgroundColor: "#535288" }}>
        <Text style={{ justifyContent: "center", marginTop: 50, padding: 10, fontSize: 30, color: "white", textAlign: "center" }}>Verification Code</Text>
        <Text style={{ color: "#D4D5D8",padding:20, textAlign: "center", fontSize: 15 }}>Please type the verification code sent to your phone number</Text>
        <TextInput
          autoFocus
          style={{fontSize:25, padding: 15, alignSelf:"center" }}
          onChangeText={value => this.setState({ codeInput: value })}
          placeholder={"Code ... "}
          value={codeInput}
        />
        <TouchableHighlight
          style={{
            height: 40,
            width: 160,
            borderRadius: 10,
            backgroundColor: "#D4D5D8",
            alignSelf: "center",

          }}
        >
          <Button
            title="Confirm Code"
            onPress={this.confirmCode}
            color="#535288"
            alignItems="center"

          />
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    const { user, confirmResult } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={{ margin: 30 }}>
        {!user && !confirmResult && this.renderPhoneNumberInput()}

        {this.renderMessage()}

        {!user && confirmResult && this.renderVerificationCodeInput()}

        {user && (
          <View
            style={{
              padding: 15,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white"
            }}
          >
            <Image
              source={{ uri: successImageUri }}
              style={{ width: 100, height: 100, marginBottom: 25 }}
            />
            <Text style={{ fontSize: 25 }}>Signed In!</Text>
            {/* <Text>{JSON.stringify(user)}</Text> */}
            <Button
              title="Continue"
              color="red"
              onPress={() =>
                this.state.user.displayName
                  ? navigate("Groups")
                  : navigate("Profile")
              }
            />
            <Button title="Sign Out" color="red" onPress={this.signOut} />
          </View>
        )}
      </View>
    );
  }
}





