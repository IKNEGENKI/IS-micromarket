
import React , {Component, useState}from "react";
import axios from "axios";
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
            hoveredCard: false,
        }
        this.getProductos = this.getProductos.bind(this);
    }
    
    componentDidMount(){
        this.getProductos();
    }

    getProductos=async()=>{
        await axios.get('http://127.0.0.1:8000/api/getOferta')
        .then(res=>{
            this.setState({productos: res.data});
            console.log(res.data)
        }).catch((error)=>{
            console.log(error);
        });
    }
    
<<<<<<< HEAD
=======

    getImg(codprod) {
        return axios.get(`http://127.0.0.1:8000/api/obtenerProductos/${codprod}`)
          .then(response => {
            const prods1 = response.data.producto;
            const img = response.data.producto.precio;
            console.log(prods1);
            return img;
          })
          .catch(error => {
            console.log(error);
            return null;
          });
      }
    
      obtenerImagen(codprod) {
        const imageGetter = new Ofertas();
        const codigoProducto = 'codigoDeProducto'; // Reemplaza con el código de producto real
      
        imageGetter.getImg(codprod)
          .then(imagen => {
            console.log(imagen);
          })
          .catch(error => {
            console.log(error);
          });
      }


    
>>>>>>> e9a2148af6ae29eaa610d144b87dec4fc10f3148
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

<<<<<<< HEAD
    updateProducto = async (codoferta,fecha,fecha1,fecha2,codprod,desc,image,nombre,precioventa) => {
=======
    



    updateProducto = async (codoferta,fecha,fecha1,fecha2,codprod,desc,image,nombre,precioventa,precioanterior) => {
>>>>>>> e9a2148af6ae29eaa610d144b87dec4fc10f3148
        if(fecha == fecha1 ){
            await axios
            .put('http://127.0.0.1:8000/api/putOferta/'+codoferta, {
                'codprod':codprod,
                'desc':desc,
                'fechaini':fecha1,
                'fechafin':fecha2,
                'precioventa': precioventa,
                'estado':1,
                'nombre':nombre,
                'image': image,
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }else{
            if(fecha == fecha2){
                await axios
<<<<<<< HEAD
                .put('http://127.0.0.1:8000/api/putOferta/'+codoferta, {
                    'codprod':codprod,
                    'desc':desc,
                    'fechaini':fecha1,
                    'fechafin':fecha2,
                    'precioventa': precioventa,
                    'estado':0,
                    'nombre':nombre,
                    'image': image,
                })
                .then((res) => {
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
=======
          .put('http://127.0.0.1:8000/api/putOferta/'+codoferta, {
            'codprod':codprod,
            'desc':desc,
            'fechaini':fecha1,
            'fechafin':fecha2,
            'precioventa': precioventa,
            'precioanterior':precioanterior,
            'estado':0,
            'nombre':nombre,
            'image': image,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
>>>>>>> e9a2148af6ae29eaa610d144b87dec4fc10f3148
            }else{
                console.log("no hay nada que hacer");
            }
        }
    };

    render(){
        return(
            <body id="bodyCardOf">
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

                    .map((product)=>{
                        let fechaActual = new Date().toISOString().slice(0, 10);
<<<<<<< HEAD
                        this.updateProducto(product.codoferta,fechaActual,product.fechaini,product.fechafin,product.codprod,product.desc,product.image,product.nombre,product.precioventa);
                        console.log(fechaActual);
                        if(product.estado == 1){ //pregunta si la oferta esta activa
                            return(
                                <div class="producto" id="tarjetasOf" 
                                    onMouseEnter={this.handleCardMouseEnter}
                                    onMouseLeave={this.handleCardMouseLeave}
                                    onClick={() => this.openModal(product,product.codprod)}>
                                    <center>
                                        <div >
                                            <center>
                                                <img  src={product.image}/>
                                                <br/>
                                                <span id="porci">aqui va el porciento %</span>
                                                <h2 id="labelTi">{product.nombre}</h2>
                                                <p id="labelOf">Finaliza el: {product.fechafin} </p>
                                                <span id="precioA">Antes: </span>
                                                <span id="precioH">Ahora: </span> <br/>
                                                <Boton type="button" id="borrarP" className="btn"
                                                    style={{ display: this.state.hoveredCard ? "block" : "none" }}
                                                > Ver </Boton>
                                            </center>
                                        </div>
                                    </center>
                                </div>
=======
                        this.updateProducto(product.codoferta,fechaActual,product.fechaini,product.fechafin,product.codprod,product.desc,product.image,product.nombre,product.precioventa,product.precioanterior);
                        let precio = this.obtenerImagen(product.codprod);
                        console.log(precio);
                        
                        if(product.estado == 1){ //pregunta si la oferta esta activa
                            return(

                    <div class="producto" id="tarjetasOf" 
                    onMouseEnter={this.handleCardMouseEnter}
                    onMouseLeave={this.handleCardMouseLeave}
                    onClick={() => this.openModal(product,product.codprod)}>
                    <center>
                        <div >
                    <center>
                        
                        <img  src={product.image}/>
                        <br/>
                        <span id="porci">ahorra bs.{product.precioanterior - product.precioventa} </span>
                        <h2 id="labelTi">{product.nombre}</h2>
                        <p id="labelOf">Finaliza el: {product.fechafin} </p>
                        <span id="precioA">Antes: bs. {product.precioanterior} </span>
                        <span id="precioH"> <b>Ahora: bs. {product.precioventa}</b></span> <br/>
                       
                        <Boton type="button" id="borrarP" className="btn"
                        style={{ display: this.state.hoveredCard ? "block" : "none" }}
                        > Ver </Boton>
                    </center>
                    </div>
                    </center>
                    </div>
>>>>>>> e9a2148af6ae29eaa610d144b87dec4fc10f3148
                            )
                        }
                    })
                } 
                <div>
                    {this.state.showModal && (
                        <VistaDetallada
                            isClose={this.closeModal}
                            producto={this.state.productoSelec}
                            codigo={this.codigoP}
                        />
                    )}
                </div>            
            </body>
                        
        )
    }
}

export default Ofertas;