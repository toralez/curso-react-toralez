import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ItemPre(props) {
    
  return (
    <Card sx={{ width: 345, margin: '5px', }}>
      <CardMedia
        sx={{objectFit:'contain'}}
        component="img"
        height="140"
        //image="https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/hardware/switch/accessories/joy-con-l-r-the-legend-of-zelda-skyward-sword-hd-edition/joy-con-pkg?v=2022042115"
        image= {props.item.pictureUrl}
        alt={props.item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.price}
        </Typography>
      </CardContent>
    </Card>
  )
}
