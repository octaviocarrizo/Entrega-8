import React, {useState, useEffect} from 'react';
import {productos} from './Productos/productos';
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({props}) => {
    const [Product, setProducto] = useState({});

     const { detalleId } = useParams();
     
     useEffect (()=>{
        
         const traerProducto = new Promise ((res,) => {
             setTimeout(() => {
            let DetalleNumber = parseInt(detalleId)

            const itemFound = productos.find( pinturas =>{ 
             return pinturas.id === DetalleNumber
            })
            res(itemFound)
             }, 600);
         });
 
         traerProducto.then((res) => {
             setProducto(res);
         });
 
     }, [detalleId])
 
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