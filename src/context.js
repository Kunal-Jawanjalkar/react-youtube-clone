import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidenavOpen, setisSidenavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState({
    home: true,
    trending: false,
    subscriptions: false,
  });

  function toggleSidenav() {
    setisSidenavOpen(!isSidenavOpen);
  }

  return (
    <AppContext.Provider
      value={{ toggleSidenav, isSidenavOpen, activeLink, setActiveLink }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
