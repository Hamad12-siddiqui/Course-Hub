"use client";

import Image from "next/image";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

export const Login_from = ({ isLogin, setIsLogin }) => {
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full h-[500px] max-w-5xl my-10 bg-white rounded-md shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 bg-[#F2F2F2]">
          <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-[#E2E1E1]">
            {isLogin ? "SIGN IN" : "SIGN UP"}
          </h2>

          <form className="space-y-4">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full bg-white shadow p-3 rounded"
                />
                <input
                  type="text"
                  placeholder="Phone *"
                  className="w-full bg-white shadow p-3 rounded"
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email *"
              className="w-full bg-white shadow p-3 rounded"
            />
            <input
              type="password"
              placeholder="Password *"
              className="w-full bg-white shadow p-3 rounded"
            />

            {isLogin && (
              <div className="flex justify-between items-center text-sm pt-2">
                <a href="#" className="text-red-500 hover:underline font-medium">
                  Forgot Password?
                </a>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-purple-600" />
                  <span className="text-gray-700">Remember me</span>
                </label>
              </div>
            )}
          </form>

          {/* Submit Button */}
          <div className="w-full  flex flex-wrap justify-center gap-3 md:gap-0  md:justify-between items-center mt-6">
            <div className="bg-[#704FE6] text-white rounded-3xl flex items-center w-fit">
              <button type="submit" className="px-4 py-2 text-sm md:text-base">
                {isLogin ? "Sign In" : "Sign Up"}
              </button>
              <div className="bg-[#785DD7] flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-full">
                <GoArrowRight />
              </div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <div className="text-gray-500 text-sm">
                or {isLogin ? "sign in" : "sign up"} with
              </div>
              <div className="flex gap-3">
                <FaGithub className="text-xl cursor-pointer hover:text-black" />
                <FaGoogle className="text-xl cursor-pointer hover:text-red-600" />
                <FaFacebookF className="text-xl cursor-pointer hover:text-blue-600" />
              </div>
            </div>
          </div>

          {/* Toggle Between Forms */}
          <div className="text-center text-sm mt-4">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <button onClick={toggleForm} className="text-blue-600 font-semibold">
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button onClick={toggleForm} className="text-blue-600 font-semibold">
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src="/images/signup.svg"
            alt="Sign up illustration"
            width={600}
            height={400}
            className="object-cover h-[500px] w-full"
          />
        </div>
      </div>
    </div>
  );
};
