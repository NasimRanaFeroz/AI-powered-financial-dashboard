import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Firebase config object - use your own Firebase config here
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Sign-In Function
// const googleSignIn = async () => {
//   const provider = new GoogleAuthProvider();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     console.log("result" + result);
//     const user = result.user;
//     console.log("user" + user);
//     return user;
//   } catch (error) {
//     console.error("Error signing in with Google:", error.message);
//     return null;
//   }
// };

// export { auth, googleSignIn };
export { auth};
