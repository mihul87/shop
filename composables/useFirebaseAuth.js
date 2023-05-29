import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection, doc, addDoc, updateDoc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
// const db = getFirestore();
// const clothesRef = collection(db, "clothes");
// const usersRef = collection(db, "users")
// const storage = getStorage();


export const signUp = async (user) => {
  const { $auth, $firestore } = useNuxtApp()
  await createUserWithEmailAndPassword($auth, user.email, user.password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  const {uid, email} = $auth.currentUser;

    const newUser = {
      // id: uid,
      // email: email,
      fname: user.fname,
      lname: user.lname,
      userType: "buyer",
      cartList: []
    }
    // because function works only in blaze plan of firebase
    await setDoc(doc($firestore, "users", uid), newUser);
    // await addDoc(userRef, newUser);
    // Set the user locally
    const userData = {
      ...newUser,
      id: uid,
      email: email
    }
  return userData;
};

export const signIn = async (user) => {
  const auth = getAuth();
  const userData = await signInWithEmailAndPassword(auth, user.email, user.password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  return userData.user;
};

export const initUser = async () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Auth changed:", user);
    } else {
      // User is signed out
      console.log("Auth changed:", user);
    }
  });
};

export const signOut = async () => {
    const auth = getAuth();
    const credentials = await auth.signOut();
    return credentials;
}