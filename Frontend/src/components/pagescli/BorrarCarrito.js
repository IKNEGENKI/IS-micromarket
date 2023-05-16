import React,{Component} from "react";
import axios from 'axios';


class BorrarCarrito extends Component{
 constructor(props){
 super(props);
 this.state={

    id:this.props.producto.codprod,
 }
  this.borrar = this.borrar.bind(this);

 }
componentDidMount(){
this.borrar();

}
borrar= async() => {
    await axios.delete('http://127.0.0.1:8000/api/delProductos/'+ this.id);
    
}
render(){

    const{producto} =  this.props;
    
}

}

export default BorrarCarrito;