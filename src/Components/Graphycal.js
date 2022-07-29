import React from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import Paper from '@mui/material/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
  } from '@devexpress/dx-react-chart-material-ui';

const Graphycal=()=>{

    const data = [
        { x: 1, y: 30 },
        { x: 2, y: 40 },
        { x: 3, y: 5 },
        { x: 4, y: 2 },
        { x: 5, y: 21 },
    ];

    return(
        <>
            <Box sx={{ flexGrow: 1, marginBottom:4}} >
                <Toolbar>
                    <Typography sx={{ flexGrow: 1, alignSelf: 'flex-end'}}>
                        <Button sx={{marginRight:2}} variant="contained">NSE</Button>
                        <Button variant="outlined">BSE</Button>
                    </Typography>
                    <Button sx={{ marginTop:3}} variant="outlined"><CandlestickChartOutlinedIcon/></Button>
                </Toolbar>
            </Box>  
            <Paper sx={{margin:2}}>
                <Chart data={data}>
                    <ArgumentAxis />
                    <ValueAxis />
                    <LineSeries argumentField="x" valueField="y" />
                </Chart>
            </Paper>
        </>
    );
}

export default Graphycal;