import {  createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// REPLACE ENTIRE CONFIG WITH UR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "YOUR_KEY",
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
      toast.success('User created successfully', {
        pauseOnHover: false,
        position: "top-center"
      });
  })
  .catch((error) => {
      console.log(error);
      console.log(error.code);  
      console.log(error.message);
      console.log(error.value);
      
      toast.error(error.code, {
        pauseOnHover: false,
        position: "top-center"
      });
  });
  }


  const getUser = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {

      toast.success('User logged in successfully', {
        pauseOnHover: false,
        position: "top-center"
      });
        // Signed in 
    })
    .catch((error) => {
        console.log(error);
        console.log(error.code);  
        console.log(error.message)  
        toast.error(error.code, {
          pauseOnHover: false,
          position: "top-center"
        });
    });
}

  const signInWithGoogle = () => {
    signInWithPopup(auth,googleProvider).then(() => {
          toast.success('User logged in successfully', {
            pauseOnHover: false,
            position: "top-center"
          });
      }).catch((error) => { 
        toast.error(error.code, {
          pauseOnHover: false,
          position: "top-center"
        });
      }
    );
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
    <ToastContainer/>
    </FirebaseContext.Provider>
  );
}




