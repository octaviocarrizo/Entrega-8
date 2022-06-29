import React, { useState } from 'react'
import './ItemDetail.css';
import ItemCount from '../Stock/ItemCount';
import {Link} from 'react-router-dom'

 function ItemDetail({item}) {
    
    const [cant, setCant] = useState(0);

    const onAdd = (Cantidad) => {
        console.log(` Compraste ${Cantidad} unidades `);
        setCant(Cantidad);
    }

    
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
                {
                    cant === 0 ? (<ItemCount stock={5} initial={1} onAdd={onAdd} />)
                     : (<Link to="/carrito">Ir al Carrito</Link>)
                }
                
            </div>
  )
}

export default ItemDetail 