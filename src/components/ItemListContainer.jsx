import React, {useState, useEffect} from 'react';
import ItemList from './ItemList/ItemList';
import {productos} from './Productos/productos';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({props}) => {

   const [Products, setProductos] = useState([]) 
    const {CategoryId} = useParams()

    useEffect (()=>{

        const traerProductos = new Promise ((res, rej) => {
            setTimeout(() => {
             if( CategoryId === undefined )
                res(productos);
            else{
                const itemsFound = productos.filter( Pin =>{
                    return Pin.categoría === CategoryId;
                })
            res(itemsFound);
            }

            },600);
        });

        traerProductos.then((res) => {
            setProductos(res);
        });

    }, [CategoryId])

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