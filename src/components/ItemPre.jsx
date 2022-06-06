//@ts-check
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';
//import { Link } from 'react-router-dom';

export default function ItemPre(props) {
    
  return (
    <Link href={'/producto/' + props.item.id} underline="none">
      <Card sx={{ width: 345, margin: '5px', height:'100%',}}>
        <CardMedia
          sx={{objectFit:'contain', textDecoration:"none", marginBottom:'10px', background: '#ffffff',}}
          component="img"
          height="140"
          //image="https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/hardware/switch/accessories/joy-con-l-r-the-legend-of-zelda-skyward-sword-hd-edition/joy-con-pkg?v=2022042115"
          image= {props.item.pictureUrl}
          alt={props.item.title}
        />
        <Divider variant='middle' />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{lineHeight:'1.25em', height:'5em', overflow:'hidden',}}>
            {props.item.description}
          </Typography>
          <Typography variant='h6' align="right" >
            {new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(props.item.price)}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
