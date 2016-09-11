import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDmqsfVyAB0rmYpms3YczKsrFPrYTXuyes",
    authDomain: "reactapp-a97ee.firebaseapp.com",
    databaseURL: "https://reactapp-a97ee.firebaseio.com",
    storageBucket: "reactapp-a97ee.appspot.com",
};

const firebaseApp = firebase.initializeApp(config);
const usersRef = firebaseApp.database().ref("users");
const messagesRef = firebaseApp.database().ref("users");

export {firebaseApp, usersRef, messagesRef, createUser, createMessage, updateUsers}

function createUser (name, location, story, image, badges, insurance, problems) {
	usersRef.child(name).set({
      username: name,
      location: location,
      insurance: insurance,
      problems: problems,
      story: story,
      badges: 0,
      profile_picture : image
    });
}

function createMessage (message, to, From) {
	messages.push({
      message: message,
      to: To,//userName
      from: From//userName
    });
}

function updateUsers (insurance, location, problems) {
  console.log('not working?')
 //store.loc, ins, ect
 return new Promise ((res, rej) => {
     usersRef.on('value', (snap) => {
       //   // get children as an array
           var users = [];
           snap.forEach((child) => {
              if(insurance === child.val().insurance && location === child.val().location && problems === child.val().problems){
                users.push({
                  username: child.val().username,
                  location: child.val().location,
                  insurance: child.val().insurance,
                  problems: child.val().problems,
                  story: child.val().story,
                  badges: 0,
                  profile_picture : image
               });
              }
               
           });
           res(users)
     }, function (err) {
       rej(err)
     });
 });
}