import React from "react";
import "./Modal.css";

export default function Modal({ handleClose, show, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="button" type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}
