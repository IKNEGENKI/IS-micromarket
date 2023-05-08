import React , {Component, useState}from "react";
import '../css/ListaDeProducto.css';
import { Link } from "react-router-dom";
import axios from "axios";
import '../css/estilos.css';
import Input from '../components/Input';
import Button from '../elementos/Button';
import ModalForm from './ModalForm';
import ModificarProducto from './ModProd';
import Stock from './Stock';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ContenedorBotonCentrado, Boton } from "../elementos/Formularios";

class Lista extends  Component{
    
    constructor(props){
        super(props);
        this.state={
            productos:[],
            showModalStock: false,
            showModalModProd: false,
            productoSelec:"",
            cantidad:0,
            codigoP:-1

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
    
    openModalStock = (producto, canti, cod) => {
        this.setState({ showModalStock: true, productoSelec: producto, cantidad: canti, codigoP: cod });
      }
    
    openModalModProd = (producto) => {
        this.setState({ showModalModProd: true, productoSelec: producto });
      }
    
    closeModalStock = () => {
        this.setState({ showModalStock: false });
      }
    
    closeModalModProd = () => {
        this.setState({ showModalModProd: false });
      }

    render(){
        

        return(
            <div class="home">
                
                <br></br>
                <ContenedorBotonCentrado><h1>Productos registrados</h1></ContenedorBotonCentrado>
                <table className="table">
                    <thead className="thead-dark">
                        <br></br>
                        <tr>
                        <th scope='col'>Producto</th>
                        <th scope='col'>Cantidad(uds)</th>
                        <th scope='col'>Modificar datos</th>
                        <th scope='col'>Agregar stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.productos?.map(product=>
                                <tr key={product.codprod}>
                                        <th>{product.producto}</th>
                                        <th className="container">{product.stock}</th>
                                        <th>
                                            <a type="button" onClick={() => this.openModalModProd(product,product.codprod)}> <Button /> </a>
                                            {this.state.showModalModProd && (
                                            <ModificarProducto
                                                isClose={this.closeModalModProd}
                                                producto={this.state.productoSelec}
                                                codigo={this.codigoP}
                                            />
                                            )}
                                        </th>
                                        <th className="container" >
                                         <a className="stock" type="button" onClick={() => this.openModalStock(product,product.stock,product.codprod)}> <AddCircleOutlineIcon/> </a>
                                         {this.state.showModalStock && (
                                            <Stock 
                                            isClose={this.closeModalStock}
                                            producto={this.state.productoSelec} 
                                            cantidadActual={this.state.cantidad} 
                                            codigo={this.codigoP}
                                            />
                                         )}
                                        </th>
                                    
                                </tr>
                            )
                        }
                        
                    </tbody>
                </table>
                <ContenedorBotonCentrado>
				
                <Boton id= "cancel"  type="button" className="btn" onClick={this.handleReset}> Volver </Boton>
                </ContenedorBotonCentrado>

        
        
            </div>
           
        
        )
    }
}
export default Lista;