import {  createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,GithubAuthProvider, onAuthStateChanged } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBLD0OoGbW9TfJ0SdyyIoSDiIv3Ek8n5VE",
  authDomain: "fir-c1d13.firebaseapp.com",
  projectId: "fir-c1d13",
  storageBucket: "fir-c1d13.appspot.com",
  messagingSenderId: "278102741081",
  appId: "1:278102741081:web:dc843e11d32e1738182148"
};


export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseContext = createContext(null);

export  const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      // Signed in 
      console.log('user created')
  })
  .catch((error) => {
      console.log(error);
      console.log(error.code);  
      console.log(error.message);
      
      
  });
  }


  const getUser = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {

      console.log('user logged in')
        // Signed in 
    })
    .catch((error) => {
        console.log(error);
        console.log(error.code);  
        console.log(error.message)  

    });
}

  const signInWithGoogle = () => {
    signInWithPopup(auth,googleProvider).then(() => {

      })
  }

  const signupGithub = () => {
    signInWithPopup(auth,githubProvider).then(() => {

     })
  }

  const checkAuth = ()  => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return user;
      } else {
        return null;
      }
    });
  }


  return (
    <FirebaseContext.Provider value={{createUser, getUser , signInWithGoogle, signupGithub, checkAuth}}>
      {props.children}

    </FirebaseContext.Provider>
  );
}




