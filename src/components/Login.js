import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";

function Login() {
  const GoogleProvider = new firebase.auth.GoogleAuthProvider();
  const GoogleSignIn = () => {
    firebase.auth().signInWithPopup(GoogleProvider);
  };

  const FacebookProvider = new firebase.auth.FacebookAuthProvider();
  const FacebookSignIn = () => {
    firebase.auth().signInWithPopup(FacebookProvider);
  };

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Buddies hang out</h2>

        <div
          className="login-button-google"
          onClick={GoogleSignIn}
          // onClick={() =>
          //   firebase
          //     .auth()
          //     .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          // }
        >
          <GoogleOutlined /> Sign in with Google
        </div>
        <br />

        <div
          className="login-button-facebook"
          onClick={FacebookSignIn}
          // onClick={() => {
          //   firebase
          //     .auth()
          //     .signInWithRedirect(new firebase.auth.FacebookAuthProvider());
          // }}
        >
          <FacebookOutlined /> Sign in with facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
