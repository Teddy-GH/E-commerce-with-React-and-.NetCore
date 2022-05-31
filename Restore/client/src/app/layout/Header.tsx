import { ShoppingCart } from "@mui/icons-material";
import { AppBar, List, ListItem, Switch, Toolbar, Typography, IconButton, Badge, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}
const midLinks = [
  {title: 'catalog', path:'/catalog'},
  {title: 'about', path:'/about'},
  {title: 'contact', path:'/contact'},
]

const rightLinks = [
  {title: 'login', path:'/login'},
  {title: 'register', path:'/register'},
]

const navStyles = {
  color:'inherit',
   typography:'h6',
    '&:hover':{
      color:'grey.500'
    },
    '&.active':{
      color:'text.secondary'
    }
}
const Header = ({darkMode, handleThemeChange}:Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>

        <Box display='flex' alignItems='center'>
          <Typography variant="h6" component={NavLink} to='/'  sx={navStyles}>RE-STORE</Typography>
        <Switch value={darkMode}  onChange={handleThemeChange} />
        </Box>
        
        <List sx={{display: 'flex'}}>
          {midLinks.map(({title, path}) => (
            <ListItem 
            component={NavLink}
            to={path}
            key={path}
            sx={navStyles}
            >
               {title.toUpperCase( 

               )}

            </ListItem>
          ))}
        </List>


        <Box display='flex' alignItems='center'>
          <IconButton>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <List sx={{display: 'flex'}}>
          {rightLinks.map(({title, path}) => (
            <ListItem 
            component={NavLink}
            to={path}
            key={path}
            sx={navStyles}
            >
               {title.toUpperCase( 

               )}

            </ListItem>
          ))}
        </List>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
