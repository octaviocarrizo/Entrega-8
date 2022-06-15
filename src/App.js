import './App.css';
import NavBar from './components/Lista/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (

    <div className="App">
    <h1>Subastas.com</h1>
    <NavBar/>
    <ItemListContainer Titulo= "Mensaje para el usuario (Bienvenido)"/>
    </div>
  );
}

export default App;