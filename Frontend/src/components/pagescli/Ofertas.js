
import React , {Component, useState}from "react";
import axios from "axios";
import '../../css/estilos.css'
import { Boton } from "../../elementos/Formularios";
import VistaDetallada from "../VistaDetallada";

class Ofertas extends  Component{
    
    constructor(props){
        super(props);
        this.state={
            productos:[],
            showModal:false,
            productoSelec:"",
            cantidad:0,
            codigoP:-1,

        }
        this.getProductos = this.getProductos.bind(this);
        
    }
    

    
    componentDidMount(){
        this.getProductos();
       
    }
    getProductos=async()=>{
        await axios.get('http://127.0.0.1:8000/api/getOferta')
        .then(res=>{
            this.setState({productos: res.data.ofeta});
            console.log(this.state.productos.codcat)
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
    
    render(){
        

        return(
            <body id = "bodyCard">
                
                <br></br>
               
                  
                  
                    {

                      
                        this.state.productos.map((product)=>{
                           
                                <h2>{product.nombre}</h2>
                               
                               }
                        ) 
                            }
                     
            
            
               </body>
            
            )
        }
    }
export default Ofertas;