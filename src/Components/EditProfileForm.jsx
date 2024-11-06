import React from "react";

const EditProfileForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Edit Profile</h2>
        </div>
        <form>
          <div className="grid grid-cols-3 gap-6">
            {/* First Name */}
            <div className="relative">
              <input
                className="peer w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:border-blue-500 focus:outline-none transition duration-200"
                type="text"
                id="first-name"
                placeholder=" "
                required
              />
              <label
                htmlFor="first-name"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:scale-75"
              >
                First Name
              </label>
            </div>

            {/* Last Name */}
            <div className="relative">
              <input
                className="peer w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:border-blue-500 focus:outline-none transition duration-200"
                type="text"
                id="last-name"
                placeholder=" "
                required
              />
              <label
                htmlFor="last-name"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:scale-75"
              >
                Last Name
              </label>
            </div>

            {/* Email Address */}
            <div className="relative">
              <input
                className="peer w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:border-blue-500 focus:outline-none transition duration-200"
                type="email"
                id="email"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:scale-75"
              >
                Email Address
              </label>
            </div>

            {/* Phone Number */}
            <div className="relative">
              <input
                className="peer w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:border-blue-500 focus:outline-none transition duration-200"
                type="text"
                id="phone"
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:scale-75"
              >
                Phone Number
              </label>
            </div>

            {/* Hospital Name */}
            <div className="relative">
              <input
                className="peer w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:border-blue-500 focus:outline-none transition duration-200"
                type="text"
                id="hospital-name"
                placeholder=" "
                required
              />
              <label
                htmlFor="hospital-name"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:scale-75"
              >
                Hospital Name
              </label>
            </div>

            {/* Gender */}
            <div className="relative">
              <input
                className="peer w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:border-blue-500 focus:outline-none transition duration-200"
                type="text"
                id="gender"
                placeholder=" "
                required
              />
              <label
                htmlFor="gender"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:scale-75"
              >
                Gender
              </label>
            </div>

            {/* City */}
            <div className="relative">
              <input
                className="peer w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:border-blue-500 focus:outline-none transition duration-200"
                type="text"
                id="city"
                placeholder=" "
                required
              />
              <label
                htmlFor="city"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:scale-75"
              >
                City
              </label>
            </div>

            {/* State */}
            <div className="relative">
              <input
                className="peer w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:border-blue-500 focus:outline-none transition duration-200"
                type="text"
                id="state"
                placeholder=" "
                required
              />
              <label
                htmlFor="state"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:scale-75"
              >
                State
              </label>
            </div>

            {/* Country */}
            <div className="relative">
              <input
                className="peer w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:border-blue-500 focus:outline-none transition duration-200"
                type="text"
                id="country"
                placeholder=" "
                required
              />
              <label
                htmlFor="country"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:scale-75"
              >
                Country
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end mt-8 space-x-4">
            <button className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400 transition duration-200">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue text-white rounded-md hover:bg-blue-700 transition duration-200">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
