import React from 'react';
import ReactDOM from 'react-dom';
import Foodie from './Foodie';
import './Styles/index.css';

const App = ()=>{
    return <Foodie />
}

ReactDOM.render(<App />, document.querySelector('#root'));


