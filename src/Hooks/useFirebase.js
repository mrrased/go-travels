import { useEffect, useState } from "react";
import AuthenticationInitialize from "../Firebase/Firebase.Init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

import { toast } from "react-hot-toast";
// import useToken from "./useToken";
import { AddToTokenDb, clearTheTokenCart } from "./DatabaseManager";
import { useNavigate } from "react-router-dom";
// import { useQuery } from '@tanstack/react-query';

AuthenticationInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [err, setErr] = useState({});
  const [submittedMail, setSubmittedMail] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  // const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [isRole, setIsRole] = useState(false);
  const [isRoleLoading, setIsRoleLoading] = useState(true);
  const [accessPower, setAccessPower] = useState("");
  const [userMail, setUserMail] = useState("");
  const [open, setOpen] = useState(false);
  const [serchData, setSearchData] = useState({});
  const [showFormData, setShowFormData] = useState(false);
  const [showToData, setShowToData] = useState(false);
  // const [goolePopupRes, setGooglePopupRes] = useState({});

  // const [ token ] = useToken(createdUserEmail)

  const auth = getAuth();

  // console.log(token);
  // google signIn area start
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log("check popup");
        if (result?.user?.emailVerified === true) {
          const displayName = result?.user?.displayName;
          const email = result?.user?.email;

          middleFunc(email, displayName, "POST");
          setUser(result.user);
          // setGooglePopupRes(result.user);
        }
      })
      .catch((error) => {
        // Handle Errors here. error.message;
        setErr(error.message);
        // ...
      });
  };
  // google signIn area end

  //create user email and password area start
  const SignWithGoogle = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential?.user?.emailVerified === false) {
          toast("Varify mail");
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              middleFunc(email, name, "POST");
              sendEmailVerification(auth.currentUser).then(() => {
                // Email verification sent!
                setUser(user);
                setSubmittedMail(1);
              });
            })
            .catch((error) => {
              // An error occurred
            });
        }
      })
      .catch((error) => {
        const errorMessage = error.message
          .split(" ")[2]
          .split("/")[1]
          .split(")")[0];
        toast.error(errorMessage);
      });
  };
  //create user email and password area end

  // user login area start
  const SignInWithPassword = (email, password, location, navigate) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // setCreatedUserEmail(email);
        const destination = location?.state?.from?.pathname || "/";
        setUser(userCredential.user);
        fetch(`https://go-travel-server-tau.vercel.app/jwt?email=${email}`)
          .then((res) => res.json())
          .then((data) => {
            if (data?.accessToken) {
              AddToTokenDb(data?.accessToken);
              navigate(destination, { replace: true });
            }
          });
        // setCreatedUserEmail(email);
      })
      .catch((error) => {
        const errorMessage = error.message
          .split(" ")[2]
          .split("/")[1]
          .split(")")[0];
        toast.error(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };
  // user login area end

  // saved users info from server area start
  const middleFunc = (email, displayName, method) => {
    const users = { email, displayName };

    fetch("https://go-travel-server-tau.vercel.app/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then();
  };
  // saved users info from server area end

  // Get the currently signed-in user area start
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unSubscribe;
  }, [auth]);
  // Get the currently signed-in user area end

  // user Sign-out area start
  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        clearTheTokenCart();
      })
      .catch((error) => {});
  };
  // user sign-out area end

  // admin
  useEffect(() => {
    setIsRoleLoading(true);

    fetch(`https://go-travel-server-tau.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsRole(data?.isRole);
        setAccessPower(data?.role);
        // setUser(user);
        // console.log( 'user isrole', user )
        // console.log(data)
      })
      .finally(() => {
        setIsRoleLoading(false);
        if (user?.email) {
          setIsLoading(false);
        }
      });
  }, [user?.email]);

  // const accessRole = ( email ) =>{

  //     const localtoken = localStorage.getItem('t_id').split('"')[1];

  //     fetch('http://localhost:5000/users/role',{

  //         method: 'PUT',
  //         headers:{
  //             'authorization': `bearer ${localtoken}`,
  //             'content-type' : 'application/json'
  //         },
  //         body: JSON.stringify(email)
  //     })
  //     .then(res => res.json())
  //     .then(data =>{
  //         toast.success('New Join Successfully');
  //     })

  // }

  // user contact message area start
  const userMessage = (message) => {
    setIsLoading(true);

    fetch("https://go-travel-server-tau.vercel.app/user/conatact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Your Message Successfull");
      })
      .finally(() => setIsLoading(false));
  };
  // user contact message area end

  // const { data: users = [] } = useQuery({
  //     queryKey: ['user'],
  //     queryFn: async() =>{
  //         const res = await fetch('http://localhost:5000/user');
  //         const data = await res.json();
  //         console.log(data);
  //         return data;
  //     }

  // })

  useEffect(() => {
    fetch("https://go-travel-server-tau.vercel.app/user/contact")
      .then((res) => res.json())
      .then((data) => setUserMail(data));
  }, []);

  return {
    user,
    err,
    googleSignIn,
    SignWithGoogle,
    SignInWithPassword,
    submittedMail,
    isLoading,
    logOutUser,
    isRole,
    isRoleLoading,
    accessPower,
    userMessage,
    userMail,
    setOpen,
    open,
    setSearchData,
    serchData,
    setShowFormData,
    showFormData,
    setShowToData,
    showToData,
  };
};

export default useFirebase;
