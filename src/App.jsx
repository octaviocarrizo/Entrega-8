import './App.css';
import NavBar from './components/Lista/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemsOferta from './components/ItemsOferta';
import ItemsDestacado from './components/ItemDestacado';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">
    <BrowserRouter> 
      <NavBar/>
        <Routes>
            <Route path="/" 
            element={<ItemListContainer props='Catalogo de Productos'/>} />
          </Routes>
          <Routes>
            <Route path="/Ofertas" 
            element={<ItemsOferta props='Catalogo de las Ofertas'/>} />
          </Routes>
          <Routes>
            <Route path="/Destacado" 
            element={<ItemsDestacado props='Catalogo de Lo Destacado'/>} />
          </Routes>
          <Routes>
            <Route path="/detalle" 
            element={<ItemDetailContainer greeting='Detalle del producto'/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;