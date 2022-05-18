import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListConteiner greeting="Bienvenido a One Ring Store"/>
      <ItemDetailContainer />
    </>
  );
}

export default App;
