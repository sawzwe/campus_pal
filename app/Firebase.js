import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRSmbUXkbmqkhReAiZY2xzDHCHHm8C4NI",
  authDomain: "tutorplus-auth-demo.firebaseapp.com",
  projectId: "tutorplus-auth-demo",
  storageBucket: "tutorplus-auth-demo.appspot.com",
  messagingSenderId: "585010021756",
  appId: "1:585010021756:web:2acc1a47acd59b2ec550f9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // get information on who is authenticated


setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Persistence is set to local, auth state will persist across sessions
  })
  .catch((error) => {
    console.error("Firebase auth persistence error:", error);
  });


const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (setIsLoggedIn) => {
  // automatically show popup and ask for sign-in credentials
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      const uid = result.user.uid;
    })
    .catch((error) => {
      console.log(error);
    });
};
