import  { useEffect, useState } from 'react';
import AuthenticationInitialize from '../Firebase/Firebase.Init';
import { GoogleAuthProvider , getAuth, signInWithPopup, createUserWithEmailAndPassword , signInWithEmailAndPassword , sendEmailVerification, onAuthStateChanged, signOut } from "firebase/auth";
import { addToDb } from './DatabaseManager';
import { toast } from 'react-hot-toast';



AuthenticationInitialize();



const useFirebase = () => {

    const [user, setUser] = useState({});
    const [err, setErr] = useState({});
    const [submittedMail, setSubmittedMail] = useState(0);
    const [isLoading , setIsLoading] = useState(false);

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
            
            if(userCredential?.user?.emailVerified === false){
                toast('Varify mail');
                setSubmittedMail(1);
                sendVarifyEmail();

            }
            if(userCredential?.user?.emailVerified){
                toast.success('verify mail');

                // middleFunc(email, name, 'POST');
                // setUser(newUser);
            }
            // const users = []
            // const newUser = userCredential?.user?.displayName
            // newUser.displayName = name;
            // users = [...newUser, userCredential.user]

            // console.log('working',users);
            // console.log(userCredential)
        })
        .catch((error) => {
            const errorMessage = (error.message).split(' ')[2].split('/')[1].split(')')[0]
            toast.error(errorMessage);
        });
    };


    const SignInWithPassword = (email, password, location, navigate) =>{

        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password )
        .then((userCredential) => {
            setUser(userCredential.user)
            const destination = location?.state?.from?.pathname || '/';
            navigate(destination, {replace: true})
        })
        .catch((error) => {
            const errorMessage = (error.message).split(' ')[2].split('/')[1].split(')')[0]
            toast.error(errorMessage);
            
        })
        .finally(()=> setIsLoading(false));

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

    // Email verification sent!
    const sendVarifyEmail = () =>{

        sendEmailVerification(auth.currentUser)

        .then(() => {
            // Email verification sent!
            // ...
        });

    }

    // Get the currently signed-in user
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

    // Sign-out user
    const logOutUser = () =>{
        signOut(auth).then(() => {
            // Sign-out
          }).catch((error) => {
            // An error
          });
    }
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