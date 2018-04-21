import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import './index.css';
import { Provider } from 'react-redux';
import App from './containers/app/app';

ReactDOM.render(
    <Provider store={store}>
        <App />        
    </ Provider>, document.getElementById('root')
);


