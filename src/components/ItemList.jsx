//@ts-check
import React from 'react'
import ItemPre from './ItemPre';
import Grid from '@mui/material/Grid';

export default function ItemList(props) {

  return (
      <>
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="stretch"
    sx={{margin: "10px auto", maxWidth: "90%",}}>
    {props.productos.map(item => <Grid item key={item.id} sx={{display:'flex',}}><ItemPre item={item} /></Grid>)}
    </Grid>
    </>
  )
}

