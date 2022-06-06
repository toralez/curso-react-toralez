import React, { useContext, useState } from 'react';
import { cartContext } from '../Contexts/CartContext';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CartList from './CartList';
import Checkout from './Checkout';

export default function Cart() {
  const { cart } = useContext(cartContext);
  const [hidden, setHidden] = useState(true);

  function total(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + Number(i), 0);
  }
  function handleClick(){
    setHidden(false);
  }

  return(
    <>
      <Typography mt={2} mb={2} variant='h2' align='center'>Carrito de Compras</Typography>
      <Grid container sx={{maxWidth: '90%', margin: 'auto', justifyContent: 'space-around', alignItems: 'center',}}>
          <Grid item sx={{marginTop:'20px',}}>
              <CartList />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                { ((total(cart) !== 0) && hidden === true) && <Button variant="contained" sx={{ margin: '10px', }} onClick={handleClick}>Finalizar Compra</Button> }
              </Box>
          </Grid>
          { !hidden && (total(cart) !== 0) && <Grid item sx={{marginTop:'20px', padding: '10px', background: '#1e1e1e', borderRadius: '5px',}}>
              <Typography variant='h5'>Detalles de pedido</Typography>
              <Checkout />
            </Grid>
          }
      </Grid>
    </>
  );
}