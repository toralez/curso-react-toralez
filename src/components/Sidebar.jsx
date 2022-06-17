//@ts-check
import { Avatar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import TvIcon from '@mui/icons-material/Tv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GamesIcon from '@mui/icons-material/Games';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext, useState } from 'react'
import { cartContext } from '../Contexts/CartContext';
import { Link as RouterLink } from 'react-router-dom';

export default function Sidebar(props) {
  const { cart, removeItem, cartCount } = useContext(cartContext);
  const drawerWidth = 240;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar title="Categorías">
        <Typography variant='h6'>Categorías</Typography>
      </Toolbar>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to='/categoria/consolas'>
              <ListItemIcon>
                <TvIcon />
              </ListItemIcon>
              <ListItemText primary='Consolas' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to='/categoria/accesorios'>
              <ListItemIcon>
                <SportsEsportsIcon />
              </ListItemIcon>
              <ListItemText primary='Accesorios' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to='/categoria/juegos'>
              <ListItemIcon>
                <GamesIcon />
              </ListItemIcon>
              <ListItemText primary='Juegos' />
            </ListItemButton>
          </ListItem>
      </List>
      {cartCount() > 0 ?
      <>
        <Divider />
        <Toolbar title="Categorías">
          <Typography variant='h6'>Carrito</Typography>
        </Toolbar>
        <Divider />
        <List>
          { cart.map( item => (
            <ListItem key={item.id} alignItems="flex-start" 
            secondaryAction={
              <IconButton aria-label="comment" onClick={() => removeItem(item.id)} sx={{ width: '30px', height: '30px', }}>
                <DeleteIcon />
              </IconButton>
            }>
              <ListItemAvatar sx={{ minWidth: '45px', }}>
                <Avatar variant="rounded" alt="Remy Sharp" src={item.pictureUrl} sx={{ width: '30px', height: '30px', }} />
              </ListItemAvatar>
              <ListItemText
                primary={`${item.title} x ${item.quantity}`} primaryTypographyProps={{ fontSize: '0.8rem', }}
              />
            </ListItem>
          ))}
        </List>
        </>
        :
        ''
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box marginTop={4} sx={{ display: 'flex', justifyContent: 'flex-end', }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth, xs: '100%', }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          variant="permanent"
          sx={{
            display: 'block',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', 
            width: '100%', 
            position: 'inherit',
          },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  )
}
