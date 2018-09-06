<View>
    <View style={{ justifyContent: "center", alignSelf: "center", backgroundColor: "#535288", width: Dimensions.get("window").width, height: (Dimensions.get("window").height) / 2 }}></View>
    
    <View style={{ justifyContent: "center", alignSelf: "center", width: Dimensions.get("window").width, height: (Dimensions.get("window").height) / 2 }}>
      <View style={{ flexDirection: "row" }}>
              <Image
                style={{ width: 50, height: 50, resizeMode: "contain" }}
                source={{
                  uri:
                    "https://t4.ftcdn.net/jpg/01/18/03/33/500_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg"
                }}
              />
              <TextInput
                autoFocus
                style={{
                  textAlign: "center",
                  borderColor: "gray",
                  borderWidth: 1,
                  height: 40,
                  multiline: true,
                  numberOfLines: 4,
                  editable: true,
                  maxLength: 40,
                  fontSize: 20,
                  padding: 10
                }}
                onChangeText={value => this.setState({ eventname: value })}
                placeholder={"Type event name and description.. "}
                value={eventname}
              />
            </View>
      <Button
            full 
            onPress={() => {
              // navigate("Groups");
              this.addEventname(eventname);
              this.props.navigation.goBack();
            }}
            style={{ backgroundColor: "#535288" }}
          >
            <Text style={{ color: "#D4D5D8" }}>Done</Text>
          </Button>

    </View>
    
</View>