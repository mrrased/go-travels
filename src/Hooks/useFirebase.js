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

    const SignWithGoogle = (email, password, name) =>{

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUser = {email, displayName:name}
            setUser(newUser);
            middleFunc(email, name, 'POST');
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    };


    const SignInWithPassword = (email, password) =>{

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });

    }

    const middleFunc = (email, displayName, method) =>{

        const users = {email, displayName};
        
        fetch('http://localhost:5000/users',{
            method: method,
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(users)
        }).then()

    }

    return {
        user,
        err,
        googleSignIn,
        SignWithGoogle,
        SignInWithPassword

    }
};

export default useFirebase;