// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4uqcO99dlkSNHqi0HQZr2Adh3NFxOYR8",
  authDomain: "uiux-courseenquiryform.firebaseapp.com",
  databaseURL: "https://uiux-courseenquiryform-default-rtdb.firebaseio.com",
  projectId: "uiux-courseenquiryform",
  storageBucket: "uiux-courseenquiryform.appspot.com",
  messagingSenderId: "332629674053",
  appId: "1:332629674053:web:002d0f769df1deb8373b2c",
  measurementId: "G-B17EZ6MNRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);