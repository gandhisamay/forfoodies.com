import React from 'react';
import ReactDOM from 'react-dom';
import Foodie from './Foodie';
import './Styles/index.css';
import { BrowserRouter} from 'react-router-dom';

const App = ()=>{
    return <Foodie />
}

ReactDOM.render((
    <BrowserRouter>
    <App />
    </BrowserRouter>
    ), 
    document.querySelector('#root')
);


