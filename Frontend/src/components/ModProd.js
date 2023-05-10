import React, { Component } from "react";
import { Boton } from '../elementos/MiniForm';
import '../css/Stock.css';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

class ModificarProducto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      producto: props.producto,
      codprod: props.producto.codprod,
      nombre: props.producto.producto,
      marca: props.producto.marca
    };
    this.updateProducto = this.updateProducto.bind(this);
  }

  componentDidMount(){
  
    this.updateProducto();
   
  }

  updateProducto = async () => {
    await axios
      .put('http://127.0.0.1:8000/api/putProductos/'+this.props.producto.codprod, {
        'producto':this.props.producto.producto,
        'codcat':this.props.producto.codcat,
        'desc':this.props.producto.desc,
        'precio':this.props.producto.precio,
        'marca':this.props.producto.marca,
        'image':this.props.producto.image,
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

  handleCodProdChange = (event) => {
    this.setState({ codprod: event.target.value });
  };

  handleNombreChange = (event) => {
    this.setState({ nombre: event.target.value });
  };

  handleMarcaChange = (event) => {
    this.setState({ marca: event.target.value });
  };

  render() {
    const { isClose } = this.props;

    return (
      <div className="modal">
        <div className="modal-content">
          <Modal.Header closeButton onClick={isClose}>
            <h4 className="modal-title">Modificar Producto</h4>
          </Modal.Header>
          <form action="" onSubmit={this.handleSubmit} className="formulario">
            <div className="form-group">
              <label htmlFor="codprod">Código de Producto:</label>
              <input
                type="text"
                className="form-control"
                id="codprod"
                name="codprod"
                value={this.state.codprod}
                onChange={this.handleCodProdChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={this.state.nombre}
                onChange={this.handleNombreChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="marca">Marca:</label>
              <input
                type="text"
                className="form-control"
                id="marca"
                name="marca"
                value={this.state.marca}
                onChange={this.handleMarcaChange}
              />
            </div>



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

export default ModificarProducto;