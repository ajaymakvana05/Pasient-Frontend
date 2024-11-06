import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [firstName, setFirstName] = useState(localStorage.getItem("firstName") || "");

  return (
    <UserContext.Provider value={{ firstName, setFirstName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
