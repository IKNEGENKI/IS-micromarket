import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import "../css/Carrito.css";
import axios from "axios";
import { Boton } from "../elementos/Formularios";
import { BsFillTrash3Fill } from "react-icons/bs";
import BorrarCarrito from "./pagescli/BorrarCarrito";
import { BsFillCartXFill } from "react-icons/bs";
class Carrito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      subtotal: 0,
      imagen: '',
      name:'',
      descuentos: 0,
      total:0,
      id:0,
      vacio:true,
      despacho:0,
      
    }
    this.getProductos = this.getProductos.bind(this);
    this.aumentarsubtotal= this.aumentarsubtotal.bind(this);
    this.eliminar= this.eliminar.bind(this);
    this.aumentarDespacho= this.aumentarDespacho.bind(this);
  
  }
  componentDidMount() {
    this.getProductos();
   
  }

  getProductos = async () => {
    await axios.get('http://127.0.0.1:8000/api/getDetalle_venta ')
      .then(res => {
        this.setState({ productos: res.data });
        console.log(res.data)
        
        this.setState({ vacio: res.data.length === 0});
        
      }).catch((error) => {
        console.log(error);
      });
      this.aumentarsubtotal();
      this.aumentarDespacho();
  }
 
 eliminar=async(cod)=>{

  await axios.delete('http://127.0.0.1:8000/api/delDetalle_venta/'+ cod);
  this.getProductos();
    
 }
 aumentarDespacho= () =>{
  this.setState({despacho:0});
  const { productos } = this.state;
  let despacho = 0;
  
  productos.forEach((producto) => {
    despacho += parseInt(producto.cantidadprod) ;
  });

  this.setState({ despacho });
}
  aumentarsubtotal= () =>{
    this.setState({subtotal:0});
    const { productos } = this.state;
    let subtotal = 0;
    
    productos.forEach((producto) => {
      subtotal += parseInt(producto.costodetalle) ;
    });
  
    this.setState({ subtotal });
  }
  

   getImg(codprod) {
    try {
      const response = axios.get(`http://127.0.0.1:8000/api/obtenerProductos/${codprod}`);
      
      const img = response.data.producto.image;
      console.log(img);
      return img;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  getProd = async(codprod) =>{
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/obtenerProductos/${codprod}`);
      const prods1 = await response.data.producto.producto;

      console.log(prods1);
      this.setState({name:prods1});
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  render() {
    const { onClose } = this.props;
    const { vacio } = this.state;
   
    return (
      <div className="carrito-overlay">
        <div className="carrito-container">
          <Modal.Header closeButton onClick={onClose} className="modal-header">
            <h4 className="modal-title" id="tituloCa">Carrito</h4>
          </Modal.Header>
          <ModalBody className="modal-body">
          {vacio ? (
            <div className="row" id="vacio">
              <div className="icono">
              <BsFillCartXFill/>
              </div>
              <div className="textoIcono">
              <h2>Tu carrito se encuentra vacio</h2>
              </div>
            
            </div>
           
          ) : (
            <div className="lista">
              {this.state.productos
                ?.sort((o1, o2) => {
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
                    <div className="contenido" id="card">
                      <div className="imagen">
                        <img src={this.getImg} />
                      </div>
                      <div className="precio">
                        <h2>{this.name}</h2>
                        <p>Bs. {product.costodetalle}</p>
                        <p>{product.cantidadprod}</p>
                      </div>
                      <div className="basura">
                        <a onClick={() => this.eliminar(product.codetalle)}>
                          <BsFillTrash3Fill />
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
          </ModalBody>


          <ModalFooter className="modal-footer" id="modalF">
            <div className="costo" id="modalF">
            <div className="primero" id="modalF">
            <div className="subtotal" id="modalF"> Subtotal:</div>
            <div className="preciosub" id="modalF">{this.state.subtotal} Bs.</div>
            </div>
            <div className="segundo" id="modalF">
             <div className="descuento" id="modalF"> Despacho:</div>
             <div className="despacho" id="modalF">{this.state.despacho} producto(s)</div>
            </div>
            <div className="segundo" id="modalF">
             <div className="descuento" id="modalF"> Descuento:</div>
             <div className="preciodescuento" id="modalF">-{this.state.descuentos} Bs.</div>
            </div>
            <div className="segundo" id="modalF">
              <div className="total" id="modalF">Total:</div>
              <div className="preciototal" id="modalF">{this.state.subtotal-this.state.descuentos} Bs.</div>
             
              
            </div >
            
            </div>
          </ModalFooter>
        </div>
      </div>
    );
  }
}

export default Carrito;