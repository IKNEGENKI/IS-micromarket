import React, { Component,useState } from "react";
import { Boton} from '../elementos/MiniForm';
import '../css/Stock.css';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
class Stock extends Component{
  constructor(props){
    super(props);
    this.state={
        stockActual:this.props.producto.stock,
        cantidad:0,
        id:this.props.producto.codprod,
       
    }
    this.updateProducto = this.updateProducto.bind(this);
    
}
componentDidMount(){
  
  this.updateProducto();
 
}
updateProducto = async () => {
  await axios
    .put('http://127.0.0.1:8000/api/putProductos/'+this.props.producto.codprod, {
      'producto':this.props.producto.producto,
      'marca':this.props.producto.marca,
      'desc':this.props.producto.desc,
      'precio':this.props.producto.precio,
      'image':this.props.producto.image,
      'codcat':this.props.producto.codcat,
      'stock': this.props.producto.stock + this.state.cantidad,
      
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
   handleSubmit = async (event) => {
    event.preventDefault();
    
    await this.updateProducto();
    this.props.isClose();
    window.location.reload()
  }
   handleCantidadChange = (event) => {
   
    this.setState({cantidad: parseInt(event.target.value)});
  };
  render(){
    const { isClose, producto } = this.props;
   
  return (
    <div className="modal">
      <div className="modal-content">
      <Modal.Header closeButton onClick={isClose}>
          <h4 className="modal-title">{producto.producto}</h4>
        </Modal.Header>
        <form action="" onSubmit={this.handleSubmit} className="formulario">
        <label htmlFor="cantidad actual">Cantidad actual:     {this.state.stockActual}</label>
          <br></br>
          <label htmlFor="cantidad">Agregar Cantidad: </label>
          <input
            type="number"
            className="form-control"
            id="cantidad"
            name="cantidad"
            min="1"
            max="999"
            required
            value={this.cantidad}
            onChange={this.handleCantidadChange}
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
}

export default Stock;
