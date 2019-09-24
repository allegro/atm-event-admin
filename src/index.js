import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/messaging";
import firebase from "firebase/app";
import * as serviceWorker from './serviceWorker';
import App from './App';

firebase.initializeApp({
    projectId: "atm-voting",
    apiKey: "AIzaSyDwGFsr2F-ju_u162LengdX2BeGZ_Bh4Xw",
    authDomain: "firebase-adminsdk-99hyc@atm-voting.iam.gserviceaccount.com",
    storageBucket: "atm-voting.appspot.com"
});

window.firebase = firebase;

ReactDOM.render([
    <CssBaseline key="css"/>,
    <App key="app" auth={firebase.auth()} db={firebase.firestore()} storage={firebase.storage()}/>
], document.getElementById('root'));

serviceWorker.unregister();
