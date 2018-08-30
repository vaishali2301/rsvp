import firebase from "react-native-firebase";
import { firebaseApp } from "./config";
var db = firebaseApp.firestore();
db.settings({ timestampsInSnapshots: true });

const firebaseMethods = {
  save: username => {
    console.log(username, firebase.auth().currentUser);
    var user = firebase.auth().currentUser;
    return user.updateProfile({
      displayName: username
    });
  }
};

export const Tasks = {
  all(callback) {
    var docRef = db.collection("groups");
    let arr = [];
    docRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        arr.push({ key: doc.id, text: doc.data().name });
      });
      callback(arr);
    });
  },
  save(tasks, users) {
    console.log(tasks);
    return db
      .collection("groups")
      .add({ name: tasks })
      .then(docRef => {
        docRef.update({ users });
        return docRef.id;
      });
  },
  delete(index) {
    db.collection("groups")
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

export const Events = {
  all(groupname, callback) {
    var docRef = db.collection("groups").doc(groupname);
    let arr = [];
    docRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        arr.push({ key: doc.id, text: doc.data().name });
      });
      callback(arr);
    });
  },
  save(groupname, tasks) {
    console.log(tasks);
    var userId = firebase.auth().currentUser.uid;
    var userUp = {};
    userUp[`events.${event}`] = { attending: {}, notattending: {} };
    return db
      .collection("groups")
      .doc(groupname)
      .update(userUp)
      .then(docRef => {
        return docRef.id;
      });
  },
  respond(groupname, event, type) {
    console.log(event, type);
    //type attending or notattending
    var userId = firebase.auth().currentUser.uid;
    var userUp = {};
    userUp[`events.${event}.${type}.${userId}`] = true;
    return db
      .collection("groups")
      .doc(groupname)
      .update(userUp)
      .then(docRef => {
        //
      });
  },
  delete(index) {
    db.collection("groups")
      .doc("groupA")
      .collection("events")
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

export default firebaseMethods;
