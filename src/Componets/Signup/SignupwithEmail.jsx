import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase/Firebase";

const SignupwithEmail = ({ setsignup }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signupwithemail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      {/* Modal Container */}
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
          {/* Modal Content */}
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full sm:max-w-lg p-6">
            <div className="bg-white">
              {/* Close Button */}
              <div className="flex justify-between items-center">
                <h1
                  onClick={() => setsignup(false)}
                  className="text-2xl mb-5 cursor-pointer"
                >
                  X
                </h1>
                <h1 className="text-2xl font-semibold">Sign Up</h1>
              </div>

              {/* Email Input */}
              <div className="w-full mt-5">
                <label className="text-lg font-bold block mb-1">Email</label>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  type="text"
                  placeholder="Your Email"
                  className="w-full h-12 outline-blue-500 p-3 border border-gray-200 rounded"
                />
              </div>

              {/* Password Input */}
              <div className="w-full mt-4">
                <label className="text-lg font-bold block mb-1">Password</label>
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  placeholder="Your password"
                  className="w-full h-12 outline-blue-500 p-3 border border-gray-200 rounded"
                />
              </div>
            </div>

            {/* Footer */}
            <hr className="mt-6 text-gray-600" />
            <div className="flex justify-center mt-4">
              <button
                onClick={signupwithemail}
                className="rounded-full h-10 px-8 bg-blue-500 text-white hover:bg-blue-600"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupwithEmail;
