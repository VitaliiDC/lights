import React, {useState} from 'react';
import { Grid, Container, Button } from '@mui/material';
import {data} from '../config/data';

const App = () => {
    const [sliceArr, setSliceArr] = useState(16);
    const [currentSlide, setCurrentSlide] = useState(0);

    const buttonsArray = data.btvValues.map((_, i) => 
        <Grid item xs={3}>
            <Button onClick={() => {setCurrentSlide(i)}} fullWidth="100%" size="large" variant="contained">{
                i < 16 ? `A${i+1}` : `B${i-15}`
            }</Button>
        </Grid>).slice(16- sliceArr,32- sliceArr);
    
    return (
    <div className="app">
        <Container className="container" maxWidth="sm">
            <div className="display">
                {data.btvValues[currentSlide]}
            </div>
            <Grid 
                container
                direction="row" 
                spacing={2}
                >
                {buttonsArray}
                <Grid item xs={6}>
                    <Button onClick={() => setSliceArr(16)} size="large" fullWidth="100%" variant="contained">A</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button size="large" onClick={() => setSliceArr(0)} fullWidth="100%" variant="contained">B</Button>
                </Grid>
            </Grid>
        </Container>
    </div>)
}

export default App;