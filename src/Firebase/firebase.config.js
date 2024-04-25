// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_SENDERID,
  appId: import.meta.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// const firebaseConfig = {
//   apiKey: "AIzaSyCt7g0ErS68rcJNTqhiLYtBCWbsuHBnKoM",
//   authDomain: "journey-junction-ca237.firebaseapp.com",
//   projectId: "journey-junction-ca237",
//   storageBucket: "journey-junction-ca237.appspot.com",
//   messagingSenderId: "424651402032",
//   appId: "1:424651402032:web:268f4e116747eb465a36f5"
// };