import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ShowNavbarProps {
  children: React.ReactNode;
}

const ShowNavbar: React.FC<ShowNavbarProps> = ({ children }) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
};

export default ShowNavbar;
