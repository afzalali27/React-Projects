import React, { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = (event) => {
      if (event.mateKey || event.ctrlKey) return;
      console.log("location change");
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    // clean up function
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};

export default Route;
