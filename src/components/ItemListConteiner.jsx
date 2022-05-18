import React from 'react'
import Typography from '@mui/material/Typography';
import ItemList from './ItemList';

export default function ItemListConteiner(props) {
  return (
    <>
      <Typography mt={2} mb={2} variant='h2' align='center'>{props.greeting}</Typography>
      <ItemList />
    </>
  )
}
