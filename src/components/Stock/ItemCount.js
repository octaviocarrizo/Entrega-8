import { useState }  from 'react';

function ItemCount({ stock, initial,  onAdd }) {

    const[cant, setCount] = useState(initial);

    const suma = () => {

        if(cant < stock){
            setCount (cant + 1)
        }

    }

    const resta = () => {

        if(cant !== initial){
            setCount (cant - 1)
        }
     }

    return(    
    <div>
        <button onClick={resta}> - </button>
            <span> {cant} </span>    
        <button onClick={suma}> + </button>
        <br/>
        <button onClick={() => onAdd(cant) } >Agregar al carrito</button>      
    </div>

    );

}

export default ItemCount 