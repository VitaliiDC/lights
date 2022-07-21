import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/appContainer';
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <HashRouter basename='/'>
            <Provider store={store}>
                <Routes>
                    <Route path='/' element={<App />} ></Route>
                </Routes>
            </Provider>
        </HashRouter>
    </BrowserRouter>
);
