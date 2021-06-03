import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyAED3gxz9k-8W4elVY3S5568htXyQlBFbI",
  authDomain: "buddies-hang-out.firebaseapp.com",
  projectId: "buddies-hang-out",
  storageBucket: "buddies-hang-out.appspot.com",
  messagingSenderId: "757986133674",
  appId: "1:757986133674:web:57d15680dcf140c5ec72d3",
});
// .auth();
