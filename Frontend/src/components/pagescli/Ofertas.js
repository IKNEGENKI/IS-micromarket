import React, { Component } from 'react';
import axios from 'axios';
import '../../css/estilos.css';

class OfertasCli extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      showModal: false,
      productoSelec: '',
      cantidad: 0,
      codigoP: -1,
    };
    this.getProductos = this.getProductos.bind(this);
  }

<<<<<<< HEAD
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
=======
  componentDidMount() {
    this.getProductos();
  }
>>>>>>> 7a7390e2c8a34ab53ffe3520a2e4b3fff6bdbd15

  getProductos = async () => {
    await axios
      .get('http://127.0.0.1:8000/api/getProductos')
      .then((res) => {
        this.setState({ productos: res.data });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

<<<<<<< HEAD
    
    componentDidMount(){
        this.getProductos();
       
    }
    getProductos=async()=>{
        await axios.get('http://127.0.0.1:8000/api/getOferta')
        .then(res=>{
            this.setState({productos: res.data.ofeta});
            console.log(res.data.ofeta)
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
    updateProducto = async (codoferta,fecha,fecha1,fecha2,codprod,desc,image,nombre,precioventa) => {
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
            }else{
                console.log("no hay nada que hacer");
            }
        }
      };

    render(){
        

        return(
            <body id="bodyCard">
                
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
                        this.updateProducto(product.codoferta,fechaActual,product.fechaini,product.fechafin,product.codprod,product.desc,product.image,product.nombre,product.precioventa);
                        
                        console.log(fechaActual);
                        if(product.estado == 1){ //pregunta si la oferta esta activa
                            return(

                    <div class="producto" id="tarjetas" 
                    onMouseEnter={this.handleCardMouseEnter}
                    onMouseLeave={this.handleCardMouseLeave}
                    onClick={() => this.openModal(product,product.codprod)}>
                    <center>
                        <div >
                    <center>
                        <h2>{product.nombre}</h2>
                        <img  src={product.image}/>
                        <p>Bs. {product.fechaini} </p>
                        <Boton type="button" id="borrarP" className="btn"
                        style={{ display: this.state.hoveredCard ? "block" : "none" }}
                        > Ver </Boton>
                    </center>
                    </div>
                    </center>
                    </div>
                            )
                        }
                    }
                    )
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
=======
  handleReset = () => {
    window.location.href = '/home';
  };

  openModal = (producto, canti, cod) => {
    this.setState({ showModal: true, productoSelec: producto, cantidad: canti, codigoP: cod });
  };

  render() {
    return (
      <body id="bodyCard">
        <br />
        {this.state.productos
          ?.sort((o1, o2) => {
            if (o1.producto < o2.producto) {
              return -1;
            } else {
              if (o1.producto > o2.producto) {
                return 1;
              } else {
                return 0;
              }
            }
          })
          .map((product, index) => {
            if (product.codcat == 9) {
              const precioOferta = product.precio - (product.precio * product.oferta) / 100;

              return (
                <div class="producto" id="tarjetas">
                  <center>
                    <div>
                      <center>
                        <h2>{product.producto}</h2>
                        <br />
                        <img src={product.image} alt={product.producto} />
                        <br />
                        <br />
                        <p>{product.desc}</p>
                        <p>
                          Precio anterior: Bs. {product.precio} | Precio oferta: Bs. {precioOferta}
                        </p>
                        <p>Oferta: {product.oferta}% OFF</p>
                      </center>
                    </div>
                  </center>
                </div>
              );
            }
          })}
      </body>
    );
  }
}

export default OfertasCli;
>>>>>>> 7a7390e2c8a34ab53ffe3520a2e4b3fff6bdbd15
