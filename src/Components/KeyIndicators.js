import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Grid from '@mui/material/Grid';

const KeyIndicators=()=>{
    return(
        <Box sx={{ flexGrow: 2 }}>
            <Toolbar>
                <Typography variant="h5">
                    Key Indicators
                </Typography>
                <InfoOutlinedIcon sx={{marginLeft:2}} color="primary"/>
            </Toolbar>
            <Toolbar>
                <Box sx={{ flexGrow: 2 , border:1.5, borderRadius:2, borderColor:"#c3ccd4"}}>
                    <Grid container sx={{marginBottom:1, marginTop:1, marginLeft:0.5}} spacing={2} columns={16}>
                        <Grid item xs={4} color="#848b91">
                            P/E
                        </Grid>
                        <Grid item xs={4}>
                            12.21
                        </Grid>
                        <Grid item xs={4} color="#848b91">
                            Sector P/E
                        </Grid>
                        <Grid item xs={4}>
                            11.01
                        </Grid>
                    </Grid>
                    <Grid container sx={{marginBottom:1, marginTop:1, marginLeft:0.5}} spacing={2} columns={16}>
                        <Grid item xs={4} color="#848b91">
                            P/B
                        </Grid>
                        <Grid item xs={4}>
                            11.01
                        </Grid>
                        <Grid item xs={4} color="#848b91">
                            Sector P/B
                        </Grid>
                        <Grid item xs={4}>
                            11.01
                        </Grid>
                    </Grid>
                    <Grid container sx={{marginBottom:1, marginTop:1, marginLeft:0.5}} spacing={2} columns={16}>
                        <Grid item xs={4} color="#848b91">
                            Div Yield
                        </Grid>
                        <Grid item xs={4}>
                            11.01%
                        </Grid>
                        <Grid item xs={4} color="#848b91">
                            Sector Div Yield
                        </Grid>
                        <Grid item xs={4}>
                            11.01%
                        </Grid>
                    </Grid>
                    <Grid container sx={{marginBottom:1, marginTop:1, marginLeft:0.5}} spacing={2} columns={16}>
                        <Grid item xs={4} color="#848b91">
                            1M return
                        </Grid>
                        <Grid item xs={4}>
                            11.01%
                        </Grid>
                        <Grid item xs={4} color="#848b91">
                            3M return
                        </Grid>
                        <Grid item xs={4}>
                            11.01%
                        </Grid>
                    </Grid>
                    <Grid container sx={{marginBottom:1, marginTop:1, marginLeft:0.5}} spacing={2} columns={16}>
                        <Grid item xs={4} color="#848b91">
                            1Yr return 
                        </Grid>
                        <Grid item xs={4}>
                            11.01%
                        </Grid>
                        <Grid item xs={4} color="#848b91">
                            Mkt cap
                        </Grid>
                        <Grid item xs={4}>
                            20Cr
                        </Grid>
                    </Grid>
                </Box>
            </Toolbar>
        </Box>
        
    )
}

export default KeyIndicators;