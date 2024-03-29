"use client";
import * as Yup from "yup";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { MdLock } from "react-icons/md";
import Head from "next/head";
import React, { useState, useEffect } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [eyeSlash, setEyeSlash] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("Email: ", email);
  }, [email]);

  useEffect(() => {
    console.log("Password: ", password);
    if (!password) {
      setEye(false);
      setEyeSlash(false);
      setShow(false);
    } else {
      setEye(true);
    }
  }, [password]);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleEyeChange = () => {
    setShow(!show);
    setEye(!eye);
    setEyeSlash(!eyeSlash);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    validationSchema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        const values = { email, password };
        // Handle form submission logic here
        console.log(values);
      })
      .catch((validationErrors) => {
        // Validation failed
        if (validationErrors instanceof Yup.ValidationError) {
          const errors = {};

          validationErrors.inner.forEach((error) => {
            errors[error.path] = error.message;
          });

          console.log("Validation failed with errors:", errors);
          alert(Object.values(errors)[0]);
        } else {
          // Handle non-validation errors
          console.error("Non-validation error occurred:", validationErrors);
        }
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Log In Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-700">Company</span>Name
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-700 mb-2">
                Sign In to Your Account
              </h2>
              <div className="border-2 w-10 border-green-700 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
              </div>
              {/*Social Sign-In*/}
              <p className="text-gray-400 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLock className="text-gray-400 m-2" />
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    value={password}
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1 w-1/2"
                    onChange={handlePasswordChange}
                  />
                  <FaEye
                    className="text-gray-400 text-xs m-2"
                    style={{
                      visibility: eye ? "visible" : "hidden",
                      display: eye ? "initial" : "none",
                    }}
                    onClick={handleEyeChange}
                  />
                  <FaEyeSlash
                    className="text-gray-400 text-xs m-2"
                    style={{
                      visibility: eyeSlash ? "visible" : "hidden",
                      display: eyeSlash ? "initial" : "none",
                    }}
                    onClick={handleEyeChange}
                  />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex item-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember me
                  </label>
                  <a href="#" className="text-xs hover:text-green-700">
                    Forgot password
                  </a>
                </div>
                <a
                  href="#"
                  className="border-2 border-green-700 text-green-700 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-700 hover:text-white"
                  onClick={handleSubmit}
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
          {/*Sign-in*/}

          <div className="w-2/5 bg-green-700 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2"> No Account Yet?</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up information and start journey with us.
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-700"
            >
              Sign Up
            </a>
          </div>
          {/*Sign-up */}
        </div>
      </main>
    </div>
  );
}
