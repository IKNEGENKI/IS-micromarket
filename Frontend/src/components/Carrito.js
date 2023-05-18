import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import "../css/Carrito.css";
import axios from "axios";
import { Boton } from "../elementos/Formularios";
import { BsFillTrash3Fill } from "react-icons/bs";

class Carrito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      subtotal: 0,
      despacho: 0,
      descuentos: 10,
      total:0,
      id:0,

    }
    this.getProductos = this.getProductos.bind(this);
    this.aumentarsubtotal= this.aumentarsubtotal.bind(this);
    
  
  }
  componentDidMount() {
    this.getProductos();

  }

  getProductos = async () => {
    await axios.get('http://127.0.0.1:8000/api/getProductos')
      .then(res => {
        this.setState({ productos: res.data });
        console.log(res.data)
      }).catch((error) => {
        console.log(error);
      });
      this.aumentarsubtotal();
  }


  aumentarsubtotal= () =>{
    this.setState({subtotal:0});
    const { productos } = this.state;
    let subtotal = 0;
    
    productos.forEach((producto) => {
      subtotal += parseInt(producto.precio) ;
    });
  
    this.setState({ subtotal });
  }

  render() {
    const { onClose } = this.props;
    return (
      <div className="carrito-overlay">
        <div className="carrito-container">
          <Modal.Header closeButton onClick={onClose} className="modal-header">
            <h4 className="modal-title">Carrito</h4>
          </Modal.Header>
          <ModalBody className="modal-body">
          <div className="lista">
             
            {


              this.state.productos?.sort((o1, o2) => {
                if (o1.producto < o2.producto) {
                  return -1;
                } else {
                  if (o1.producto > o2.producto) {
                    return 1;
                  } else {
                    return 0;
                  }
                }
              })
                .map((product, index) => {

                  return (
                    
                    <div className="contenido " id="card">
                    
                          
                          <div className="imagen">
                            
                          <img src={product.image} />
                          </div>
                          
                          <div className="precio">
                          
                          <h2>{product.producto.length > 10 ? product.producto.slice(0, 10) + '...' : product.producto}</h2>
                          <p>Bs. {product.precio} </p>
                          <p>{this.id}</p>
                          </div>
                          <div className="basura">
                          <a ><BsFillTrash3Fill/></a>
                          </div>

                      
                    </div>

                  )




                }
                )
            }
              
            </div>
          </ModalBody>


          <ModalFooter className="modal-footer">
            <div className="costo">
            <div className="primero">
            <div className="subtotal"> subtotal:</div>
            <div className="preciosub">{this.state.subtotal} bs</div>
            </div>
            <div className="segundo">
             <div className="descuento"> descuento:</div>
             <div className="preciodescuento">-{this.state.descuentos} bs</div>
            </div>
            <div className="segundo">
              <div className="total">total:</div>
              <div className="preciototal">{this.state.subtotal-this.state.descuentos} bs</div>
            </div>
              
            </div>
          </ModalFooter>
        </div>
      </div>
    );
  }
}

export default Carrito;