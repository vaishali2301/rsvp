import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Button,
  TextInput,
  Keyboard,
  Platform
} from "react-native";
import { firebaseApp } from "./src/config";

const ios = Platform.OS == "ios";
const viewPadding = 10;

var db = firebaseApp.firestore();
db.settings({ timestampsInSnapshots: true });

export default class TodoList extends Component {
  state = { tasks: [], text: "" };
  constructor() {
    super();
  }

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      Tasks.save({ text: this.state.text.trim() }).then(res => {
        console.log(res);
        this.setState(prevState => {
          let { tasks, text } = prevState;
          return {
            tasks: tasks.concat({
              key: res,
              text: text
            }),
            text: ""
          };
        });
      });
    }
  };

  deleteTask = (i, key) => {
    this.setState(prevState => {
      Tasks.delete(key);
      let tasks = prevState.tasks.slice();

      tasks.splice(i, 1);

      return { tasks: tasks };
    });
  };

  componentDidMount() {
    Keyboard.addListener(ios ? "keyboardDidShow" : "keyboardWillShow", e =>
      this.setState({
        viewPadding: e.endCoordinates.height + viewPadding
      })
    );

    // db.collection("users").add({
    //   first: "Vaishali",
    //   last: "Lovelace",
    //   born: 1815
    // });
    // var Ref = db.collection("users").doc("7ndbdtCUsFnvcvEbdV2F");
    // Ref.delete()
    //   .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    // .catch(function(error) {
    //   console.error("Error adding document: ", error);
    // });

    Keyboard.addListener(ios ? "keyboardDidHide" : "keyboardWillHide", () =>
      this.setState({
        viewPadding: viewPadding
      })
    );

    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  }

  render() {
    return (
      <View
        style={[styles.container, { paddingBottom: this.state.viewPadding }]}
      >
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTask}
          value={this.state.text}
          placeholder="Add Tasks"
          returnKeyType="done"
          returnKeyLabel="done"
        />
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View>
                <View style={styles.listItemCont}>
                  <Text style={styles.listItem}>{item.text}</Text>
                  <Button
                    title="X"
                    onPress={() => this.deleteTask(index, item.key)}
                  />
                </View>
                <View style={styles.hr} />
              </View>
            );
          }}
        />
      </View>
    );
  }
}

let Tasks = {
  convertToArrayOfObject(tasks, callback) {
    return callback(
      tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(tasks) {
    return tasks.map(task => task.text).join("||");
  },
  all(callback) {
    // return AsyncStorage.getItem("TASKS", (err, tasks) =>
    //   this.convertToArrayOfObject(tasks, callback)
    // );
    var docRef = db.collection("users");
    let arr = [];
    docRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        arr.push({ key: doc.id, text: doc.data().text });
      });
      callback(arr);
    });
  },
  save(tasks) {
    // AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
    return db
      .collection("users")
      .add(tasks)
      .then(docRef => {
        return docRef.id;
      });
  },
  delete(index) {
    db.collection("users")
      .doc(index)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    paddingTop: 20
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: ios ? 1 : 1,
    width: "100%"
  }
});

AppRegistry.registerComponent("TodoList", () => TodoList);
