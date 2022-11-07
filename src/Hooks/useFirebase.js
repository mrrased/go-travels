import  { useState } from 'react';
import AuthenticationInitialize from '../Firebase/Firebase.Init';
import { GoogleAuthProvider , getAuth, signInWithPopup, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";



AuthenticationInitialize();



const useFirebase = () => {

    const [user, setUser] = useState({});
    const [err, setErr] = useState({});

    const auth = getAuth();

    const googleSignIn = () =>{

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {

            setUser(result.user)
            console.log(user);
            // ...
        }).catch((error) => {
            // Handle Errors here. error.message;
            setErr(error.message)
            // ...
        });
    };

    const googleSignUp = (email, password, name) =>{

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const newUser = {email, displayName:name}

            setUser(newUser)
        })
        .catch((error) => {
            const errorMessage = error.message;

            console.log(errorMessage);
            // ..
        });
    };


    const SignInWithPassword = (email, password) =>{

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...

            console.log(user)
        })
        .catch((error) => {

            const errorMessage = error.message;
            console.log(errorMessage);
        });

    }

    return {
        user,
        err,
        googleSignIn,
        googleSignUp,
        SignInWithPassword

    }
};

export default useFirebase;