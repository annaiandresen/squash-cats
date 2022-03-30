// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCPD2MRJ61T_x6WqszZzMRUoClfVloDuKg',
  authDomain: 'squash-cats.firebaseapp.com',
  projectId: 'squash-cats',
  storageBucket: 'squash-cats.appspot.com',
  messagingSenderId: '423768730094',
  appId: '1:423768730094:web:9e25e65fb7a4ad0d4e86ff',
  measurementId: 'G-21PLFCVBH8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default db;
