import React , {Component, useState}from "react";
import axios from "axios";
import '../../css/estilos.css'
import { Boton } from "../../elementos/Formularios";
import VistaDetallada from "../VistaDetallada";
import { NavLink } from 'react-router-dom';
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
    
     redireccionarAbarrotes() {
        window.location.href = "/";
      }
    render(){
        

        return(
            <body id = "bodyCard">
                
                <br></br>
               
                  
                  
                  
                <div className="producto" id="tarjetas">
                    <center>
                         <div>
                         <center>
                          <h2>Abarrotes</h2>
                        <img src= "https://res.cloudinary.com/dymazwyut/image/upload/v1684716096/IS/smijdqru9t299zr4ysge.jpg" alt="" />
                         <Boton
                         type="button"
                         id="borrarP"
                         className="btn"
                         >
                          <NavLink to="/Abarrotes">Ir</NavLink>
                         </Boton>
                     </center>
                         </div>
                     </center>
                    </div>

                    <div className="producto" id="tarjetas">
                    <center>
                         <div>
                         <center>
                          <h2>Bebidas</h2>
                        <img src ="https://res.cloudinary.com/dymazwyut/image/upload/v1684716277/IS/ki3hwnqzsrlt20rdgwgn.jpg" alt = ""/>
                         <Boton
                         type="button"
                         id="borrarP"
                         className="btn"
                         >
                          <NavLink to="/Bebidas">Ir</NavLink>
                         </Boton>
                     </center>
                         </div>
                     </center>
                    </div>

                    <div className="producto" id="tarjetas">
                    <center>
                         <div>
                         <center>
                          <h2>Bebidas Alcoholicas</h2>
                        <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684716292/IS/lyjlscgkljgpunbub97r.png" alt = ""/>
                         <Boton
                         type="button"
                         id="borrarP"
                         className="btn"
                         >
                          <NavLink to="/BebidasA">Ir</NavLink>
                         </Boton>
                     </center>
                         </div>
                     </center>
                    </div>

                    <div className="producto" id="tarjetas">
                    <center>
                         <div>
                         <center>
                          <h2>CuidadoP</h2>
                        <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684716312/IS/r34acoasfznknjpjt0cg.png" alt = ""/>
                         <Boton
                         type="button"
                         id="borrarP"
                         className="btn"
                         >
                          <NavLink to="/CuidadoP">Ir</NavLink>
                         </Boton>
                     </center>
                         </div>
                     </center>
                    </div>

                    <div className="producto" id="tarjetas">
                    <center>
                         <div>
                         <center>
                          <h2>Enlatados</h2>
                        <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684716333/IS/avbdr72borjfrmstcohb.jpg" alt = ""/>
                         <Boton
                         type="button"
                         id="borrarP"
                         className="btn"
                         >
                          <NavLink to="/Enlatados">Ir</NavLink>
                         </Boton>
                     </center>
                         </div>
                     </center>
                    </div>

                    <div className="producto" id="tarjetas">
                    <center>
                         <div>
                         <center>
                          <h2>Farmacos</h2>
                        <img src= "https://res.cloudinary.com/dymazwyut/image/upload/v1684716351/IS/kml66iw6qupp7jpnpgoj.jpg" alt = ""/>
                         <Boton
                         type="button"
                         id="borrarP"
                         className="btn"
                         >
                          <NavLink to="/Farmacos">Ir</NavLink>
                         </Boton>
                     </center>
                         </div>
                     </center>
                    </div>

                    <div className="producto" id="tarjetas">
                    <center>
                         <div>
                         <center>
                          <h2>Fiambres y Embutidos</h2>
                        <img src= "https://res.cloudinary.com/dymazwyut/image/upload/v1684716368/IS/f8ikckbwwrmiwdffziwv.webp" alt = ""/>
                         <Boton
                         type="button"
                         id="borrarP"
                         className="btn"
                         >
                          <NavLink to="/FiamyEmb">Ir</NavLink>
                         </Boton>
                     </center>
                         </div>
                     </center>
                    </div>

                    <div className="producto" id="tarjetas">
                    <center>
                         <div>
                         <center>
                          <h2>Golosinas</h2>
                        <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684716427/IS/lwkoplq933jblolrkiet.jpg" alt = ""/>
                         <Boton
                         type="button"
                         id="borrarP"
                         className="btn"
                         >
                          <NavLink to="/Golosinas">Ir</NavLink>
                         </Boton>
                     </center>
                         </div>
                     </center>
                    </div>

                    <div className="producto" id="tarjetas">
                    <center>
                         <div>
                         <center>
                          <h2>Lacteos</h2>
                        <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684716445/IS/mrtgntqklnaszs8g7omn.jpg" alt = ""/>
                         <Boton
                         type="button"
                         id="borrarP"
                         className="btn"
                         >
                          <NavLink to="/Lacteos">Ir</NavLink>
                         </Boton>
                     </center>
                         </div>
                     </center>
                    </div>

                    <div className="producto" id="tarjetas">
                    <center>
                         <div>
                         <center>
                          <h2>Limpieza del Hogar</h2>
                        <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684716467/IS/olcqibq6dvuldbluiqlv.jpg" alt = ""/>
                         <Boton
                         type="button"
                         id="borrarP"
                         className="btn"
                         >
                          <NavLink to="/LimpiezaH">Ir</NavLink>
                         </Boton>
                     </center>
                         </div>
                     </center>
                    </div>

                    <div className="producto" id="tarjetas">
                    <center>
                         <div>
                         <center>
                          <h2>Panaderia</h2>
                        <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684716486/IS/tdcbimnzwfwj25qjxvxl.jpg" alt = ""/>
                         <Boton
                         type="button"
                         id="borrarP"
                         className="btn"
                         >
                          <NavLink to="/Panaderia">Ir</NavLink>
                         </Boton>
                     </center>
                         </div>
                     </center>
                    </div>

                    <div className="producto" id="tarjetas">
                    <center>
                         <div>
                         <center>
                          <h2>Snacks</h2>
                        <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684716502/IS/mydt3izavjq1kii39mdg.jpg" alt = ""/>
                         <Boton
                         type="button"
                         id="borrarP"
                         className="btn"
                         >
                          <NavLink to="/Snacks">Ir</NavLink>
                         </Boton>
                     </center>
                         </div>
                     </center>
                    </div>

                    <div className="producto" id="tarjetas">
                    <center>
                         <div>
                         <center>
                          <h2>Varios</h2>
                        <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684716517/IS/itb4roqnwb9w7sb8uvap.png" alt = ""/>
                         <Boton
                         type="button"
                         id="borrarP"
                         className="btn"
                         >
                          <NavLink to="/Varios">Ir</NavLink>
                         </Boton>
                     </center>
                         </div>
                     </center>
                    </div>

                    


                            
        
           </body>
        
        )
    }
}
export default HomeOferta;