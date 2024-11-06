import React from "react";
import ProfileSidebar from "../ProfileSidebar";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex flex-col h-10">
      {/* <div
        className=" p-8 h-[296px]"
        style={{
          background:
            "linear-gradient(107.38deg, #4C49ED 2.61%, #020067 101.2%)",
        }}
      >
        <h2 className="font-medium text-2xl text-white">Profile Setting</h2>
      </div> */}
      <div className="flex ">
        <div className="w-3/4 bg-white p-6 rounded-lg shadow-md ">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Profile</h2>
            <button className="bg-blue text-white px-4 py-2 rounded-lg">
              Edit Profile
            </button>
          </div>
          <form>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="first-name"
                  required
                />
                <label
                  htmlFor="first-name"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  First Name
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="last-name"
                  required
                />
                <label
                  htmlFor="last-name"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  Last Name
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="email"
                  id="email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="phone"
                  required
                />
                <label
                  htmlFor="phone"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  Phone Number
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="hospital-name"
                  required
                />
                <label
                  htmlFor="hospital-name"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  Hospital Name
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="gender"
                  required
                />
                <label
                  htmlFor="gender"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  Gender
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="city"
                  required
                />
                <label
                  htmlFor="city"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  City
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="state"
                  required
                />
                <label
                  htmlFor="state"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  State
                </label>
              </div>

              <div className="relative">
                <input
                  className="peer w-full border rounded-lg px-4 py-2 focus:outline-none"
                  type="text"
                  id="country"
                  required
                />
                <label
                  htmlFor="country"
                  className="absolute left-3 top-2.5 text-gray-700 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-3 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2.5 peer-focus:scale-75"
                >
                  Country
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
