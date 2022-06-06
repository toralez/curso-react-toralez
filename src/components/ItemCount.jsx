//@ts-check
import React, { useState } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export default function ItemCount( props) {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [disable, setDisable] = useState(false);

  const handleClick = () => {
    setOpen(true);
    setTotal(count);
    setDisable(true);
    props.onAdd(count);
  };

  const handleClose = () => {

    setOpen(false);
  };
  
  return (
    <Box>
        <ButtonGroup disabled={ (props.stock < props.initial) || disable }>
          <Button
            aria-label="Menos"
            onClick={() => {
              setCount(Math.max(count - 1, props.initial)); 
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button>
              {count}
          </Button>
          <Button
            aria-label="Mas"
            onClick={() => {
              setCount(Math.min(count + 1, props.stock));
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
          <Button variant="contained" onClick={handleClick}>Añadir</Button>
        </ButtonGroup>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        >
          <Alert onClose={handleClose} 
          severity="success" 
          sx={{ width: '100%',}}>
          { total === 1 ? "Se añadió 1 artículo al carrito" : `Se añadieron ${total} artículos al carrito` }
        </Alert>
      </Snackbar>
    </Box>
  )
}
