import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDRmHcs8Q90Ppg2PtfuZlBCIleG7UWqIk0",
  authDomain: "catch-of-the-day-lj.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-lj.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
