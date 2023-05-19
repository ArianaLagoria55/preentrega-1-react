import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ContenedorProductos from './componentes/ContenedorProductos/ContenedorProductos';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a la tienda online!" />
      <ContenedorProductos />
    </>
  );
}

export default App;