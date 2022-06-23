import React from 'react'
import './ItemDetail.css';
import ItemCount from '../Stock/ItemCount';

 function ItemDetail({item}) {

    const onAdd = (quantiti) => {
        console.log(` Compraste ${quantiti} unidades `)
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
                <ItemCount stock={5} initial={1} onAdd={onAdd} /> 
            </div>
  )
}

export default ItemDetail 