import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const Fetch = {
  apiKey: "AIzaSyCXeB8lYr93er2DoRyu5KHp2JIPDBRI7vY",
  authDomain: "resume-cad75.firebaseapp.com",
  projectId: "resume-cad75",
  storageBucket: "resume-cad75.appspot.com",
  messagingSenderId: "77150378234",
  appId: "1:77150378234:web:f14d382a922d3fe116d143",
};

// Initialize Firebase
const app = initializeApp(Fetch);
const storage = getStorage(app);

export { storage };
