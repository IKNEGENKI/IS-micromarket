
import React , {Component, useState}from "react";
import axios from "axios";
import '../../css/estilos.css'
import { Boton } from "../../elementos/Formularios";
import VistaDetallada from "../VistaDetallada";

class Varios extends  Component{
    
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
               
                  
                  
                    {

                      
                        this.state.productos?.sort((o1, o2) =>{
                            if(o1.producto < o2.producto){
                                return -1;
                            }else{
                                if(o1.producto > o2.producto){
                                    return 1;
                                }else{
                                    return 0;
                                }
                            }
                    })
                        .map((product,index)=>{
                           if(product.codcat==13){ 
                            return(
                                <div class="producto" id = "tarjetas" 
                                onMouseEnter={this.handleCardMouseEnter}
                                onMouseLeave={this.handleCardMouseLeave}
                                onClick={() => this.openModal(product,product.codprod)}>
                                <center>
                                <div >
                                <center>
                                    <h2>{product.producto}</h2>
                                    <img  src={product.image}/>
                                    <p>Bs. {product.precio} </p>
                                    <Boton type="button" id="borrarP" className="btn" style={{ display: this.state.hoveredCard ? "block" : "none" }}> Agregar </Boton>
                                </center>
                                </div>
                                </center>
                                 </div>
                                )
                               }
                               
                            }
                            )
                        }
                     
                    
                     {this.state.showModal && (
                                                <VistaDetallada
                                                    isClose={this.closeModal}
                                                    producto={this.state.productoSelec}
                                                    codigo={this.codigoP}
                                                />
                                                )}
            
               </body>
            
            )
        }
    }
export default Varios;