import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { cartContext } from '../Contexts/CartContext';
import { Button, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

export default function CartList() {
  const { cart, removeItem, cartCount, clearCart } = useContext(cartContext);

  function total(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + Number(i), 0);
  }

  if(cartCount() > 0){
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>Producto</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Suma</TableCell>
                <TableCell align="right">Acciones</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {cart.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                <Box component="img" sx={{border: "solid 1px #ccc", maxWidth: "70px", maxHeight: "50px",}}
            alt={row.description}
            src={row.pictureUrl} />
                </TableCell> 
                <TableCell component="th" scope="row">
                    {row.title}
                </TableCell>
                <TableCell align="right">{new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(row.price)}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(row.price * row.quantity)}</TableCell>
                <TableCell align="right"><IconButton><DeleteIcon onClick={ () => removeItem(row.id) } /></IconButton></TableCell>
                </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={2} />
              <TableCell align="right" colSpan={3}>Total</TableCell>
              <TableCell align="right">{new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(total(cart))}</TableCell>
              <TableCell align="right"><IconButton><DeleteIcon onClick={ () => clearCart() } /></IconButton></TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
    );
  }else{
    return(
        <Box sx={{
            textAlign: 'center',
        }}>
        <Typography variant='h3'>No tiene productos en su carrito</Typography>
        <Button variant="contained"><Link style={{ textDecoration: 'none', color: 'inherit', }} to='/'>Regresar a la tienda</Link></Button>
        </Box>
    );
    }
}