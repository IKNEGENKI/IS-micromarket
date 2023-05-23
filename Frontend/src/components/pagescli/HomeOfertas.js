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

     redireccionarAFarmacos() {
        // Lógica adicional si es necesario antes de redireccionar
console.log("escucho")
      }
    render(){
        

        return(
            <center>
            <div>  
                <body id = "bodyCard">
                
                    <br></br>
                
                    <div className="producto" id="tarjetas">
                        <center>
                            <div>
                                <center>
                                    <h2>Abarrotes</h2>
                                    <img src= "https://res.cloudinary.com/dymazwyut/image/upload/v1684834790/IS/ul9s1qnmrqmzkwllukzl.png" alt="" />
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Abarrotes" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetas">
                        <center>
                            <div>
                                <center>
                                    <h2>Bebidas</h2>
                                    <img src ="https://res.cloudinary.com/dymazwyut/image/upload/v1684835186/IS/yaqjlwg4xcx0hvoepmhj.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Bebidas" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetas">
                        <center>
                            <div>
                                <center>
                                    <h2>Bebidas Alcoholicas</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684835313/IS/efcqg57jp7fq62mth43h.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/BebidasA" id = "link_cat"><span id="categori">Ir</span></NavLink>  
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetas">
                        <center>
                            <div>
                                <center>
                                    <h2>CuidadoP</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684835412/IS/siafxpeuu2cifqfspkke.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/CuidadoP" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetas">
                        <center>
                            <div>
                                <center>
                                    <h2>Enlatados</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684835534/IS/jrjhmawssustgwrsia0u.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Enlatados" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetas" onClick={this.redireccionarAFarmacos}>
                        <center>
                            <div>
                                <center>
                                    <h2>Farmacos</h2>
                                    <img src= "https://res.cloudinary.com/dymazwyut/image/upload/v1684835617/IS/etwu01fehzhl1b1k4sxf.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Farmacos" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetas">
                        <center>
                            <div>
                                <center>
                                    <h2>Fiambres </h2>
                                    <img src= "https://res.cloudinary.com/dymazwyut/image/upload/v1684835743/IS/l6onbsnvv41vg8ojuhkm.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/FiamyEmb"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetas">
                        <center>
                            <div>
                                <center>
                                    <h2>Golosinas</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684835969/IS/oyescnd2pqwhjmvqguly.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Golosinas" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetas">
                        <center>
                            <div>
                                <center>
                                    <h2>Lacteos</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684836111/IS/oirkbjtycsi1kqpefkgf.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Lacteos" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetas">
                        <center>
                            <div>
                                <center>
                                    <h2>Limpieza del Hogar</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684836170/IS/eyefybtiuvhek9zjitil.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/LimpiezaH" id = "link_cat"><span id="categori">Ir</span></NavLink>         
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetas">
                        <center>
                            <div>
                                <center>
                                    <h2>Panaderia</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684836228/IS/bmggny2mnctvvudw4ooc.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Panaderia" id = "link_cat" ><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetas">
                        <center>
                            <div>
                                <center>
                                    <h2>Snacks</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684836307/IS/xyp8cyarspjdp3z285xe.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Snacks" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetas">
                        <center>
                            <div>
                                <center>
                                    <h2>Varios</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684836384/IS/deyrtcrfbbsi8nkiz5dm.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Varios" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>
                </body>
            </div>
            </center>
        )
    }
}
export default HomeOferta;