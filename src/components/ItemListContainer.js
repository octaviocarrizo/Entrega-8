import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import {productos} from './Productos/productos';


const ItemListContainer = ({props}) => {

   const [Products, setProductos] = useState([]) 
    
    useEffect (()=>{

        const traerProductos = new Promise ((res, rej) => {
            setTimeout(() => {
                res(productos);
            },2000);
        });

        traerProductos.then((res) => {
            setProductos(res);
        });

    }, [])

   return (
   <div>
        <h1>
        {props}
        </h1>
        <ItemList productos={Products} />
   </div>
    )
   
}

export default ItemListContainer;