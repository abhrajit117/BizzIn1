// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOZrPVbBTZyaKA-PpC1cVXqPoER0PEB6s",
  authDomain: "bizzin-e9c32.firebaseapp.com",
  projectId: "bizzin-e9c32",
  storageBucket: "bizzin-e9c32.appspot.com",
  messagingSenderId: "422078794451",
  appId: "1:422078794451:web:ceaca5183b4e5418e7e226",
  measurementId: "G-CYZLQ3TSVL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*
The code you provided appears to be initializing an instance of Firebase in a JavaScript application using the Firebase SDK.

Here's a breakdown of what's happening:

firebaseConfig is an object that contains the configuration information needed to connect to a Firebase project. This includes things like the project ID, API key, and authentication settings.

initializeApp() is a method provided by the Firebase SDK that creates a new Firebase app instance using the provided configuration information. This method returns the initialized app instance.

The initialized app instance is assigned to the app variable using the const keyword. This means that app cannot be reassigned to a different value later in the code.
*/
const analytics = getAnalytics(app);

export const auth = getAuth(app);
/*
The code you provided initializes the Authentication service of Firebase by calling the getAuth() method and passing in the app object as a parameter. This creates a reference to the Authentication service and allows you to interact with it using the auth variable.
*/
export const provider = new GoogleAuthProvider();
