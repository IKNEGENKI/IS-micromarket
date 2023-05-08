
import React , {Component, useState}from "react";
import axios from "axios";

class HomeCliente extends  Component{
    
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
            <body>
                
                <br></br>
               
                  
                  
                    {

                      
                        this.state.productos?.map(product=>

                         
                          
                            <div class="producto">
                            
                            <div class="container">
							<center>
								<div class="cardLista" id = "contenedorImagen"  >
                  
									<img id="img-preview" src={product.image}/>
										
								</div>
							</center>
						</div>
            <h2>{product.producto}</h2>
                            <p>{product.precio}</p>
                            </div>
                            )
                    }
                 
                
        
        
           </body>
        
        )
    }
}
export default HomeCliente;



