//@ts-check
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Grid, LinearProgress } from '@mui/material';
import Error404 from './Error404';
import Sidebar from './Sidebar';
import ItemListSort from './ItemListSort';

export default function ItemListContainer(props) {
  const {id} = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChangeSort = (sortValue) => {
    sortValue === 'priceDes' && setItems([...items].sort((a, b) => b.price - a.price));
    sortValue === 'priceAsc' && setItems([...items].sort((a, b) => a.price - b.price));
    sortValue === 'title' && setItems([...items].sort((a, b) => a.title.localeCompare(b.title)));
  }

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    let itemCollection = id ?
      query( collection(db, 'products'), where('category', '==', id)) :
      collection(db, "products");
    getDocs(itemCollection).then(({docs}) => {      
      if(docs.length){
        setItems(docs.map( item => ({ id: item.id, ...item.data() })));}
    })
    .catch(e => console.log(e))
    .finally(() => setLoading(false));
    
  }, [id]);
  

  return (
    <>
      {loading ? <LinearProgress /> : 
        <>
        { items.length > 0 ? 
        <>
          <Typography sx={{textTransform:'capitalize',}} pt={2} pb={2} variant='h2' align='center'>{props.greeting || id}</Typography>
          <Grid container sx={{margin: "auto",}}>
            <Grid item md={9} mt={4}>
            <ItemListSort handleChangeSort={handleChangeSort} />
              <ItemList productos={items} /> 
            </Grid>
            <Grid item xs={12} md={3} sx={{justifyContent:'center'}}>
              <Sidebar />
            </Grid>
          </Grid>
        </> : 
        <Error404 /> }</>
      }
    </>
  )
}
