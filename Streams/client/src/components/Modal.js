import React from "react";
import ReactDOM from "react-dom";

const Modal = () => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        T His is modal with some random text
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
