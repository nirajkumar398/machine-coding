// src/Modal.js
import React from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <i
          class="fa-solid fa-xmark text-2xl close-button"
          onClick={onClose}
        ></i>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
