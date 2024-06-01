
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGQQDHEWsvJLrRJldl4wGCJmGxMr7qdA8",
  authDomain: "assignment12-ce3b6.firebaseapp.com",
  projectId: "assignment12-ce3b6",
  storageBucket: "assignment12-ce3b6.appspot.com",
  messagingSenderId: "186336362259",
  appId: "1:186336362259:web:79c8b3e207043154f464e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;
