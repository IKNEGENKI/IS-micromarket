import React from 'react'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import micromarket from '../images/logo1.jpg'

export const ContentHome = () => {
  return (
    <div className='home'>
      <center>        
        <img src={micromarket} className="card-img-top" alt="..." style={{height: 500, width:500} }/>
        <div className="card-body">
          <h1 className="card-title">Pocket Store</h1>
          <br/>
          <h5>Es una tienda en linea en la cual usted puede agregar sus productos y ganar un mayor número de clientes a traves de las ventas en linea.</h5>
          <center>
                    
          </center>
                    
        </div>
      </center>
            
    </div>
  )
}
