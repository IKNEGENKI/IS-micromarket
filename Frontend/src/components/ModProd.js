import React, { Component } from "react";
import { Boton } from '../elementos/MiniForm';
import '../css/Stock.css';
import '../css/modPro.css';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

class ModificarProducto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      producto: props.producto,
      codprod: props.producto.codprod,
      nombre: props.producto.producto,
      id:this.props.producto.codprod,
      precio: props.producto.precio,
      marca: props.producto.marca,
      desc: props.producto.desc,
      nombreValido: null,
      precioValido: null,
      marcaValido: null,
      descValido: null,
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
    if (this.state.nombreValido &&
        this.state.precioValido &&
        this.state.marcaValido &&
        this.state.descValido
      ) { 
        await this.updateProducto();
        this.props.isClose();
        window.location.reload()
      }
  }

  handleNombreChange = (event) => {
    const valor = event.target.value;
    const nombreValidoExp = /^[a-zA-Z]{1,2}([a-zA-ZÀ-ÿ0-9\s]{1,28})$/;
    const esValido = nombreValidoExp.test(valor);
    this.setState({nombre: valor, nombreValido: esValido});
  };
  
  handlePrecioChange = (event) => {
    const valor = event.target.value;
    const precioValidoExp = /^(?!0(\.0{1,2})?$)(0|[1-9][0-9]{0,3})(\.[0-9]{1,2})?$/; 
    const esValido = precioValidoExp.test(valor);
    this.setState({precio: valor, precioValido: esValido});
  };
  
  handleMarcaChange = (event) => {
    const valor = event.target.value;
    const marcaValidoExp = /^[a-zA-Z]{1,2}([a-zA-Z0-9\s]{1,13})$/; 
    const esValido = marcaValidoExp.test(valor);
    this.setState({marca: valor, marcaValido: esValido});
  };

  handleDescChange = (event) => {
    const valor = event.target.value;
    const descValidoExp = /^[a-zA-Z]{1,2}([a-zA-Z0-9-|_|!|#|%|(|)|,|.\s]{9,98})$/; 
    const esValido = descValidoExp.test(valor);
    this.setState({desc: valor, descValido: esValido});
  };

  render() {
    const { isClose } = this.props;
    const { nombreValido } = this.state; 
    const { precioValido } = this.state; 
    const { marcaValido } = this.state; 
    const { descValido } = this.state; 

    return (
      <div className="modal">
        <div className="modal-content">
          <Modal.Header closeButton onClick={isClose}>
            <h4 className="modal-title">Modificar Producto</h4>
          </Modal.Header>
          <form action="" onSubmit={this.handleSubmit} className="formulario">
            <div className="form-group">
              <label htmlFor="nombre">Nombre*:</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={this.state.nombre}
                onChange={this.handleNombreChange}
              />
              {/* Mostrar mensaje de error si el nombre no es válido */}
              {nombreValido === false && <p className="mensaje-error">El nombre debe contener de 2 a 20 caracteres entre números, letras y espacios.</p>}
            </div>

            <div className="form-group">
              <label htmlFor="desc">Descripción*:</label>
              <input
                type="text"
                className="form-control"
                id="desc"
                name="desc"
                value={this.state.desc}
                onChange={this.handleDescChange}
              />
              {/* Mostrar mensaje de error si el nombre no es válido */}
              {descValido === false && <p className="mensaje-error">La descripción debe ser de 10 a 100 caracteres, y contener letras, números y caracteres especiales como ser: _ - ! % ().</p>}
            </div>

            <div className="form-group">
              <label htmlFor="precio">Precio*:</label>
              <input
                type="text"
                className="form-control"
                id="precio"
                name="precio"
                value={this.state.precio}
                onChange={this.handlePrecioChange}
              />
              {/* Mostrar mensaje de error si el nombre no es válido */}
              {precioValido === false && <p className="mensaje-error">El precio solo puede contener números enteros o si se quiere ingresar un número decimal se puede poner un carácter especial (.) y dos decimales.</p>}
            </div>

            <div className="form-group">
              <label htmlFor="marca">Marca*:</label>
              <input
                type="text"
                className="form-control"
                id="marca"
                name="marca"
                value={this.state.marca}
                onChange={this.handleMarcaChange}
              />
              {/* Mostrar mensaje de error si el nombre no es válido */}
              {marcaValido === false && <p className="mensaje-error">La marca solo debe tener caracteres numéricos y letras, y entre 2 a 15 caracteres.</p>}
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