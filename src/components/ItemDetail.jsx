import React from 'react'
import Box from '@mui/material/Box';
import { Grid, Rating, Typography } from '@mui/material';
import ItemCount from './ItemCount';

export default function ItemDetail(props) {
  const [value, setValue] = React.useState(2);
  
  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="stretch"
    sx={{display:"flex", margin: "10px auto", maxWidth: "90%", border:"solid 1px #ccc"}}>
        <Grid item xs={12} md={6}>
            <Box component="img" sx={{border: "solid 1px #ccc", maxWidth: "100%"}}
            alt={props.product.description}
            src={props.product.pictureUrl} />
        </Grid>
        <Grid item xs={12} md={6}>
            <Box sx={{padding:"20px",}}>
                <Typography variant="h1" sx={{fontSize:"2em",}}>{props.product.title}</Typography>
                <Rating
                    mt= {2} 
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
                <Typography mt= {2}>{props.product.description}</Typography>
                <Typography mt= {2} sx={{fontSize:"2em",}}>{new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(props.product.price)}</Typography>
                <Typography mt= {2}>12 cuotas sin interés de {new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(props.product.price / 12)}</Typography>
                <Typography mt= {2}>Stock: {props.product.stock} {props.product.stock === "1" ? "unidad" : "unidades"}</Typography>
                <ItemCount mt= {2} stock={props.product.stock} initial={1}/>
            </Box>
        </Grid>
    </Grid>
  )
}
