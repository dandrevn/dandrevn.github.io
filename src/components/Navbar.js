//Header Navigation Bar 
import * as React from 'react';
import { AppBar, 
    Toolbar, 
    Typography, 
    Button, 
    Container, 
    Box, 
    ListItem, 
    ListItemButton, 
    ListItemText, 
    List,
    Drawer,
} from "@mui/material";
import DehazeIcon from '@mui/icons-material/Dehaze';
const Navbar = () => {
    
    const navItems = ['About me', 'Work Experience', 'Skills', 'Education', 'Work with me!' ];

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (e) => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return;
          }
        setState({...state, [anchor]: open});
    };
    const sideBarContent = (anchor) => (
        <Box
        sx={{
            width: 'auto',
        }}
        role='presentation'
        onClick={toggleDrawer(anchor, false)}
        onKeyDown = {toggleDrawer(anchor, false)}
        >
            <List>
              {navItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                         <ListItemText primary={item}/>
                    </ListItemButton>
                </ListItem>
              ))};
            </List>
        </Box>
    )
   return (
    <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar>
            <Typography variant="h6" component='div'>
                DANDREV NASI
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'end' }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box className="sample-class" sx={{ flexGrow: 1, display:{xs: 'flex', sm: 'flex', md: 'none'}, justifyContent: 'end'}}>
                <Button onClick={toggleDrawer('left', true)}>
                    <DehazeIcon sx={{color: 'white'}}/>
                </Button>
                <Drawer
                    anchor='left'
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    {sideBarContent('left')}
                </Drawer>
          </Box>
        </Toolbar>
        </Container>
    </AppBar>
   );
};

export default Navbar;