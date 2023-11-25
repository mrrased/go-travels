import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import img1 from "../../../Images/login.png";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import img2 from "../../../Images/Google-logo.png";
import { Toaster } from "react-hot-toast";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loaction = useLocation();

  const { googleSignIn, SignInWithPassword, user } = useAuth();

  console.log(user);

  const SignWithGooglePassword = (e) => {
    e.preventDefault();
    SignInWithPassword(email, password, loaction, navigate);
  };

  useEffect(() => {
    if (user.accessToken) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <Container maxWidth="lg">
      <Toaster />
      <div className="h-screen flex items-center justify-center">
        <div className="flex max-w-xlg bg-blue-50 p-5 drop-shadow-md">
          <div>
            <h1 onClick={() => navigate("/")} className="cursor-pointer">
              <KeyboardBackspaceIcon />
            </h1>
          </div>
          <div>
            <img className="hidden sm:block mx-auto" src={img1} alt="" />
          </div>
          <div className="flex items-center">
            <form onSubmit={SignWithGooglePassword}>
              <h4 className="mb-2 font-medium text-lg">Login Account</h4>
              <input
                type="email"
                name=""
                placeholder="Email"
                className="w-60 sm:w-80 h-10 bg-gray-200 p-2 focus:outline-none focus:ring-1 transition duration-1000 focus:transition focus:duration-1000"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />

              <input
                type="password"
                name=""
                placeholder="Password"
                className="w-60 sm:w-80 h-10 bg-gray-200 p-2 focus:outline-none focus:ring-1 transition duration-1000 focus:transition focus:duration-1000"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />

              <button
                type="submit"
                className="text-center bg-[#bbcfff] w-60 sm:w-80 h-10 tracking-widest"
              >
                Login
              </button>
              <h4 className="mt-[12px] font-normal text-xs">
                New account create ?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="hover:underline text-pink-blue cursor-pointer"
                >
                  Register
                </span>
              </h4>
              <div className="flex justify-center mt-4">
                <h5 onClick={() => googleSignIn()} className="cursor-pointer">
                  <img src={img2} className="h-6 w-6" alt="" />
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
