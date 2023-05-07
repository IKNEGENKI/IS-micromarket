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
            isOpen:false
        }
        this.getProductos = this.getProductos.bind(this);
        
    }
    

    
    componentDidMount(){
        this.getProductos();
    }

    getProductos=async()=>{
        await axios.get('http://127.0.0.1:8000/api/getProductos')
        .then(res=>{
            this.setState({productos: res.data.producto});
            console.log(res.data.producto)
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
     handleOpenModal = () => {
    
        this.setState({ isOpen: true });
     }

    handleCloseModal = () => {
        this.setState({ isOpen: false });
    }
    render(){
        

        return(
            <div class="home">
                
                <br></br>
                <ContenedorBotonCentrado><h1>Productos registrados</h1></ContenedorBotonCentrado>
                <table className="table" style={{marginRight:80}}>
                    <thead className="thead-dark" style={{marginRight:80}}>
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
                            this.state.productos.map(product=>
                                <tr key={product.id}>
                                        <th>{product.producto}</th>
                                        <th>  {} </th>
                                        <th></th>
                                        <th>
                                         <a type="button" onClick={() => this.openModal(product.producto)}> <AddCircleOutlineIcon/> </a>
                                         {this.showModal && (
                                                <Stock isClose={() => this.showModal=false} producto={this.productoSelec} actualizarProducto={this.productoSelec}/>
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