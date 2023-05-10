import React, { Component,useState } from "react";
import { Boton} from '../elementos/MiniForm';
import '../css/Stock.css';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import {AiOutlineLine } from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
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
   increment = () =>{
    
    this.setState({cantidad:this.state.cantidad+1});
  }

   decrement = () => {
    if (this.state.cantidad > 0) {
      this.setState({cantidad:this.state.cantidad-1});
    }
  }
   handleCantidadChange = (event) => {
   
    this.setState({cantidad: parseInt(event.target.value)});
  };
  render(){
    const { isClose, producto } = this.props;
   
  return (
    <div >
    <div className="stocki">
      <div className="modal-content">
      <Modal.Header >
         
          <h4 className="modal-title" >{producto.producto}</h4>
          
        </Modal.Header>
        <form action="" onSubmit={this.handleSubmit} className="formulario">

        <label htmlFor="cantidad actual">Cantidad actual:     {this.state.stockActual}</label>
          
          <br></br>
          <label htmlFor="cantidad"className="agregar">Agregar Cantidad: </label>
          <div className="d-flex justify-content-center align-items-center">
          <a onClick={this.decrement}><AiOutlineLine/></a>
          <br></br>
          <input
            type="number"
            className="form-control"
            id="cantidad"
            name="cantidad"
            min="1"
            max="999"
            required
            value={this.state.cantidad}
            onChange={this.handleCantidadChange}
          />
          <br></br>
          <a onClick={this.increment}><AiOutlinePlus/></a>
          </div>
        

           

          <div className="button-container" id="botones">
            <br></br>
            
              <Boton id="guardarP" type="submit">Guardar</Boton>
              <Boton id="borrarP" type="button" onClick={isClose} className="btn mx-5">Cancelar</Boton>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
  }
}

export default Stock;
