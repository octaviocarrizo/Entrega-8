import React from "react";
import './Item.css';
import {Link} from 'react-router-dom'



const Item = ({item}) => {

    const urldetalle = `/Detalle/${item.id}`

    return (
        <div className="contenedor">
<hr/>
            <div>
                <h2>
                {item.name}
                </h2>
            </div>
                <img width="200" src={item.img} alt={item.id} />
            <div>
                <h3 className="contenerIformacion">
                {item.descripcion}
                </h3>
            </div>
            
            <div>
                <h3>
                {item.precio}
                </h3>
            </div>
            <div>
                <h3>
                Stock: {item.stock}
                </h3>
            <Link to={urldetalle}>Detalle</Link>
            </div>
        </div>
    )
 }
 
 export default Item
 