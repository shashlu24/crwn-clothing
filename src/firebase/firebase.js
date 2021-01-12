import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDcPL4nqpfSwA8KIIJhfD6k8NUSOnVWlH8",
  authDomain: "crwn-db-4455a.firebaseapp.com",
  projectId: "crwn-db-4455a",
  storageBucket: "crwn-db-4455a.appspot.com",
  messagingSenderId: "620900873804",
  appId: "1:620900873804:web:06de876579e8889d2c66e9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
