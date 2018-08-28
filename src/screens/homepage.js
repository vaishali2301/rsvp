import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Tab,
  Left,
  Right,
  Tabs
} from "native-base";

import Tab2 from "./contact";
import Showgroup from "./showgroup";

export default class Grouptab extends Component {
  render() {
    console.log("this.props. groupTab", this.props);
    return (
      <Container>
        <Header hasTabs />
        <Title>RSVP</Title>
        <Tabs>
          <Tab heading="Groups">
            <Showgroup {...this.props} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

//export default TabsExample;
