import React from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';

const Numerical=()=>{
    return(
        <>
            <Box sx={{ flexGrow: 1, bgcolor:"#e8f2fc", margin:1.5}}>
                <Toolbar>
                    <Typography variant="h5" sx={{ flexGrow: 1, alignSelf: 'flex-end'}} color="#748DA6">
                        Today's Low
                    </Typography>
                    <Typography variant="h5" sx={{marginTop:2.5}} color="#748DA6">
                        Today's High
                    </Typography>
                </Toolbar>
                <Toolbar sx={{marginTop:-2}}>
                    <Typography variant="h6" sx={{ flexGrow: 1, alignSelf: 'flex-end'}}>
                        ₹326.25
                    </Typography>
                    <Typography variant="h6" sx={{marginTop:2.5}}>
                        ₹854.78
                    </Typography>
                </Toolbar>
                <Divider sx={{height:4, bgcolor:"#0358ad", marginLeft:2, marginRight:2, marginTop: 2}}/>
                <Toolbar>
                    <Typography variant="h5" sx={{ flexGrow: 1, alignSelf: 'flex-end'}} color="#748DA6">
                        Open
                    </Typography>
                    <Typography variant="h5" sx={{marginTop:2.5}} color="#748DA6">
                        Today's Low
                    </Typography>
                </Toolbar>
                <Toolbar sx={{marginTop:-2}}>
                    <Typography variant="h6" sx={{ flexGrow: 1, alignSelf: 'flex-end'}}>
                        ₹653.5
                    </Typography>
                    <Typography variant="h6" sx={{marginTop:2.5}}>
                        ₹553.5
                    </Typography>
                </Toolbar>
            </Box>
        </>
    )
}

export default Numerical;