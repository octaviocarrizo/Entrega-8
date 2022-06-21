import React, {useState, useEffect} from 'react';
import {productos} from './Productos/productos';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = ({props}) => {

    const [Product, setProducto] = useState({}) 
     
     useEffect (()=>{
 
         const traerProducto = new Promise ((res, rej) => {
            
             setTimeout(() => {
                 res(productos[1]);
             },2000);
         });
 
         traerProducto.then((res) => {
             setProducto(res);
         });
 
     }, [])
 
    return (
    <div>
         <h1>
         {props}
         </h1>
        <ItemDetail item={Product} />
    </div>
     )
    
 }
 
 export default ItemDetailContainer;