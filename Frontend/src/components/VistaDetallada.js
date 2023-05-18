import React, { Component } from "react";
import { Boton} from '../elementos/MiniForm';
import '../css/VistaDetallada.css';
import axios from 'axios';

class VistaDetallada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.producto,
      id:this.props.producto.codprod,
      stock: null,
    };
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
        const { product } = this.state;
        const productWithStock = res.data.find(p => p.codprod === product.codprod);
        if (productWithStock) {
          this.setState({ stock: productWithStock.stock });
        }
    }).catch((error)=>{
        console.log(error);
    });
}

  render() {
    const { isClose } = this.props;
    const { product, stock  } = this.state;
    const selectOptions = [];
    if (stock) {
      for (let i = 1; i <= stock; i++) {
        selectOptions.push(<option value={i} key={i}>Cantidad: {i} Unidad(es) </option>);
      }
    }

    return (
      <div className="vista">
      <div className="vista-content">
      <span className="close" onClick={isClose}>&times;</span>
        <div>
          <img src={product.image} alt="Producto" />
        </div> 

        <div>
          <h4>{product.producto}</h4>

          <h3>Bs. {product.precio}</h3>

          <p>{product.desc}</p>  
          
          <center>
              <select name="select">
                <option>Cantidad:</option>
                {selectOptions}
              </select>

          <Boton type="button" id="agregar" className="btn" onClick={isClose}> Agregar al Carrito </Boton>
          </center>
        </div>
      </div>
    </div>
    );
  }
}


export default VistaDetallada;