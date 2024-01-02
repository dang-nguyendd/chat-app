import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaEnvelope,
} from "react-icons/fa";
import { MdLock } from "react-icons/md";
import Head from "next/head";

export default function Home() {
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
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLock className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
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
