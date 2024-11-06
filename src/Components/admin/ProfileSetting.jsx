import React, { useState } from "react";
import ProfileSidebar from "../ProfileSidebar";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const ProfileSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <ProfileSidebar />
      <Profile />
      <Outlet />
    </div>
  );
};

export default ProfileSettings;
