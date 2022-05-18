import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});

    useEffect(() => {
    
      const getItem = new Promise((res, rej) => {
          setTimeout(() => {
              res(
                {
                    id: 1,
                    title: "Joy-Con",
                    price: "10000",
                    stock: 9,
                    description: "Set de controles Joy-Con que cuenta con un diseño especial. El Joy-Con derecho está inspirado en la Espada Maestra, mientras que el control izquierdo está inspirado en el escudo hyliano.",
                    pictureUrl: 'https://assets.nintendo.com/image/upload/b_white,c_pad,f_auto,h_382,q_auto,w_573/ncom/en_US/hardware/switch/accessories/joy-con-l-r-the-legend-of-zelda-skyward-sword-hd-edition/joy-con-pkg?v=2022042115'
                });
          }, 2000);
        });
        console.log(getItem);
  
        getItem.then(result => setItem(result));
      }, []);
    
    return (
        <ItemDetail product={item} />
    )
}
