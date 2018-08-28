// import React, { Component } from "react";
// import { Calendar, CalendarList, LocaleConfig } from "react-native-calendars";
// import {
//   View,
//   Modal,
//   Alert,
//   Text,
//   TouchableHighlight,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput
// } from "react-native";
// import { Picker } from "react-native";
// import DateTimePicker from "react-native-modal-datetime-picker";

// let themesObject = {
//   christmas: {
//     text: "CHRISTMAS PARTY!!",
//     imageUri:
//       "https://hutchinsonbear.com/wp-content/uploads/2017/12/christmas-quotes-images.jpg",
//     subtext: "Jingle all the way!"
//   },
//   birthday: {
//     text: "BIRTHDAY PARTY!!",
//     imageUri:
//       "https://img.freepik.com/free-vector/birthday-cake-background-with-garland_23-2147647466.jpg?size=338&ext=jpg",
//     subtext: "Vaibhav's 5th Birthday!"
//   },
//   anniversary: {
//     text: "ANNIVERSARY PARTY!!",
//     imageUri:
//       "https://img.ohmymag.co.uk/article/480/gifts/wedding_6a75b1ba32a7a0c673bc11d8ac93290b2dc288ad.jpg",
//     subtext: "Mehta's 10th Anniversary!"
//   },
//   wedding: {
//     text: "WEDDING!!!!",
//     imageUri:
//       "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F06%2Fmain%2Fwedding_cake_champagne_glasses-157613128.jpg%3Fitok%3DPGwvWp7S&w=700&q=85",
//     subtext: "Brad weds Angelina!"
//   },
//   babyshower: {
//     text: "BABY SHOWER!!",
//     imageUri:
//       "https://image.freepik.com/free-vector/watercolor-baby-shower-card-with-footprints_1174-18.jpg",
//     subtext: "Annie's Baby Shower!"
//   },
//   reunion: {
//     text: "REUNION PARTY!!",
//     imageUri:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dVvqe3Own4pXV9yXuxIclyedKQWiXb2r7A1cQ9lwUDi5kh2p",
//     subtext: "Class of 2014!"
//   },
//   newyear: {
//     text: "NEW YEAR PARTY!",
//     imageUri:
//       "https://image.freepik.com/free-vector/happy-new-year-background-with-golden-confetti_1048-4402.jpg",
//     subtext: "Let us Celebrate!"
//   },
//   valentine: {
//     text: "VALENTINE'S DAY PARTY!!",
//     imageUri: "https://images.indianexpress.com/2018/02/vtine_759_ts11.jpg",
//     subtext: "Let us Celebrate!"
//   }
// };
// LocaleConfig.locales["fr"] = {
//   monthNames: [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
//   ],
//   monthNamesShort: [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec"
//   ],
//   dayNames: [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   ],
//   dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// };

// LocaleConfig.defaultLocale = "fr";
// export default class Calen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalVisible: false,
//       isDateTimePickerVisible: false,
//       day: null,
//       party: ""
//     };
//   }

//   toggleModal(visible) {
//     this.setState({ modalVisible: visible });
//   }
//   _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

//   _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
//   _handleDatePicked = date => {
//     console.log("A date has been picked: ", date);
//     this._hideDateTimePicker();
//   };
//   render() {
//     state = {
//       party: ""
//     };
//     console.log(this.state);
//     return (
//       <View>
//         <CalendarList
//           onVisibleMonthsChange={months => {
//             // Callback which gets executed when visible months change in scroll view. Default = undefined
//             console.log("now these months are visible", months);
//           }}
//           pastScrollRange={
//             50 // Max amount of months allowed to scroll to the past. Default = 50
//           }
//           futureScrollRange={
//             50 // Max amount of months allowed to scroll to the future. Default = 50
//           }
//           scrollEnabled={
//             true // Enable or disable scrolling of calendar list
//           }
//           showScrollIndicator={
//             true // Enable or disable vertical scroll indicator. Default = false
//           }
//           onDayPress={day => {
//             this.toggleModal(!this.state.modalVisible);
//             console.log("selected day", day);
//             this.setState({ day: day.dateString });

//             //Alert.alert(day.dateString, "hi");
//           }}
//         />
//         <Modal
//           animationType={"slide"}
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             console.log("Modal has been closed.");
//           }}
//         >
//           <View style={styles.modal}>
//             {<Text style={styles.heading}>Confirm event details!{"\n"}</Text>}
//             <Text>Your event date is: {this.state.day}</Text>
//             <View style={{ flex: 1, height: 50, width: 200 }}>
//               <Picker
//                 selectedValue={this.state.party}
//                 onValueChange={(itemValue, itemIndex) =>
//                   this.setState({
//                     party: itemValue
//                   })
//                 }
//               >
//                 <Picker.Item label="Birthday" value="birthday" />
//                 <Picker.Item label="Anniversary" value="anniversary" />
//                 <Picker.Item label="Wedding" value="wedding" />
//                 <Picker.Item label="BabyShower" value="babyshower" />
//                 <Picker.Item label="ClassReunion" value="classreunion" />
//                 <Picker.Item label="NewYearParty" value="newyear" />
//                 <Picker.Item label="ChristmasParty" value="christmas" />
//                 <Picker.Item label="ValentinesDay" value="valentine" />
//               </Picker>
//             </View>
//             <TextInput
//               style={styles.TextInput}
//               placeholder="Enter event name"
//             />
//             <TouchableOpacity onPress={this._showDateTimePicker}>
//               <Text style={styles.text}>Pick Event Time</Text>
//             </TouchableOpacity>
//             <DateTimePicker
//               mode="time"
//               isVisible={this.state.isDateTimePickerVisible}
//               onConfirm={this._handleDatePicked}
//               onCancel={this._hideDateTimePicker}
//             />

//             <TouchableHighlight
//               onPress={() => {
//                 this.toggleModal(!this.state.modalVisible);
//               }}
//             >
//               <Text style={styles.text}>Submit Event</Text>
//             </TouchableHighlight>
//           </View>
//         </Modal>

//         <TouchableHighlight
//           onPress={() => {
//             this.toggleModal(true);
//           }}
//         >
//           <Text style={styles.text}>Open Modal</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     padding: 100
//   },
//   modal: {
//     flex: 1,
//     alignItems: "center",
//     backgroundColor: "#f0fff0",
//     padding: 20
//   },
//   text: {
//     color: "black",
//     marginTop: 50,
//     borderColor: "black",
//     borderWidth: 2,
//     fontSize: 15,
//     fontFamily: "Courier-Oblique",
//     alignItems: "center"
//   },
//   TextInput: {
//     height: 40,
//     paddingRight: 10,
//     paddingLeft: 10,
//     borderColor: "black",
//     borderWidth: 2,
//     width: "100%",
//     marginTop: 10
//   },
//   heading: {
//     fontFamily: "Cochin",
//     fontSize: 20,
//     fontWeight: "bold"
//   }
// });
