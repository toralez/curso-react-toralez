import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';

function App() {
  return (
    <>
      <NavBar />
      <ItemListConteiner greeting="Buenos días, buenas tardes y buenas noches"/>
    </>
  );
}

export default App;
