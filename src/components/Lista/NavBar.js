import "./Nav.css";
import CartWidget from '../CartWidget';
import ItemCount from '../Stock/ItemCount';

export default function NavBar() { 

    const onAdd = (quantiti) => {
        console.log(` Compraste ${quantiti} unidades `)
    }

    return(
     <nav className="nav-main">
        <ul className="nav-list">
            <li>ofertas</li> 
            <li>Lo destacado</li>
            <li>ofertas Hot</li>
            <CartWidget/>
        </ul> 
        <ItemCount stock={5} initial={1} onAdd={onAdd} /> 
    </nav> 
    )

}