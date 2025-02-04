
import React, { useState } from "react";
import image from "/public/image.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import SignupwithEmail from "./SignupwithEmail";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleprovider } from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [signup, setsignup] = useState(false);

  const navigate = useNavigate();

  const GoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleprovider);
      auth?.currentUser !== null && navigate("/main");
      auth?.currentUser !== null && toast.success("LoggedIn Successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const LoginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      auth?.currentUser !== null && navigate("/main");
      auth?.currentUser !== null && toast.success("LoggedIn Successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div
        className="flex items-center justify-center h-screen"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "cover",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-white w-full max-w-[90%] lg:max-w-[60%] xl:max-w-[50%] h-auto lg:h-5/6 rounded-sm p-5 lg:p-10">
          <h1 className="text-4xl lg:text-5xl text-red-700 font-serif text-center font-semibold">
            Quora
          </h1>
          <h1 className="text-sm lg:text-xl font-semibold text-center mt-2 lg:mt-4">
            A place to share knowledge and better understand the world
          </h1>

          <div className="lg:flex p-4 lg:justify-between lg:gap-5">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 mt-5 lg:mt-10">
              <h1 className="text-sm text-zinc-500 text-center lg:text-left">
                By continuing you indicate that you agree to Quora’s{" "}
                <span className="text-blue-400">Terms of Service</span> and{" "}
                <span className="text-blue-400">Privacy Policy</span>.
              </h1>

              <div className="flex flex-col items-center lg:items-start gap-3 mt-5">
                <button
                  onClick={GoogleSignup}
                  className="flex items-center justify-center w-full lg:w-auto h-12 border border-gray-300 px-4 gap-3 hover:bg-gray-100 rounded-lg"
                >
                  <FcGoogle size={25} />
                  Continue With Google
                </button>
                <button className="flex items-center justify-center w-full lg:w-auto h-12 border border-gray-300 px-4 gap-3 hover:bg-gray-100 rounded-lg">
                  <FaFacebook size={25} className="text-blue-600" />
                  Continue With Facebook
                </button>
                <button
                  onClick={() => setsignup(true)}
                  className="text-gray-800 font-semibold hover:bg-gray-200 hover:rounded-full w-full h-7 transition duration-200 mt-3"
                >
                  Sign up with Email
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <h1 className="text-lg lg:text-xl">Login</h1>
              <hr className="mt-3" />

              <div className="mt-4">
                <h1 className="font-bold">Email</h1>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  type="text"
                  className="w-full h-12 border mt-2 border-gray-300 outline-blue-300 p-2 rounded-lg"
                  placeholder="Your Email"
                />
              </div>

              <div className="mt-4">
                <h1 className="font-bold">Password</h1>
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  className="w-full h-12 border mt-2 border-gray-300 outline-blue-300 p-2 rounded-lg"
                  placeholder="Your Password"
                />
              </div>

              <div className="mt-7 flex flex-col-reverse lg:flex-row justify-between gap-3 lg:gap-0">
                <h1 className="text-gray-500 text-sm">Forgot password?</h1>
                <button
                  onClick={LoginWithEmail}
                  className="bg-blue-500 rounded-full w-full lg:w-20 h-10 text-white font-semibold hover:bg-blue-600"
                >
                  Login
                </button>
              </div>
            </div>
          </div>

          <hr className="mt-5" />
          <p className="mt-5 text-center text-gray-600 text-xs lg:text-sm">
            About. Careers. Privacy. Terms. Contact. Languages. Your Ad Choices.
            Press©. Quora, Inc. 2025
          </p>
        </div>
        {signup && <SignupwithEmail setsignup={setsignup} />}
      </div>
    </>
  );
};

export default Signup;
