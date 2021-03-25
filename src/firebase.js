import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export const messagesRef = database.ref('messages');

const auth = firebase.auth();
console.log(auth);

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};

export const signInAnonymously = () => {
  auth
    .signInAnonymously()
    .then(() => {
      console.log('Signed in as anonymous.');
    })
    .catch((err) => {
      console.error(err);
    });
};
