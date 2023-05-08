
import React , {Component, useState}from "react";
import axios from "axios";
import '../../css/estilos.css'

class Enlatados extends  Component{
    
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

                      
                        this.state.productos?.map((product,index)=>{
                           if(product.codcat==5){ 
                            return(
                            <div class="producto" id = "tarjetas">
                            <center>
								              <div >
                             <center>
                                <h2>{product.producto}</h2>
                                <br></br>
									              <img  src={product.image}/>
                                <br></br><br></br>
                                <p>{product.desc} </p>
                                <p>Bs. {product.precio} </p>
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
export default Enlatados;