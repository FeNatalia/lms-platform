// NPM Package
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfiguration = {
  apiKey: "AIzaSyAZ6YRR81w8YOPj8lxjp0Wx6FGTXsKNkMs",
  authDomain: "openeyeselearning.firebaseapp.com",
  projectId: "openeyeselearning",
  storageBucket: "openeyeselearning.appspot.com",
  messagingSenderId: "8423307134",
  appId: "1:8423307134:web:3f0ff3b6029fbec9b6252f",
};

export const app = initializeApp(firebaseConfiguration);
