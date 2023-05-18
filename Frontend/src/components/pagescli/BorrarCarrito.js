import React,{Component} from "react";
import axios from 'axios';
import { BsFillTrash3Fill } from "react-icons/bs";

class BorrarCarrito extends Component{
 constructor(props){
 super(props);
 this.state={

    id:this.props.producto,
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
    return(
        <></>
    );
}

}

export default BorrarCarrito;