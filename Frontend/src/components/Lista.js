import React , {Component, useState}from "react";
import '../css/ListaDeProducto.css';
import { Link } from "react-router-dom";
import axios from "axios";
import '../css/estilos.css';
import Input from '../components/Input';
import Button from '../elementos/Button';
import ModalForm from './ModalForm';
import Stock from './Stock';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ContenedorBotonCentrado, Boton } from "../elementos/Formularios";

class Lista extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            productos:[],
            showModal:false,
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
    
    openModal = (producto,canti,cod) => {
        this.setState({ showModal: true, productoSelec: producto, cantidad:canti ,codigoP:cod});
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
                                        <th>{product.stock}</th>
                                        <th></th>
                                        <th className="container" >
                                         <a type="button" onClick={() => this.openModal(product,product.stock,product.codprod)}> <AddCircleOutlineIcon/> </a>
                                         {this.state.showModal && (
                                            <Stock isClose={() => this.setState({ showModal: false })} producto={this.state.productoSelec} cantidadActual={this.state.cantidad} codigo={this.codigoP}/>
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