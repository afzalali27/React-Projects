import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  // console.log("options inside dropdown", options);
  const [open, setOpen] = useState(false);
  const ref = useRef();
  // if click anywhere outside the dropdown then close it
  // useEffect(() => {
  //   const onBodyClick = (event) => {
  //     //   console.log("buble up to body");
  //     //   setOpen(false);

  //     if (ref.current.contains(event.target)) return;
  //     setOpen(false);
  //   };
  //   document.body.addEventListener("click", onBodyClick);
  //   // cleanup function in case dropdown removed then don't call it
  //   return () => {
  //     document.body.removeEventListener("click", onBodyClick);
  //   };
  // }, []);
  const optionList = options.map((option) => {
    // console.log("current option", option);
    if (option.value === selected.value) return null;
    return (
      <div
        className="item"
        key={option.value}
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    //   store ref for event listner
    <div ref={ref} className="ui form container">
      <div className="field">{label}</div>
      <div
        className={`ui selection dropdown ${open ? "visible active" : ""}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <i className="dropdown icon"></i>
        <div className="text">{selected.label}</div>
        <div className={`menu ${open ? "visible transition" : ""}`}>
          {optionList}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
