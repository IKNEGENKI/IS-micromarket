import React from "react";
import { Modal } from "react-bootstrap";
import "../css/Carrito.css";

function Carrito({ onClose }) {
  return (
    <div className = "carrito-overlay">
      <div className="carrito-container">
        <Modal.Header closeButton onClick={onClose} className="modal-header">
          <h4 className="modal-title">Carrito</h4>
        </Modal.Header>
        <form></form>
      </div>
    </div>
  );
}

export default Carrito;