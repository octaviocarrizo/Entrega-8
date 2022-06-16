import React from "react";

const Item = ({item}) => {
    
    return (
        <div>
             <div>
                <h2>
                {item.id}
                </h2>
            </div>
            <div>
                <h2>
                {item.name}
                </h2>
            </div>
            <div>
                <h2>
                {item.descripcion}
                </h2>
            </div>
            <div>
                <h2>
                {item.precio}
                </h2>
            </div>
            <div>
                <h2>
                {item.stock}
                </h2>
            </div>
        </div>
    )
 }
 
 export default Item
 