import React, {useState, useEffect} from 'react';
import { Grid, Container, Button, TextField } from '@mui/material';

const App = props => {
    const [sliceArr, setSliceArr] = useState(16);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fieldValue, setFieldValue] = useState(props.list[currentSlide]);
    const [isInputChanged, setIsInputChanged] = useState(false);

    useEffect(() => {
        setFieldValue(props.list[currentSlide]);
        setIsInputChanged(false);
    }, [currentSlide]);

    const buttonsArray = props.list.map((_, i) => 
        <Grid key={i} item xs={3}>
            <Button onClick={() => {setCurrentSlide(i)}} fullWidth size="large" variant="contained">{
                i < 16 ? `A${i+1}` : `B${i-15}`
            }</Button>
        </Grid>).slice(16- sliceArr,32- sliceArr);
    
    return (
    <div className="app">
        <Container className="container" maxWidth="sm">
           {isInputChanged && <Button
                variant='outlined'
                onClick={() => {
                    props.setListThunk({index: currentSlide, value: fieldValue, list: props.list});
                    setIsInputChanged(false);
                }}
                className={"submitButton"}
                >Зберегти</Button>}
            <div className="display">
                <TextField
                    fullWidth
                    name="display"
                    multiline
                    rows={6}
                    value={fieldValue}
                    onChange={((e) => {
                        setFieldValue(e.target.value);
                        setIsInputChanged(true);
                    })}
                ></TextField>
                <span className="display__indicator">{currentSlide > 15 ? `B${currentSlide - 15}` : `A${currentSlide + 1}`}</span>
            </div>
            <Grid 
                container
                direction="row" 
                spacing={2}
                >
                {buttonsArray}
                <Grid item xs={6}>
                    <Button onClick={() => setSliceArr(16)} size="large" fullWidth variant="contained">A</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button size="large" onClick={() => setSliceArr(0)} fullWidth variant="contained">B</Button>
                </Grid>
            </Grid>
        </Container>
    </div>)
}

export default App;