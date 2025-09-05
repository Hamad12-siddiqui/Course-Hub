"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Registration_from = () => {
  const [showModal, setShowModal] = useState(false);
  const route = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // yahan API call ya backend ko data bhejna hoga
    setShowModal(true); // modal open
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase">
          Instructor Registration
        </h1>
        <p className="text-gray-600 text-sm mt-2">Fields With * Are Required</p>
        <p className="text-gray-500 text-xs mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* FORM */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Credentials */}
          <h2 className="text-lg font-semibold text-gray-700">Credentials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email *"
              className="w-full border p-3 rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Password (Min 8 Characters) *"
              className="w-full border p-3 rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password *"
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          {/* Profile Information */}
          <h2 className="text-lg font-semibold text-gray-700">
            Profile Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name *"
              className="w-full border p-3 rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="w-full border p-3 rounded-lg"
              required
            />
            <input
              type="date"
              placeholder="Birth Date *"
              className="w-full border p-3 rounded-lg"
              required
            />
            <select className="w-full border p-3 rounded-lg">
              <option>Select an option *</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              placeholder="Nationality *"
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Place of Birth"
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address 1 *"
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address 2"
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Country *"
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="City *"
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Postal Code *"
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Phone *"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Education */}
          <h2 className="text-lg font-semibold text-gray-700">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Highest Degree *"
              className="w-full border p-3 rounded-lg"
            />
            <select className="w-full border p-3 rounded-lg">
              <option>Select your major *</option>
              <option>Computer Science</option>
              <option>Mathematics</option>
              <option>Engineering</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              placeholder="Institute Name *"
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Degree Result"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Upload Section */}
          <div>
            <label className="block text-gray-700 mb-2">Upload CV *</label>
            <input
              type="file"
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            Fields with * are required
          </h3>

          {/* Footer Text */}
          <p className="text-gray-500 text-xs mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
            >
              Submit Now
            </button>
            <button
              onClick={() => route.back()}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              🎉 Thank You!
            </h2>
            <p className="text-gray-700 mb-6">
              Thanks for submitting your details. Our instructor will contact
              you soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration_from;
