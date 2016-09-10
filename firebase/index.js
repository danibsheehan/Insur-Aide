import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDmqsfVyAB0rmYpms3YczKsrFPrYTXuyes",
    authDomain: "reactapp-a97ee.firebaseapp.com",
    databaseURL: "https://reactapp-a97ee.firebaseio.com",
    storageBucket: "reactapp-a97ee.appspot.com",
};

const firebaseApp = firebase.initializeApp(config);
const usersRef = firebaseApp.database().ref("users");

export {firebaseApp, createUser}

function createUser (name, description, location, story, image, badges) {
	usersRef.child('sam').set({
      username: "taffy",
      location: "here",
      story: "was born",
      badges: 0,
      profile_picture : "none"
    });
}

function createMessage (message, to, from) {

}