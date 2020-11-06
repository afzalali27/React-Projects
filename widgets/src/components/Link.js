import React from "react";

const Link = ({ className, href, children }) => {
  const gotoUrl = (event) => {
    event.preventDefault();
    // now we have a path to navigate
    // console.log("url changed");
    window.history.pushState({}, "", href);
    // url is updated but nothing else , we also need to update page

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={gotoUrl} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
