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

export {firebaseApp, getUsersByLocation, getAllUsers, usersRef, messagesRef, createUser, createMessage}

function createUser (name, location, story, image, badges) {
	usersRef.child(name).set({
      username: name,
      location: location,
      story: story,
      badges: 0,
      profile_picture : image
    });
}
//(arr, str) => promise(arr)
function getUsersByLocation (users, state) {
  return new Promise ((res, rej) => {
    usersRef.on('value', (snap) => {
      var users = [];
      snap.forEach((child) => {
          if (child.val().location === state) {
            users.push({
              name: child.val().name,
              location: child.val().name,
              _key: child.key
            });
          }
      });
      res(users);
    });
  });
}

function getAllUsers () {
  return new Promise ((res, rej) => {
      usersRef.on('value', (snap) => {
        //   // get children as an array
            var users = [];
            snap.forEach((child) => {
                users.push({
                  name: child.val().name,
                  location: child.val().name,
                  _key: child.key
                });
            });
            res(users)
      }, function (err) {
        rej(err)
      });
  });
}

function getUsersByLocation() {

}

//(username, arr)
function updateIssues (user, issues) {
  //issues.forEach(get issue add issue to user)
}

function createMessage (message, to, From) {
	messages.push({
      message: message,
      to: to,//userName
      from: From//userName
    });
}