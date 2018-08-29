import firebase from "react-native-firebase";
import { firebaseApp } from "./config";
var db = firebaseApp.firestore();
db.settings({ timestampsInSnapshots: true });
// db.collection("users").add({
//   groupname: "GeekyAnts Spammers",
//   image:
//     "https://t4.ftcdn.net/jpg/01/18/03/33/500_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg"
// });

const firebaseMethods = {
  save: username => {
    console.log(username, firebase.auth().currentUser);
    var user = firebase.auth().currentUser;
    return user.updateProfile({
      displayName: username
    });
  }
};

// var groupRef = db
//   .collection("groups")
//   .doc("groupA")
//   .collection("events")
//   .doc("event1");

export const Tasks = {
  all(callback) {
    var docRef = db.collection("groups");
    let arr = [];
    docRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        arr.push({ key: doc.id, text: doc.data().text });
      });
      callback(arr);
    });
  },
  save(tasks) {
    console.log(tasks);
    return db
      .collection("groups")
      .add({ name: tasks })
      .then(docRef => {
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
  all(callback) {
    var docRef = db
      .collection("groups")
      .doc("groupA")
      .collection("events");
    let arr = [];
    docRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        arr.push({ key: doc.id, text: doc.data().text });
      });
      callback(arr);
    });
  },
  save(tasks) {
    console.log(tasks);
    return db
      .collection("groups")
      .doc("groupA")
      .collection("events")
      .add({ name: tasks })
      .then(docRef => {
        return docRef.id;
      });
  },
  respond(event, type) {
    console.log(event, type);
    //type attending or notattending
    var userId = firebase.auth().currentUser.uid;
    var userUp = {};
    userUp[`events.${event}.${type}.${userId}`] = true;
    return db
      .collection("groups")
      .doc("groupA")
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

// var Ref = db.collection("groups").doc("groupA");
// Ref.delete()
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//     console.error("Error adding document: ", error);
//   });

export default firebaseMethods;
