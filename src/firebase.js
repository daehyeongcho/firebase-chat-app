import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUl67dq7yhfyEOJB3UznAKHRlJE9h0jac",
  authDomain: "fir-chat-app-d1d94.firebaseapp.com",
  projectId: "fir-chat-app-d1d94",
  storageBucket: "fir-chat-app-d1d94.appspot.com",
  messagingSenderId: "32014597065",
  appId: "1:32014597065:web:477d66461d3d9e91070618",
  measurementId: "G-6FNTXTQYSH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default firebase;
