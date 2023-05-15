
import React , {Component, useState}from "react";
import axios from "axios";
import '../../css/estilos.css'
import { Boton } from "../../elementos/Formularios";

class BebidasA extends  Component{
    
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
    
    openModal = (producto,canti,cod) => {
        this.setState({ showModal: true, productoSelec: producto, cantidad:canti ,codigoP:cod});
       
    }

    
    
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
                           if(product.codcat==3){ 
                            return(
                            <div class="producto" id = "tarjetas">
                            <center>
                        <div >
                    <center>
                        <h2>{product.producto}</h2>
                        <img  src={product.image}/>
                        <p>{product.desc} </p>
                        <p>Bs. {product.precio} </p>
                        <Boton type="button" id="borrarP" className="btn"> Agregar </Boton>
                    </center>
                    </div>
                    </center>
                             </div>
                            )
                           }
                           
                        }
                        )
                    }
                 
                
        
        
           </body>
        
        )
    }
}
export default BebidasA;



