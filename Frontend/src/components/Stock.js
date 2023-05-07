import React, { useState } from "react";
import { Boton} from '../elementos/MiniForm';
import '../css/Stock.css';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
function Stock({ isClose, producto}) {
  const [cantidad, setCantidad] = useState(1);
   
   
   
  const handleSubmit = async (event) => {
    event.preventDefault();
    producto.stock += cantidad;
    isClose();
    await producto.save();
    
  }
  const handleCantidadChange = (event) => {
    setCantidad(parseInt(event.target.value));
  };

  return (
    <div className="modal">
      <div className="modal-content">
      <Modal.Header closeButton onClick={isClose}>
          <h4 className="modal-title">{producto.producto}</h4>
        </Modal.Header>
        <form action="" onSubmit={handleSubmit} className="formulario">
        <label htmlFor="cantidad actual">Cantidad actual:     {producto.stock}</label>
          <label htmlFor="cantidad">Agregar Cantidad: </label>
          <input
            type="number"
            className="form-control"
            id="cantidad"
            name="cantidad"
            min="1"
            max="999"
            required
            value={cantidad}
            onChange={handleCantidadChange}
          />
        

           

          <div className="button-container">
              <Boton id="guardarP" type="submit">Guardar</Boton>
              <Boton id="borrarP" type="button" onClick={isClose} className="btn mx-5">Cancelar</Boton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Stock;
