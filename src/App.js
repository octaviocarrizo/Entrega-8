import './App.css';
import NavBar from './components/Lista/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (

    <div className="App">
    <h1>Subastas.com</h1>
    <NavBar/>
    <ItemListContainer props='Este es un mensaje para el usuario 
    (Bienvenido)'/>
    </div>
  );
}

export default App;