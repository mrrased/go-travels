import  { useEffect, useState } from 'react';
import AuthenticationInitialize from '../Firebase/Firebase.Init';
import { GoogleAuthProvider , getAuth, signInWithPopup, createUserWithEmailAndPassword , signInWithEmailAndPassword , sendEmailVerification, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

import { toast } from 'react-hot-toast';
import useToken from './useToken';
import { AddToTokenDb, clearTheTokenCart } from './DatabaseManager';



AuthenticationInitialize();



const useFirebase = () => {

    const [user, setUser] = useState({});
    const [err, setErr] = useState({});
    const [submittedMail, setSubmittedMail] = useState(0);
    const [isLoading , setIsLoading] = useState(false);
    const [createdUserEmail, setCreatedUserEmail] = useState('');

    const [token] = useToken(createdUserEmail)

    const auth = getAuth();


    // google signIn area start
    const googleSignIn = () =>{

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {

            if(result?.user?.emailVerified === true){
                
                const displayName = result?.user?.displayName;
                const email = result?.user?.email;

                middleFunc(email, displayName, 'POST');
                setUser(result.user);
            }
        }).catch((error) => {
            // Handle Errors here. error.message;
            setErr(error.message)
            // ...
        });
    };
    // google signIn area end



    //create user email and password area start
    const SignWithGoogle = (email, password, name) =>{

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            if(userCredential?.user?.emailVerified === false){
                toast('Varify mail');
                updateProfile(auth.currentUser, {
                    displayName:name
                }).then(() => {
                    
                    middleFunc(email, name, 'POST');
                    sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // Email verification sent!
                        setUser(user);
                        setSubmittedMail(1);
                    })
                }).catch((error) => {
                        // An error occurred
                })
            }
        })
        .catch((error) => {
            const errorMessage = (error.message).split(' ')[2].split('/')[1].split(')')[0]
            toast.error(errorMessage);
        });
    };
    //create user email and password area end


    // user login area start
    const SignInWithPassword = (email, password, location, navigate) =>{

        setIsLoading(true);
        
        signInWithEmailAndPassword(auth, email, password )
        .then((userCredential) => {

            setCreatedUserEmail(email);
            setUser(userCredential.user);

            const destination = location?.state?.from?.pathname || '/';

                if(token){
                    AddToTokenDb(token);
                    navigate(destination, {replace: true})
                }
        })
        .catch((error) => {
            const errorMessage = (error.message).split(' ')[2].split('/')[1].split(')')[0]
            toast.error(errorMessage);
            
        })
        .finally(()=> setIsLoading(false));

    }
    // user login area end



    // saved users info from server area start
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
        .then()
    }
    // saved users info from server area end


    // Get the currently signed-in user area start
    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return ()=> unSubscribe;

    },[auth]);
    // Get the currently signed-in user area end


    // user Sign-out area start 
    const logOutUser = () =>{

        signOut(auth).then(() => {

            clearTheTokenCart();

        }).catch((error) => {
          });
    }
    // user sign-out area end

    return {
        user,
        err,
        googleSignIn,
        SignWithGoogle,
        SignInWithPassword,
        submittedMail,
        isLoading,
        logOutUser

    }
};

export default useFirebase;