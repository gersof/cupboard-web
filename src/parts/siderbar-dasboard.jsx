import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderDashboard from './header-dashboard';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );
  
  
  function SiderbarDashboard({open, toggleDrawer}) {
     return   <Drawer variant="permanent" open={open}>
     <Toolbar
      style={{textAlign:'right'}}
       sx={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'flex-end',
         px: [1],

       }}

     >
         <h3>Cupboard</h3>
       <IconButton onClick={toggleDrawer} style={{  display: 'flex',
         alignItems: 'center',
         justifyContent: 'flex-end'}}>
         <ChevronLeftIcon />
       </IconButton>
     </Toolbar>
     <Divider />
     {/* <List>{mainListItems}</List>
     <Divider />
     <List>{secondaryListItems}</List> */}
   </Drawer>      
  }
  
  export default SiderbarDashboard
  