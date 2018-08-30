var group = [
  { groupname: "GeekyAnts Spammers" },
  { groupname: "GeekyAnts" },
  { groupname: "Family Group" },
  { groupname: "College Group" },
  { groupname: "School Group" }
];

var events = [
  {
    type: "Birthday",
    eventname: "event1"
  },
  {
    type: "Anniversary",
    eventname: "Anniversary on Wednesday, 22nd August,2018 5pm at McDonald's"
  },
  {
    type: "Reunion",
    eventname: "Office party on Wednesday, 22nd August,2018 1pm at Sheraton"
  },
  {
    type: "Farewell",
    eventname: "Farewell Party on Wednesday, 22nd August,2018 5pm at Innov8"
  },
  {
    type: "Birthday",
    eventname: "Birthday on Wednesday, 22nd August,2018 5pm at McDonald's"
  }
];
var user = {
  username: "Vaishali",
  uid: "1234"
};

const database = {
  group: group,
  events: events,
  user: user
};
export default database;
