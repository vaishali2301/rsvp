import firebase from "react-native-firebase";
import { firebaseApp } from "./Config";
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
    var user = firebase.auth().currentUser;
    var docRef = db
      .collection("groups")
      .where("users", "array-contains", user.phoneNumber);
    let arr = [];
    docRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        arr.push({
          key: doc.id,
          text: doc.data().name,
          events: doc.data().events
        });
      });
      callback(arr);
    });
  },
  save(tasks, users) {
    var user = firebase.auth().currentUser.phoneNumber;
    users.push(user);
    console.log(tasks);
    return db
      .collection("groups")
      .add({ name: tasks })
      .then(docRef => {
        docRef.update({ users });
        return docRef.id;
      });
  },
  delete(groupName) {
    return db.collection("groups")
      .where("name", "==", groupName)
      .get()
      .then(snaphots => {
          snaphots.forEach(snapshot => {
          db.collection("groups")
            .doc(snapshot.id)
            .delete();
          });
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  },
  search(groupName, callback){
    var user = firebase.auth().currentUser;
    var docRef = db
      .collection("groups")
      .where("users", "array-contains", user.phoneNumber)
      let arr = [];
    docRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        if (doc.data().name && doc.data().name.indexOf(groupName) > -1) {
          arr.push({
            key: doc.id,
            text: doc.data().name,
            events: doc.data().events
          });
        }
      });
      callback(arr);
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
        arr.push({
          key: doc.id,
          text: doc.data().name,
          events: doc.data().events
        });
      });
      callback(arr);
    });
  },
  save(groupname, event) {
    console.log(event);
    var user = firebase.auth().currentUser;
    var userUp = {};
    userUp[`events.${event}`] = { attending: {}, notattending: {} };
    return db
      .collection("groups")
      .where("name", "==", groupname)
      .where("users", "array-contains", user.phoneNumber)
      .get()
      .then(snaphots => {
        snaphots.forEach(snapshot => {
          db.collection("groups")
            .doc(snapshot.id)
            .update(userUp);
        });
      });
  },
  respond(groupname, event, type) {
    console.log(event, type);
    var userId = firebase.auth().currentUser.uid;
    var userUp = {};
    userUp[`events.${event}.${type}.${userId}`] = true;
    return db
      .collection("groups")
      .where("name", "==", groupname)
      .get()
      .then(snaphots => {
        snaphots.forEach(snapshot => {
          db.collection("groups")
            .doc(snapshot.id)
            .update(userUp);
        });
      });
  },
  delete(groupName, eventName) {
    console.log(groupName, eventName);
    var userUp = {};
    userUp[`events.${eventName}`] = firebase.firestore.FieldValue.delete();
    return db
      .collection("groups")
      .where("name", "==", groupName)
      .get()
      .then(snaphots => {
        snaphots.forEach(snapshot => {
          let events = snapshot.data().events;
          delete events[eventName];
          // console.log(events);
          if (events) {
            db.collection("groups")
              .doc(snapshot.id)
              .update({ events: events });
          }
        });
      });
  }
};

export default firebaseMethods;
