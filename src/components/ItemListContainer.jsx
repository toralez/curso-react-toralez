//@ts-check
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { LinearProgress } from '@mui/material';
import Error404 from './Error404';

export default function ItemListContainer(props) {
  const {id} = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);



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
        <>{ items.length > 0 ? 
        <> 
          <Typography sx={{textTransform:'capitalize',}} mt={2} mb={2} variant='h2' align='center'>{props.greeting || id}</Typography>
          <ItemList productos={items} /> 
        </> : 
        <Error404 /> }</>
      }
    </>
  )
}
