import React, {useEffect} from 'react';
import App from './app';
import {connect} from 'react-redux';
import { setListThunk, getListThunk } from '../reducers/main/main';

import {CircularProgress} from '@mui/material';

const AppContainer = (props) => {

    useEffect(() => {
        props.getListThunk();
    }, [])

    return props.loading 
        ? <CircularProgress className="preloader"></CircularProgress>
        : <App {...props} />
}

const stateToProps = (state) => ({
    list: state.main.list,
    loading: state.main.loading
});

const dispatchToProps = {setListThunk, getListThunk};

export default connect(stateToProps, dispatchToProps)(AppContainer);