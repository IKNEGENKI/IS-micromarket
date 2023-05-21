import React , {Component, useState}from "react";
import axios from "axios";
import '../../css/estilos.css'
import '../../css/swip.css'
import { Boton } from "../../elementos/Formularios";
import VistaDetallada from "../VistaDetallada";

class HomeOferta extends  Component{
    
    constructor(props){
        super(props);
        this.state={
            productos:[],
            showModal:false,
            productoSelec:"",
            cantidad:0,
            codigoP:-1,
            hoveredCard: false,

        }
        this.getProductos = this.getProductos.bind(this);
        
    }
    

    
    componentDidMount(){
        this.getProductos();
       
    }
    getProductos=async()=>{
        await axios.get('http://127.0.0.1:8000/api/getProductos')
        .then(res=>{
            this.setState({productos: res.data});
            console.log(res.data)
        }).catch((error)=>{
            console.log(error);
        });
    }
    
    
    handleReset = () => {
        window.location.href = '/home';
    }
    
    openModal = (producto) => {
        this.setState({ showModal: true, productoSelec: producto });
      }
    
    closeModal = () => {
        this.setState({ showModal: false });
      }

    handleCardMouseEnter = () => {
        this.setState({ hoveredCard: true });
    };
      
    handleCardMouseLeave = () => {
        this.setState({ hoveredCard: false });
    };
    
    render(){
        

        return(
            <body id = "bodyCard">
                
                <br></br>
               
                  
                  
                  
                            <div class="producto" id = "tarjetas" 
                            onMouseEnter={this.handleCardMouseEnter}
                            onMouseLeave={this.handleCardMouseLeave}>
                            
                            <center>
                            <div >
                            <center>
                                <h2>Abarrotes</h2>
                                <img />
                                <p>vermas</p>
                                <Boton type="button" id="borrarP" className="btn"
                                style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                > Agregar </Boton>
                            </center>
                            </div>
                            </center>
                             </div>


                             <div class="producto" id = "tarjetas" 
                            onMouseEnter={this.handleCardMouseEnter}
                            onMouseLeave={this.handleCardMouseLeave}>
                            
                            <center>
                            <div >
                            <center>
                                <h2>Bebidas</h2>
                                <img />
                                <p>vermas</p>
                                <Boton type="button" id="borrarP" className="btn"
                                style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                > Agregar </Boton>
                            </center>
                            </div>
                            </center>
                             </div>


                             <div class="producto" id = "tarjetas" 
                            onMouseEnter={this.handleCardMouseEnter}
                            onMouseLeave={this.handleCardMouseLeave}>
                            
                            <center>
                            <div >
                            <center>
                                <h2>Bebidas alcoholicas</h2>
                                <img />
                                <p>vermas</p>
                                <Boton type="button" id="borrarP" className="btn"
                                style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                > Agregar </Boton>
                            </center>
                            </div>
                            </center>
                             </div>


                             <div class="producto" id = "tarjetas" 
                            onMouseEnter={this.handleCardMouseEnter}
                            onMouseLeave={this.handleCardMouseLeave}>
                            
                            <center>
                            <div >
                            <center>
                                <h2>Cuidado Personal</h2>
                                <img />
                                <p>vermas</p>
                                <Boton type="button" id="borrarP" className="btn"
                                style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                > Agregar </Boton>
                            </center>
                            </div>
                            </center>
                             </div>


                             <div class="producto" id = "tarjetas" 
                            onMouseEnter={this.handleCardMouseEnter}
                            onMouseLeave={this.handleCardMouseLeave}>
                            
                            <center>
                            <div >
                            <center>
                                <h2>Enlatados</h2>
                                <img />
                                <p>vermas</p>
                                <Boton type="button" id="borrarP" className="btn"
                                style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                > Agregar </Boton>
                            </center>
                            </div>
                            </center>
                             </div>


                             <div class="producto" id = "tarjetas" 
                            onMouseEnter={this.handleCardMouseEnter}
                            onMouseLeave={this.handleCardMouseLeave}>
                            
                            <center>
                            <div >
                            <center>
                                <h2>Farmacos</h2>
                                <img />
                                <p>vermas</p>
                                <Boton type="button" id="borrarP" className="btn"
                                style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                > Agregar </Boton>
                            </center>
                            </div>
                            </center>
                             </div>


                             <div class="producto" id = "tarjetas" 
                            onMouseEnter={this.handleCardMouseEnter}
                            onMouseLeave={this.handleCardMouseLeave}>
                            
                            <center>
                            <div >
                            <center>
                                <h2>Fiambres y embutidos</h2>
                                <img />
                                <p>vermas</p>
                                <Boton type="button" id="borrarP" className="btn"
                                style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                > Agregar </Boton>
                            </center>
                            </div>
                            </center>
                             </div>


                             <div class="producto" id = "tarjetas" 
                            onMouseEnter={this.handleCardMouseEnter}
                            onMouseLeave={this.handleCardMouseLeave}>
                            
                            <center>
                            <div >
                            <center>
                                <h2>Golosinas</h2>
                                <img />
                                <p>vermas</p>
                                <Boton type="button" id="borrarP" className="btn"
                                style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                > Agregar </Boton>
                            </center>
                            </div>
                            </center>
                             </div>


                             <div class="producto" id = "tarjetas" 
                            onMouseEnter={this.handleCardMouseEnter}
                            onMouseLeave={this.handleCardMouseLeave}>
                            
                            <center>
                            <div >
                            <center>
                                <h2>Limpieza del hogar</h2>
                                <img />
                                <p>vermas</p>
                                <Boton type="button" id="borrarP" className="btn"
                                style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                > Agregar </Boton>
                            </center>
                            </div>
                            </center>
                             </div>


                             <div class="producto" id = "tarjetas" 
                            onMouseEnter={this.handleCardMouseEnter}
                            onMouseLeave={this.handleCardMouseLeave}>
                            
                            <center>
                            <div >
                            <center>
                                <h2>Lacteos</h2>
                                <img />
                                <p>vermas</p>
                                <Boton type="button" id="borrarP" className="btn"
                                style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                > Agregar </Boton>
                            </center>
                            </div>
                            </center>
                             </div>


                             <div class="producto" id = "tarjetas" 
                            onMouseEnter={this.handleCardMouseEnter}
                            onMouseLeave={this.handleCardMouseLeave}>
                            
                            <center>
                            <div >
                            <center>
                                <h2>Panaderia</h2>
                                <img />
                                <p>vermas</p>
                                <Boton type="button" id="borrarP" className="btn"
                                style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                > Agregar </Boton>
                            </center>
                            </div>
                            </center>
                             </div>


                             <div class="producto" id = "tarjetas" 
                            onMouseEnter={this.handleCardMouseEnter}
                            onMouseLeave={this.handleCardMouseLeave}>
                            
                            <center>
                            <div >
                            <center>
                                <h2>Snacks</h2>
                                <img />
                                <p>vermas</p>
                                <Boton type="button" id="borrarP" className="btn"
                                style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                > Agregar </Boton>
                            </center>
                            </div>
                            </center>
                             </div>

                             <div class="producto" id = "tarjetas" 
                            onMouseEnter={this.handleCardMouseEnter}
                            onMouseLeave={this.handleCardMouseLeave}>
                            
                            <center>
                            <div >
                            <center>
                                <h2>Golosinas</h2>
                                <img />
                                <p>vermas</p>
                                <Boton type="button" id="borrarP" className="btn"
                                style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                > Agregar </Boton>
                            </center>
                            </div>
                            </center>
                             </div>

                             


                             
                           
        
           </body>
        
        )
    }
}
export default HomeOferta;