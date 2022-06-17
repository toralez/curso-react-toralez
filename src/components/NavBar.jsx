//@ts-check
import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TvIcon from '@mui/icons-material/Tv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GamesIcon from '@mui/icons-material/Games';
import VideogameAssetSharpIcon from '@mui/icons-material/VideogameAssetSharp';
import CartWidget from './CartWidget';
import { cartContext } from '../Contexts/CartContext';
import { Link as RouterLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const settings = ['Perfil', 'Salir'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { cartCount } = useContext(cartContext);  

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setAnchorElNav( open );
  };

  const list = (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
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
    </Box>
  );

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar  position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <VideogameAssetSharpIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Joan', serif",
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ONE RING
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="cuenta del usuario"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
            anchor='bottom'
            open={anchorElNav}
            onClose={toggleDrawer(false)}
          >
            {list}
          </Drawer>
          </Box>
          <VideogameAssetSharpIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: "'Joan', serif",
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ONE RING
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={RouterLink} 
              to='/categoria/consolas'
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Consolas
            </Button>
            <Button
              component={RouterLink} 
              to='/categoria/accesorios'
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Accesorios
            </Button>
            <Button
              component={RouterLink} 
              to='/categoria/juegos'
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Juegos
            </Button>
          </Box>

          <CartWidget cartCount={ cartCount() } />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Usuario" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;