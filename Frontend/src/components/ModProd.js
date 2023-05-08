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
      nombre: props.producto.producto,
      marca: props.producto.marca,
      id:this.props.producto.codprod,
      precio: props.producto.precio,
      codcat: props.producto.codcat,
      desc: props.producto.desc,
    };
    this.updateProducto = this.updateProducto.bind(this);
    this.categorias = {
      "1": "Abarrotes",
      "2": "Bebidas",
      "3": "Bebidas alcoholicas",
      "4": "Cuidado personal",
      "5": "Enlatados",
      "6": "Farmacos",
      "7": "Fiambres y embutidos",
      "8": "Golosinas",
      "9": "Limpieza del hogar",
      "10": "Lacteos",
      "11": "Panaderia",
      "12": "Snacks",
      "13": "Varios"
    };
  }

  componentDidMount(){
  
    this.updateProducto();
   
  }

  updateProducto = async () => {
    await axios
      .put('http://127.0.0.1:8000/api/putProductos/'+this.props.producto.codprod, {
      'producto':this.state.nombre,
      'marca':this.state.marca,
      'desc':this.state.desc,
      'precio':this.state.precio,
      'image':this.props.producto.image,
      'codcat':this.props.producto.codcat,
      'stock': this.props.producto.stock
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

  handleNombreChange = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z]{1,2}([a-zA-ZÀ-ÿ0-9\s]{1,18})$/.test(value) || value === '') {
      this.setState({ nombre: value });
    }
  };
  

  handleMarcaChange = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z]{1,2}([a-zA-Z0-9\s]{1,13})$/.test(value) || value === '') {
      this.setState({ marca: value });
    }
  };
  

  handlePrecioChange = (event) => {
    const value = event.target.value;
    if (/^(?!0(\.0{1,2})?$)(0|[1-9][0-9]{0,3})(\.[0-9]{1,2})?$/.test(value) || value === '') {
      this.setState({ precio: value });
    }
  };
  

  handleDescChange = (event) => {
    const value = event.target.value;
    if (/^[a-zA-Z0-9-|_|!|#|%|(|)|,|.\s]{10,100}$/.test(value) || value === '') {
      this.setState({ desc: value });
    }
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
          <label htmlFor="codprod">Código:     {this.state.id}</label>
          </div>

          <div className="form-group">
          <label htmlFor="codcat">Categoría: {this.categorias[this.state.codcat]}</label>
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
              <label htmlFor="desc">Descripcion:</label>
              <input
                type="text"
                className="form-control"
                id="desc"
                name="desc"
                value={this.state.desc}
                onChange={this.handleDescChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="precio">Precio:</label>
              <input
                type="text"
                className="form-control"
                id="precio"
                name="precio"
                value={this.state.precio}
                onChange={this.handlePrecioChange}
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