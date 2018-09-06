import React, { Component } from "react";
import { Container, Header, Title, Tab, Tabs } from "native-base";

import ShowGroup from "./ShowGroup";

export default class HomePage extends Component {
  render() {
    console.log("this.props. groupTab", this.props);
    return (
      <Container>
        {/* <Header hasTabs /> */}
        {/* <Title>RSVP</Title> */}
        <ShowGroup {...this.props} />
      </Container>
    );
  }
}
