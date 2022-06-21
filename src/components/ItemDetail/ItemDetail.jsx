import React from 'react'
import './ItemDetail.css';

 function ItemDetail({item}) {

  return (
    <div className="contenedor">
    <hr/>
                <div>
                    <h2>
                    {item.name}
                    </h2>
                </div>
                <div>
                    <h3 className="contenerIformacion">
                    {item.descripcion}
                    </h3>
                </div>
    
                <div>
                    <h2>
                    {item.precio}
                    </h2>
                </div>
    
                <div>
                    <h2>
                    Stock:{item.stock}
                    </h2>
                </div>
            </div>
  )
}

export default ItemDetail 