import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Button,
  Right,
  Thumbnail,
  Text
} from "native-base";
import { TouchableOpacity } from "react-native";
// import group from "../model";
export default class Tab1 extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <Button full onPress={() => navigate("New")}>
            <Text>Make a New Group</Text>
          </Button>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://t4.ftcdn.net/jpg/01/18/03/33/500_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg"
                  }}
                />
              </Left>

              <TouchableOpacity onPress={() => navigate("GroupPage")}>
                <Body>
                  <Text>GeekyAnts Spammers</Text>
                </Body>
              </TouchableOpacity>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://t4.ftcdn.net/jpg/01/18/03/33/500_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg"
                  }}
                />
              </Left>
              <Body>
                <Text>GeekyAnts</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://t4.ftcdn.net/jpg/01/18/03/33/500_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg"
                  }}
                />
              </Left>
              <Body>
                <Text>Family Group</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://t4.ftcdn.net/jpg/01/18/03/33/500_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg"
                  }}
                />
              </Left>
              <Body>
                <Text>College Group</Text>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://t4.ftcdn.net/jpg/01/18/03/33/500_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg"
                  }}
                />
              </Left>
              <Body>
                <Text>School Group</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
