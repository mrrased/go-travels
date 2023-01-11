import  { useState } from 'react';
import AuthenticationInitialize from '../Firebase/Firebase.Init';
import { GoogleAuthProvider , getAuth, signInWithPopup, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { addToDb } from './DatabaseManager';



AuthenticationInitialize();



const useFirebase = () => {

    const [user, setUser] = useState({});
    const [err, setErr] = useState({});

    const auth = getAuth();

    // 
    const googleSignIn = () =>{

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {

            if(result?.user?.emailVerified === true){
                
                const displayName = result?.user?.displayName;
                const email = result?.user?.email;

                middleFunc(email, displayName, 'POST');
                setUser(result.user);
                console.log(user);
            }
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

    // saved users info from server
    const middleFunc = (email, displayName, method) =>{

        const users = {email, displayName};
        
        fetch('http://localhost:5000/users',{
            method: method,
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.acknowledged === true){
                addToDb(data.insertedId)
            }
        })


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