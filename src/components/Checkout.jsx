import { Button, Grid, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { doc, addDoc, updateDoc, getFirestore, serverTimestamp, collection, increment } from "firebase/firestore";
import { cartContext } from '../Contexts/CartContext';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const [id, setId] = useState('');
  const { cart, clearCart } = useContext(cartContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const newOrder = { buyer: {}, items: [], total: 0, time: '' };
  const defaultValues = {
    name: null,
    phone:null,
    email: null,
  };
  const [formValues, setFormValues] = useState(defaultValues);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    clearCart();
    navigate("/", { replace: true });
  };

  function emailFormat(mail) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(mail !== null && mail.length >= 0){
      return regex.test(mail)
    } else{
        return true
      }
  }

  const sendOrder = async () => {
    if(formValues.name != null && formValues.name !== "" && formValues.phone != null && formValues.phone !== "" && formValues.email != null && formValues.email !== ""){
      newOrder.buyer = formValues;
      newOrder.items = cart.map(product => (
          {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
          }
        ));
      newOrder.total = cart.map(({ price, quantity }) => price * quantity).reduce((sum, i) => sum + Number(i), 0);
      newOrder.time = serverTimestamp();

      const db = getFirestore();
      
      const orders = collection(db, "orders");
      await addDoc(orders, newOrder).then(({id}) => setId(id));
      await newOrder.items.map( product => 
         updateDoc( doc(db, 'products', product.id), {
          stock: increment( (-1) * product.quantity )
        } )
      );
      
      handleOpen();
    }else{
      let newValues = {...formValues};
      if (formValues.name === null) {
        newValues = {
        ...newValues,
        name: "",
      };}
      if (formValues.phone === null) {
        newValues = {
        ...newValues,
        phone: "",
      };}
      if (formValues.email === null) {
        newValues = {
        ...newValues,
        email: "",
      };}
      setFormValues(newValues);
    }
  }  

  const handleSubmit = (event) => {
    event.preventDefault();
    sendOrder();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Nombre"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            error={formValues.name === ""}
            helperText={formValues.name === "" ? "Ingrese su nombre" : " "}
            sx={{ marginTop: '10px', }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="phone-input"
            name="phone"
            label="Tel??fono"
            type="text"
            value={formValues.phone}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            error={formValues.phone === ""}
            helperText={formValues.phone === "" ? "Ingrese su tel??fono" : " "}
            sx={{ marginTop: '10px', }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="email-input"
            name="email"
            label="Email"
            type="text"
            value={formValues.email}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            error={(formValues.email === "") || !emailFormat(formValues.email)}
            helperText={(formValues.email === "" ? "Ingrese su email" : (!emailFormat(formValues.email) ? "Formato aceptado: user@sitio.com" : "" ))}
            sx={{ marginTop: '10px', }}
          />
        </Grid>
        <Button variant="contained" color="primary" type="submit" sx={{ marginTop: '10px', }}>
          Comprar
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Orden Enviada"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {'La orden con id: ' + id + ' fue enviada correctamente.'}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </form>
  );
}
