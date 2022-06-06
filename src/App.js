//@ts-check
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { OneRingTheme } from './DarkThemeConfig';
import { CssBaseline } from '@mui/material';
import CartContext from './Contexts/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Error404 from './components/Error404';

function App() {

  return (
    <CartContext>
      <ThemeProvider theme={OneRingTheme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a One Ring Store"/>} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<Error404 />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CartContext>
  );
}

export default App;
