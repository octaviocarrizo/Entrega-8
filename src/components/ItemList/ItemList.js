import React from "react";
import Item from "../Item/Item";

const ItemList = ({productos}) => {

    return (
        <div>
            {
                productos.map ((item) =>
                <Item item={item} />
                )
            }
        </div>
    )
 }
 
 export default ItemList;