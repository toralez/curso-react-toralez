import React, { useState, useEffect } from 'react'
import ItemPre from './ItemPre'
import Box from '@mui/material/Box';

export default function ItemList() {
    const [list, setList] = useState([]);

    useEffect(() => {
    
      const getList = new Promise((res, rej) => {
        setTimeout(() => {
            res([
    {
        id: 1,
        title: "Joy-Con",
        price: "$10000",
        stock: 9,
        description: "Set de controles Joy-Con que cuenta con un diseño especial. El Joy-Con derecho está inspirado en la Espada Maestra, mientras que el control izquierdo está inspirado en el escudo hyliano.",
        pictureUrl: 'https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/hardware/switch/accessories/joy-con-l-r-the-legend-of-zelda-skyward-sword-hd-edition/joy-con-pkg?v=2022042115'
    },
    {
        id: 2,
        title: "GamePad",
        price: "$14900",
        stock: 5,
        description: "Control Pro",
        pictureUrl: 'https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/hardware/switch/accessories/joy-con-l-r-the-legend-of-zelda-skyward-sword-hd-edition/joy-con-pkg?v=2022042115'
    },
    {
        id: 3,
        title: "Nintendo Switch",
        price: "$78000",
        stock: 7,
        description: "Consola híbrida",
        pictureUrl: 'https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/hardware/switch/accessories/joy-con-l-r-the-legend-of-zelda-skyward-sword-hd-edition/joy-con-pkg?v=2022042115'
    }
]);
        }, 2000);
      });
      console.log(getList);

      getList.then(result => setList(result));
    }, []);
    

  return (
      <>
    <Box sx={{display:"flex", justifyContent:"center"}}>
    {list ? list.map(item => <Box sx={{display: "inline-flex"}} key={item.id}><ItemPre item={item} /></Box>) : <div>Loading...</div>}
    </Box>
    </>
  )
}

