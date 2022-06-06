//@ts-check
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { LinearProgress } from '@mui/material';
import Error404 from './Error404';

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState({});

      useEffect(() => {
        setLoading(true);
    
        const db = getFirestore();
        let productFB = id ? doc(db, 'products', id) :
          doc(db, "products");
        getDoc(productFB).then((item) => {
          
        console.log(item.exists() );
        if(item.exists()){
          setItem({ id: item.id, ...item.data() });}
        })
        .catch(e => console.log(e))
        .finally(() => setLoading(false));
        
      }, []);
    
    return (
      <>
        {loading ? <LinearProgress /> :
         <> { item === {} ? <Error404 /> : <ItemDetail item={item} /> } </>
        }
      </>
    )
}