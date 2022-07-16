import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD7njyB1URjqk2SEAJPeOXHRzbhpcSK9g4",
  authDomain: "vuetify-chat-c97ba.firebaseapp.com",
  projectId: "vuetify-chat-c97ba",
  storageBucket: "vuetify-chat-c97ba.appspot.com",
  messagingSenderId: "150450869755",
  appId: "1:150450869755:web:b88be258cec6b79b16675e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};