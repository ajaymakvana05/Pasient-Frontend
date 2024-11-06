import React from "react";
import ProfileSidebar from "./profileSidebar";

const ProfileSetting = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        {/* <div
          className="bac p-8 h-[296px]"
          style={{
            background:
              "linear-gradient(107.38deg, #4C49ED 2.61%, #020067 101.2%)",
          }}
        >
          <h2 className="font-medium text-2xl text-white">Profile Setting</h2>
        </div> */}

        <div className="bg-white flex relative mb-8 mx-8 mt-[-144px] z-30  shadow-lg rounded-lg">
          <div class="w-full max-w-[300px] border-r-[3px] border-r-gray-300/30">
            <ProfileSidebar />
          </div>
          <div className="flex-1 bg-rose-800">
            {/* <Routes>
              <Route path="/profile" element={<Profile />} />
            </Routes> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSetting;
