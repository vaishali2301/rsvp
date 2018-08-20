import React, { Component } from "react";
import { Picker } from "react-native";
export default class Pick extends Component {
  state = {
    party: ""
  };
  render() {
    return (
      <Picker
        selectedValue={this.state.party}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({
            party: itemValue
          })
        }
      >
        <Picker.Item label="Birthday" value="bir" />
        <Picker.Item label="Anniversary" value="ann" />
        <Picker.Item label="Wedding" value="wed" />
        <Picker.Item label="Baby Shower" value="bab" />
        <Picker.Item label="Class Reunion" value="cla" />
        <Picker.Item label="New Year Party" value="new" />
        <Picker.Item label="Christmas Party" value="chr" />
        <Picker.Item label="Valentine's Day" value="val" />
      </Picker>
    );
  }
}
