import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} >

            </Route>
        </Routes>
    </BrowserRouter>
    ,
    document.getElementById('root')
);