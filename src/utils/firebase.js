import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

/**
 * This configuration is based on this particular Firebase project.
 * When forking the project, this configuration will need to be updated to match the configuration.
 */
const firebaseConfig = {
    apiKey: "AIzaSyCdgemtwIgX6tLo1tg3xdAxsxODUGxjcqY",
    authDomain: "react-firebase-playground-lsbu.firebaseapp.com",
    projectId: "react-firebase-playground-lsbu",
    storageBucket: "react-firebase-playground-lsbu.appspot.com",
    messagingSenderId: "511326437468",
    appId: "1:511326437468:web:06a2f7227d80e6ad502699"
  };

const firebaseApp = initializeApp(firebaseConfig);

const firebaseDatabase = getFirestore(firebaseApp);

export { firebaseApp, firebaseDatabase };