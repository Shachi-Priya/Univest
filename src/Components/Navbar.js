import React from "react";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';

const Navbar=()=>{
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                <Toolbar>
                    <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, alignSelf: 'flex-end'}}
                    >
                    Reliance Industries
                    </Typography>
                    <IconButton color="inherit">
                    <NotificationAddOutlinedIcon />
                    </IconButton>
                    <IconButton color="inherit">
                    <TurnedInNotOutlinedIcon/>
                    </IconButton>
                </Toolbar>
                <Toolbar>
                    <Typography variant="h4">
                        ₹2185.61
                    </Typography>
                    <Typography variant="h6" color="red" sx={{marginLeft:1.5}}>
                        -11.02 (-1.80%)
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <Typography variant="body2" sx={{marginLeft:0.5, marginTop:-5}}>
                        last updated at 3:40PM
                    </Typography>
                </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default Navbar;