//@ts-check
import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import { Grid, Rating, Typography } from '@mui/material';
import ItemCount from './ItemCount';
import { cartContext } from '../Contexts/CartContext';
import ItemBreadcrums from './ItemBreadcrums';

export default function ItemDetail({item}) {
  const [value, setValue] = useState(2);
  const {cart, addToCart, isInCart} = useContext(cartContext);  

  function onAdd(count){
    addToCart({ ...item, quantity: count });
  }

  function cartQuantity(id){
    let itemQuantity = cart.find( product => product.id === id).quantity;

    return itemQuantity;
  }

  function stockQuantityMessage(product){
    let message = product.stock + ' ';
    
    message += (product.stock === "1") ? "unidad" : "unidades";

    if(isInCart(product.id)){
      message += ` (${cartQuantity(product.id)} en carrito)`;
    }

    return message;
  }

  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="stretch"
    sx={{display:"flex", margin: "10px auto", maxWidth: "90%", background: "#272727e0", borderRadius: "3px",}}>
        <Grid item xs={12} md={6}>
          <ItemBreadcrums item={item} />
            <Box component="img" sx={{border: "solid 1px #ccc", maxWidth: "100%", borderRadius: "5px",}}
            alt={item.description}
            src={item.pictureUrl} />
        </Grid>
        <Grid item xs={12} md={6}>
            <Box sx={{padding:"20px",}}>
                <Typography variant="h1" sx={{fontSize:"2em",}}>{item.title}</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
                <Typography mt= {2}>{item.description}</Typography>
                <Typography mt= {2} sx={{fontSize:"2em",}}>{new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(item.price)}</Typography>
                <Typography mt= {2}>12 cuotas sin interés de {new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(item.price / 12)}</Typography>
                <Typography mt= {2}>Stock: { stockQuantityMessage(item) }</Typography>
                <ItemCount mt= {2} stock={isInCart(item.id) ? item.stock - cartQuantity(item.id) : item.stock} initial={1} onAdd={onAdd}/>
            </Box>
        </Grid>
    </Grid>
  )
}