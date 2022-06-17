//@ts-check
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Divider, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = styled(Card)({
    width: '100%', margin: '5px', height:'100%', borderLeft: '5px solid #e4a101',
    transition: '1s ease',
    '&:hover':{
      background: '#e4a101',
      color: 'black',
      borderColor: '#1e1e1e',
  }
});

export default function ItemPre(props) {
    
  return (
    <Link to={'/producto/' + props.item.id} style={{textDecoration: 'none',}}>
      <ProductCard>
        <CardMedia
          sx={{objectFit:'contain', textDecoration:"none", marginBottom:'10px', background: '#ffffff',}}
          component="img"
          height="140"
          image= {props.item.pictureUrl}
          alt={props.item.title}
        />
        <Divider variant='middle' sx={{backgroundColor: '#e4a101',}} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{height: '2.5em'}}>
            {props.item.title}
          </Typography>
          <Typography variant="body2" sx={{lineHeight:'1.25em', height:'5em', overflow:'hidden',}}>
            {props.item.description}
          </Typography>
          <Typography variant='h6' align="right" >
            {new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(props.item.price)}
          </Typography>
        </CardContent>
      </ProductCard>
    </Link>
  )
}
