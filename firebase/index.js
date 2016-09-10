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

export {firebaseApp, usersRef, messagesRef, createUser, createMessage}

function createUser (name, location, story, image, badges) {
	usersRef.child(name).set({
      username: name,
      location: location,
      story: story,
      badges: 0,
      profile_picture : image
    });
}

function createMessage (message, to, From) {
	messages.push({
      message: message,
      to: to,//userName
      from: From//userName
    });
}