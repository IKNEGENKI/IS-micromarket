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

  componentDidMount() {
    this.getProductos();
  }

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