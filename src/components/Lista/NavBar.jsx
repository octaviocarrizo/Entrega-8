import "./Nav.css";
import CartWidget from '../CartWidget';

import {Link} from 'react-router-dom'

export default function NavBar() { 


    return(
     <nav className="nav-main">
        <ul className="nav-list">
            <Link to="/">logo</Link>
            <Link to="/Ofertas">Ofertas</Link>
            <Link to="/Destacado">Destacado</Link>
            <CartWidget/>
        </ul> 
    </nav> 
    )

}