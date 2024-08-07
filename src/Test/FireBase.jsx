import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const FireBase = {
  apiKey: "AIzaSyCKuCBfQ5--4tIeXW6TO06tQmpiE2SwGyw",
  authDomain: "login-326c5.firebaseapp.com",
  projectId: "login-326c5",
  storageBucket: "login-326c5.appspot.com",
  messagingSenderId: "432271413649",
  appId: "1:432271413649:web:12217df500ec3915538a30"
};

// Initialize Firebase
const app = initializeApp(FireBase);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);
    // Store user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      profilePicture: user.photoURL,
    });
  } catch (error) {
    console.error("Google sign-in error:", error);
  }
};

const signUpWithEmailPassword = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password,name);
    const user = userCredential.user;
    console.log(user);
    // Store user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: user.email,
      
    });
  } catch (error) {
    console.error("Sign up error:", error);
  }
};

const signInWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    console.error("Sign in error:", error);
  }
};

export { signInWithGoogle, signUpWithEmailPassword, signInWithEmailPassword };
